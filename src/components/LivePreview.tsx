// src/components/LivePreview.tsx
import React, { useEffect, useRef, useState } from 'react';
import { IoMdRefresh } from "react-icons/io";
import { BsHourglassSplit } from "react-icons/bs";
import '../styles/live-preview.css';

interface LivePreviewProps {
  jsxCode: string;
  cssCode: string;
  htmlCode: string;
  isDarkMode: boolean;
}

const LivePreview: React.FC<LivePreviewProps> = ({
  jsxCode,
  cssCode,
  htmlCode,
  isDarkMode
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!iframeRef.current) return;

    setIsLoading(true);

    // Clean JSX - remove imports/exports
    const cleanJSX = jsxCode
      .replace(/export\s+default\s+(\w+);?/g, 'window.App = $1;')
      .replace(/import\s+.*?\s+from\s+['"].*?['"];?/g, '// Import removed for preview');

    const fullHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; padding: 20px; }
          ${cssCode}
          
          .error {
            background: #fee;
            color: #c00;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
            font-family: monospace;
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
        
        <!-- Load Babel for JSX compilation -->
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        
        <script type="text/babel" data-presets="react">
          // User's JSX code
          try {
            ${cleanJSX}
            
            // If no App component defined, create a default one
            if (typeof window.App === 'undefined') {
              window.App = () => React.createElement('div', null, 'Edit JSX code to see preview');
            }
            
            // Render the app
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(React.createElement(window.App));
          } catch (error) {
            document.getElementById('root').innerHTML = \`
              <div class="error">
                <strong>Error:</strong> \${error.message}
              </div>
            \`;
          }
        </script>
      </body>
      </html>
    `;

    const iframe = iframeRef.current;
    iframe.srcdoc = fullHTML;

    // Handle loading complete
    iframe.onload = () => setIsLoading(false);

    // Cleanup
    return () => {
      iframe.onload = null;
    };
  }, [jsxCode, cssCode, htmlCode]);

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      iframeRef.current.srcdoc = iframeRef.current.srcdoc; // Force refresh
    }
  };

  return (
    <div className={`live-preview ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="preview-header">

        <div className="preview-controls">
          <button
            className="refresh-btn"
            onClick={handleRefresh}
            title="Refresh Preview"
            disabled={isLoading}
          >
            {isLoading ? 
            (
              <BsHourglassSplit />
            ) : (

              <IoMdRefresh />

            )}
          </button>
          <span className="status">{isLoading ? 'Loading...' : 'Live'}</span>
        </div>
      </div>

      <div className="preview-content">
        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <p>Compiling code...</p>
          </div>
        )}

        <iframe
          ref={iframeRef}
          title="live-code-preview"
          className="preview-iframe"
          sandbox="allow-scripts allow-same-origin"
          style={{ opacity: isLoading ? 0.5 : 1 }}
        />
      </div>

    </div>
  );
};

export default LivePreview;