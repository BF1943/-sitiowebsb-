import { useState, useEffect, useCallback, useRef } from 'react';

// Track permanently failed URLs across the application to prevent infinite retry loops
const failedUrls = new Set();

/**
 * Custom hook for robust external API fetching.
 * Features:
 * - 10s Timeout using AbortController
 * - Automatic retries (max 3) with exponential backoff (1s, 2s, 4s)
 * - URL validation before fetch
 * - Break infinite loops by tracking failed URLs
 * - Fallback empty data on final failure
 * - CORS Proxy fallback (allorigins)
 * 
 * Note for Production: External API calls should ideally be moved to Supabase Edge Functions 
 * to completely avoid CORS issues and expose sensitive endpoints safely.
 */
export const useExternalFetch = (url, options = {}) => {
  const [data, setData] = useState(options.fallbackData || null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(!!url);
  
  // Refs to handle component unmounting and race conditions
  const abortControllerRef = useRef(null);
  const isMountedRef = useRef(true);

  // Configuration with defaults
  const MAX_RETRIES = options.retries !== undefined ? options.retries : 3;
  const TIMEOUT_MS = options.timeout || 10000;
  const USE_PROXY = options.useProxyFallback !== undefined ? options.useProxyFallback : true;

  // Stable stringified options to prevent infinite loops in dependencies
  const optionsString = JSON.stringify({
    ...options,
    headers: options.headers || {}
  });

  const fetchData = useCallback(async () => {
    if (!url) {
      console.warn('useExternalFetch: Malformed or empty URL provided.');
      setIsLoading(false);
      return;
    }

    try {
      new URL(url); // Validates URL
    } catch (e) {
      console.warn(`useExternalFetch: Invalid URL structure: ${url}`);
      setIsLoading(false);
      return;
    }

    if (failedUrls.has(url)) {
      console.warn(`useExternalFetch: Skipping fetch for previously failed URL: ${url}`);
      if (isMountedRef.current) {
        setIsLoading(false);
        setData(options.fallbackData || null);
      }
      return;
    }

    if (isMountedRef.current) {
      setIsLoading(true);
      setError(null);
    }

    let attempt = 0;
    let success = false;
    let lastError = null;
    const parsedOptions = JSON.parse(optionsString);

    while (attempt <= MAX_RETRIES && !success && isMountedRef.current) {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

      try {
        let fetchUrl = url;
        
        // If direct fetch fails and proxy is enabled, attempt CORS proxy on retries
        if (attempt > 0 && USE_PROXY) {
          console.log(`useExternalFetch: Attempting CORS proxy fallback for ${url}`);
          fetchUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
        }

        const response = await fetch(fetchUrl, {
          ...parsedOptions,
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
            ...parsedOptions.headers
          }
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();

        if (isMountedRef.current) {
          setData(jsonData);
          setError(null);
          success = true;
        }
      } catch (err) {
        clearTimeout(timeoutId);
        lastError = err;
        
        if (err.name === 'AbortError') {
          console.log(`useExternalFetch: Fetch aborted manually or by timeout for ${url}`);
          if (attempt === 0) {
            // Let it retry on timeout
            console.error(`useExternalFetch: Timeout on attempt ${attempt}`);
          } else {
            break; 
          }
        }

        console.error(`useExternalFetch error (Attempt ${attempt}/${MAX_RETRIES}) for ${url}:`, err);
        
        attempt++;
        if (attempt <= MAX_RETRIES && isMountedRef.current) {
          const backoffDelay = Math.pow(2, attempt - 1) * 1000; // 1s, 2s, 4s backoff
          console.log(`Retrying in ${backoffDelay}ms...`);
          await new Promise(resolve => setTimeout(resolve, backoffDelay));
        }
      }
    }

    if (!success && isMountedRef.current) {
      console.error(`useExternalFetch: All attempts failed for ${url}`);
      failedUrls.add(url);
      setError(lastError || new Error('Fetch failed after max retries'));
      setData(parsedOptions.fallbackData || null);
    }
    
    if (isMountedRef.current) {
      setIsLoading(false);
    }
  }, [url, MAX_RETRIES, TIMEOUT_MS, USE_PROXY, optionsString]);

  useEffect(() => {
    isMountedRef.current = true;
    fetchData();

    return () => {
      isMountedRef.current = false;
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  const refetch = useCallback(() => {
    failedUrls.delete(url);
    if (isMountedRef.current) {
      fetchData();
    }
  }, [url, fetchData]);

  return { data, error, isLoading, refetch };
};