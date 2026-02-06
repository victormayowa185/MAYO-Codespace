import React, { useState, useEffect } from 'react';
import '../styles/code-editor.css';
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
  isDarkMode: boolean;
  onFullscreenToggle: () => void;
  isFullscreen: boolean;
  onThemeToggle: () => void;
  onPreviewToggle: () => void;
  isPreviewVisible: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onCodeChange,
  isDarkMode,
  onFullscreenToggle,
  isFullscreen,
  onThemeToggle,
  onPreviewToggle,
  isPreviewVisible
}) => {
  const [activeTab, setActiveTab] = useState<'jsx' | 'css' | 'html'>('jsx');
  const [editorKey, setEditorKey] = useState(0);

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
      onCodeChange(activeTab, value);
    }
  };

  // Get editor language based on active tab
  const getEditorLanguage = () => {
    switch (activeTab) {
      case 'jsx': return 'javascript';
      case 'css': return 'css';
      case 'html': return 'html';
      default: return 'javascript';
    }
  };

  // Get editor value safely
  const getEditorValue = () => {
    return getCodeContent(activeTab);
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
            className={`tab-btn ${activeTab === 'jsx' ? 'active' : ''}`}
            onClick={() => setActiveTab('jsx')}
          >
            <AiOutlineCode className="tab-icon" />
            <span>JSX</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'css' ? 'active' : ''}`}
            onClick={() => setActiveTab('css')}
          >
            <VscFileCode className="tab-icon" />
            <span>CSS</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'html' ? 'active' : ''}`}
            onClick={() => setActiveTab('html')}
          >
            <VscFileCode className="tab-icon" />
            <span>HTML</span>
          </button>
        </div>

        <div className="editor-controls">
          <button
            className="control-btn"
            onClick={onPreviewToggle}
            title={isPreviewVisible ? "Hide Preview" : "Show Preview"}
          >
            {isPreviewVisible ? <FiEyeOff /> : <FiEye />}
          </button>
          
          <button
            className="control-btn"
            onClick={onThemeToggle}
            title={isDarkMode ? "Light Mode" : "Dark Mode"}
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          
          <button
            className="control-btn"
            onClick={onFullscreenToggle}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
          </button>
        </div>
      </div>

      <div className="editor-content">
        <Editor
          key={`${editorKey}-${activeTab}`}
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