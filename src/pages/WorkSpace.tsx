// src/pages/WorkspacePage.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import LivePreview from '../components/LivePreview';
import CodeEditor from '../components/CodeEditor';
import '../styles/workspace.css';

const WorkspacePage: React.FC = () => {
  // DECLARE isDarkMode FIRST before using it anywhere
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);
  const [code, setCode] = useState({
    jsx: `// Welcome to CodeWorkspace
import React from 'react';

function App() {
  return (
    <div className="app">
      <h1>Hello, Developer!</h1>
      <p>Start coding your React components here.</p>
      <button onClick={() => alert('Welcome!')}>
        Click Me
      </button>
    </div>
  );
}

export default App;`,
    css: `/* CSS Editor */
.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  text-align: center;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #007acc;
  margin-bottom: 20px;
}

p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

button {
  background: #007acc;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #005d99;
}`,
    html: `<!-- HTML Editor -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeWorkspace Project</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="root"></div>
  <script src="app.js"></script>
</body>
</html>`
  });

  // Handle fullscreen toggle
  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        handleFullscreenToggle();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  // Handle code change
  const handleCodeChange = (language: 'jsx' | 'css' | 'html', value: string) => {
    setCode(prev => ({ ...prev, [language]: value }));
  };

  return (
    <div className={`workspace-page ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Navigation Bar (hidden in fullscreen) */}
      {!isFullscreen && <Navbar />}

      {/* Main Workspace Container */}
      <div className={`workspace-container ${isFullscreen ? 'fullscreen' : ''}`}>
        
        {/* Split Layout Container */}
        <div className="split-layout">
          
          {/* Code Editor Panel (Left side) */}
          <div className="code-editor-panel">
            <CodeEditor 
              code={code}
              onCodeChange={handleCodeChange}
              isDarkMode={isDarkMode}
              onFullscreenToggle={handleFullscreenToggle}
              isFullscreen={isFullscreen}
              onThemeToggle={() => setIsDarkMode(!isDarkMode)}
              onPreviewToggle={() => setIsPreviewVisible(!isPreviewVisible)}
              isPreviewVisible={isPreviewVisible}
            />
          </div>

          {/* Live Preview Panel (Right side) - Only show when visible */}
          {isPreviewVisible && (
            <div className="live-preview-panel">
              <LivePreview 
                jsxCode={code.jsx}
                cssCode={code.css}
                htmlCode={code.html}
                isDarkMode={isDarkMode}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;