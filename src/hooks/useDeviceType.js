import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user is on a mobile or desktop device.
 * Uses window.matchMedia for responsive detection and falls back to user agent.
 * Updates automatically on window resize.
 * 
 * @returns {'mobile' | 'desktop'} The detected device type.
 */
export function useDeviceType() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDevice = () => {
      // Primary check: CSS Media Query for max-width 768px (standard mobile breakpoint)
      if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
        return 'mobile';
      }
      
      // Fallback check: User Agent string
      if (navigator.userAgent) {
        const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobileUA) {
          return 'mobile';
        }
      }
      
      return 'desktop';
    };

    // Initial check on mount
    setDeviceType(checkDevice());

    // Listener for window resize to handle orientation changes or window resizing
    const handleResize = () => {
      setDeviceType(checkDevice());
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}