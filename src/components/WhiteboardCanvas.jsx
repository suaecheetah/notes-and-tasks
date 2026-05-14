import React, { useState, useEffect, useMemo } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import "@excalidraw/excalidraw/index.css";

export default function WhiteboardCanvas({ taskId }) {
  const storageKey = `excalidraw-task-${taskId}`;
  
  // Load initial data from localStorage
  const initialData = useMemo(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          elements: parsed.elements || [],
          appState: { ...parsed.appState, scrollToContent: true },
          scrollToContent: true,
        };
      } catch (e) {
        console.error('Failed to parse excalidraw data', e);
      }
    }
    return null;
  }, [storageKey]);

  const handleChange = (elements, appState, files) => {
    // Only save elements and a subset of appState to keep it clean
    const dataToSave = {
      elements,
      appState: {
        viewBackgroundColor: appState.viewBackgroundColor,
        currentItemFontFamily: appState.currentItemFontFamily,
        theme: appState.theme,
      },
    };
    localStorage.setItem(storageKey, JSON.stringify(dataToSave));
  };

  const [theme, setTheme] = useState(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tldraw-wrapper" style={{ height: '600px', width: '100%' }}>
      <Excalidraw 
        initialData={initialData}
        onChange={handleChange}
        theme={theme}
      />
    </div>
  );
}
