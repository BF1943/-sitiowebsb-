import { useState, useEffect } from 'react';

export function useHorizonsEditor() {
  const [isInHorizonsEditor, setIsInHorizonsEditor] = useState(false);

  useEffect(() => {
    const checkIsEditor = () => {
      try {
        // Check if we are in an iframe
        const isIframe = window.parent !== window;
        
        // Sometimes editors inject a global variable
        const hasEditorGlobal = typeof window.__HORIZONS_EDITOR__ !== 'undefined';
        
        // Check for postMessage capability (common in embedded editors)
        const canPostMessage = typeof window.parent.postMessage === 'function';

        // Additional check for typical Hostinger/Horizons iframe domain if needed, 
        // but for now we rely on iframe + postMessage as a strong indicator we are in an embedded environment
        // or explicitly checking the global if provided.
        const inEditor = isIframe && canPostMessage;

        setIsInHorizonsEditor(inEditor || hasEditorGlobal);
      } catch (e) {
        // Cross-origin errors might occur when accessing window.parent,
        // which ironically often confirms we are in an iframe
        setIsInHorizonsEditor(true); 
      }
    };

    checkIsEditor();
  }, []);

  return { isInHorizonsEditor };
}