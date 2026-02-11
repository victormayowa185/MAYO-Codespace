import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import LivePreview from '../components/LivePreview';
import CodeEditor from '../components/CodeEditor';
import { useTheme } from '../context/ThemeContext';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import '../styles/workspace.css';

const WorkspacePage: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);
  const [activeEditorTab, setActiveEditorTab] = useState<'jsx' | 'css' | 'html'>('jsx');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const [code, setCode] = useState({
    jsx: `// Welcome to CodeWorkspace
import React from 'react';

function App() {
  return (
    <div className="app">
      <h1>Hello, this is MAYO Codespace!</h1>
      <p>Start coding your React components here.</p>
      <button onClick={() => alert('Welcome!')}>
        Start
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
  <title>MAYO Codespace</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`
  });

  // State for resizable panels
  const [editorWidth, setEditorWidth] = useState(50);
  const isResizing = useRef(false);
  const splitContainerRef = useRef<HTMLDivElement>(null);

  // Handle fullscreen toggle
  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
    setFeedbackMessage('Fullscreen toggled');
    clearFeedbackTimeout();
  };

  // Clear feedback timeout
  const clearFeedbackTimeout = () => {
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = null;
    }
  };

  // Show feedback message
  const showFeedback = (message: string) => {
    setFeedbackMessage(message);
    clearFeedbackTimeout();
    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedbackMessage(null);
    }, 2000);
  };

  // Handle mouse down for resizing
  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
  };

  // Handle resizing movement
  const handleResizeMove = (e: MouseEvent) => {
    if (!isResizing.current || !splitContainerRef.current) return;

    const containerRect = splitContainerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const mouseX = e.clientX - containerRect.left;
    const newWidth = (mouseX / containerWidth) * 100;

    // Set bounds (min 20%, max 80%)
    const boundedWidth = Math.max(20, Math.min(80, newWidth));
    setEditorWidth(boundedWidth);
  };

  // Handle resizing end
  const handleResizeEnd = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeEnd);
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearFeedbackTimeout();
    };
  }, []);

  // Handle code change
  const handleCodeChange = (language: 'jsx' | 'css' | 'html', value: string) => {
    setCode(prev => ({ ...prev, [language]: value }));
  };

  // Handle tab change from CodeEditor
  const handleTabChange = (tab: 'jsx' | 'css' | 'html') => {
    setActiveEditorTab(tab);
    showFeedback(`Switched to ${tab.toUpperCase()} tab`);
  };

  // Handle preview toggle
  const handlePreviewToggle = () => {
    setIsPreviewVisible(!isPreviewVisible);
    showFeedback(`Preview ${!isPreviewVisible ? 'shown' : 'hidden'}`);
  };

  // Define keyboard shortcuts - REMOVED description property
  useKeyboardShortcuts([
    {
      key: 'f',
      ctrl: true,
      handler: handleFullscreenToggle
    },
    {
      key: 'p',
      ctrl: true,
      shift: true,
      handler: handlePreviewToggle
    },
    {
      key: '1',
      ctrl: true,
      handler: () => handleTabChange('jsx')
    },
    {
      key: '2',
      ctrl: true,
      handler: () => handleTabChange('css')
    },
    {
      key: '3',
      ctrl: true,
      handler: () => handleTabChange('html')
    },
    {
      key: 'd',
      ctrl: true,
      shift: true,
      handler: toggleDarkMode
    }
  ]);

  return (
    <div className={`workspace-page ${isDarkMode ? 'dark-mode' : ''}`}>
      {!isFullscreen && <Navbar />}

      {/* Keyboard shortcut feedback overlay */}
      {feedbackMessage && (
        <div className="keyboard-shortcut-overlay">
          <span>{feedbackMessage}</span>
        </div>
      )}

      <div className={`workspace-container ${isFullscreen ? 'fullscreen' : ''}`}>
        
        <div 
          className={`split-layout ${!isPreviewVisible ? 'single-panel' : ''}`}
          ref={splitContainerRef}
          style={{ cursor: isResizing.current ? 'col-resize' : 'default' }}
        >
          
          {/* Code Editor Panel */}
          <div 
            className="code-editor-panel"
            style={{ 
              width: isPreviewVisible ? `${editorWidth}%` : '100%',
              height: isPreviewVisible ? '100%' : '100%'
            }}
          >
            <CodeEditor 
              code={code}
              onCodeChange={handleCodeChange}
              onFullscreenToggle={handleFullscreenToggle}
              isFullscreen={isFullscreen}
              onPreviewToggle={handlePreviewToggle}
              isPreviewVisible={isPreviewVisible}
              activeTab={activeEditorTab}
              onTabChange={handleTabChange}
            />
          </div>

          {/* Resizer handle */}
          {isPreviewVisible && (
            <div 
              className="resizer"
              onMouseDown={handleResizeStart}
            />
          )}

          {/* Live Preview Panel */}
          {isPreviewVisible && (
            <div 
              className="live-preview-panel"
              style={{ width: `${100 - editorWidth}%` }}
            >
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