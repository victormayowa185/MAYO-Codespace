import React, { useState, useEffect } from 'react';
import '../styles/code-editor.css';
import { useTheme } from '../context/ThemeContext';
import Editor from '@monaco-editor/react';
import { FiMaximize2, FiMinimize2, FiSun, FiMoon, FiEye, FiEyeOff } from 'react-icons/fi';
import { AiOutlineCode } from 'react-icons/ai';
import { VscFileCode } from 'react-icons/vsc';

interface CodeEditorProps {
  code: {
    jsx: string;
    css: string;
    html: string;
  };
  onCodeChange: (language: 'jsx' | 'css' | 'html', value: string) => void;
  onFullscreenToggle: () => void;
  isFullscreen: boolean;
  onPreviewToggle: () => void;
  isPreviewVisible: boolean;
  activeTab?: 'jsx' | 'css' | 'html'; // ADDED
  onTabChange?: (tab: 'jsx' | 'css' | 'html') => void; // ADDED
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onCodeChange,
  onFullscreenToggle,
  isFullscreen,
  onPreviewToggle,
  isPreviewVisible,
  activeTab = 'jsx', // DEFAULT VALUE
  onTabChange // RECEIVE THIS PROP
}) => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Get theme from context
  const [activeTabState, setActiveTabState] = useState<'jsx' | 'css' | 'html'>(activeTab);
  const [editorKey, setEditorKey] = useState(0);

  // Sync with parent component
  useEffect(() => {
    setActiveTabState(activeTab);
  }, [activeTab]);

  // Handle tab change
  const handleTabChange = (tab: 'jsx' | 'css' | 'html') => {
    setActiveTabState(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // Safe getter for code content
  const getCodeContent = (lang: 'jsx' | 'css' | 'html'): string => {
    if (!code || typeof code !== 'object') {
      return '';
    }
    return code[lang] || '';
  };

  // Handle code change safely
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      onCodeChange(activeTabState, value);
    }
  };

  // Get editor language based on active tab
  const getEditorLanguage = () => {
    switch (activeTabState) {
      case 'jsx': return 'javascript';
      case 'css': return 'css';
      case 'html': return 'html';
      default: return 'javascript';
    }
  };

  // Get editor value safely
  const getEditorValue = () => {
    return getCodeContent(activeTabState);
  };

  // Refresh editor on theme change
  useEffect(() => {
    setEditorKey(prev => prev + 1);
  }, [isDarkMode]);

  return (
    <div className={`code-editor ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="editor-header">
        <div className="editor-tabs">
          <button
            className={`tab-btn ${activeTabState === 'jsx' ? 'active' : ''}`}
            onClick={() => handleTabChange('jsx')}
            title="Switch to JSX (Ctrl+1)"
          >
            <AiOutlineCode className="tab-icon" />
            <span>JSX</span>
            <span className="shortcut-hint">Ctrl+1</span>
          </button>
          <button
            className={`tab-btn ${activeTabState === 'css' ? 'active' : ''}`}
            onClick={() => handleTabChange('css')}
            title="Switch to CSS (Ctrl+2)"
          >
            <VscFileCode className="tab-icon" />
            <span>CSS</span>
            <span className="shortcut-hint">Ctrl+2</span>
          </button>
          <button
            className={`tab-btn ${activeTabState === 'html' ? 'active' : ''}`}
            onClick={() => handleTabChange('html')}
            title="Switch to HTML (Ctrl+3)"
          >
            <VscFileCode className="tab-icon" />
            <span>HTML</span>
            <span className="shortcut-hint">Ctrl+3</span>
          </button>
        </div>

        <div className="editor-controls">
          <button
            className="control-btn"
            onClick={onPreviewToggle}
            title={`${isPreviewVisible ? "Hide Preview (Ctrl+Shift+P)" : "Show Preview (Ctrl+Shift+P)"}`}
          >
            {isPreviewVisible ? <FiEyeOff /> : <FiEye />}
            <span className="control-shortcut">Ctrl+Shift+P</span>
          </button>
          

          
          <button
            className="control-btn"
            onClick={onFullscreenToggle}
            title={`${isFullscreen ? "Exit Fullscreen (Ctrl+F)" : "Fullscreen (Ctrl+F)"}`}
          >
            {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
            <span className="control-shortcut">Ctrl+F</span>
          </button>
        </div>
      </div>

      <div className="editor-content">
        <Editor
          key={`${editorKey}-${activeTabState}`}
          height="100%"
          language={getEditorLanguage()}
          value={getEditorValue()}
          onChange={handleEditorChange}
          theme={isDarkMode ? 'vs-dark' : 'light'}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            automaticLayout: true,
            formatOnPaste: true,
            formatOnType: true,
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            smoothScrolling: true,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;