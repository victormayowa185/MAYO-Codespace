// src/components/CodeEditor.tsx
import React, { useState, useEffect } from 'react';
import { CgOptions } from "react-icons/cg";
import '../styles/code-editor.css';

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
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    code,
    onCodeChange,
    isDarkMode,
    onFullscreenToggle,
    isFullscreen
}) => {
    const [activeLanguage, setActiveLanguage] = useState<'jsx' | 'css' | 'html'>('jsx');
    const [isAutoWrap, setIsAutoWrap] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ctrl+S to switch language
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                setActiveLanguage(prev => {
                    if (prev === 'jsx') return 'css';
                    if (prev === 'css') return 'html';
                    return 'jsx';
                });
            }
            // Ctrl+F for fullscreen
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                onFullscreenToggle();
            }
            // Ctrl+W for word wrap
            if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
                e.preventDefault();
                setIsAutoWrap(!isAutoWrap);
            }
            // Ctrl+Shift+F for format
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'F') {
                e.preventDefault();
                handleFormatCode();
            }
            // Ctrl+O for options
            if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
                e.preventDefault();
                setShowOptions(!showOptions);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isAutoWrap, onFullscreenToggle, showOptions]);

    const handleFormatCode = () => {
        const formatted = code[activeLanguage]
            .replace(/\s+/g, ' ')
            .replace(/\s*([{}()=;:,])\s*/g, '$1 ')
            .trim();
        onCodeChange(activeLanguage, formatted);
        setShowOptions(false);
    };

    const handleClearCode = () => {
        if (window.confirm('Clear all code in current editor?')) {
            onCodeChange(activeLanguage, '');
            setShowOptions(false);
        }
    };

    return (
        <div className={`code-editor-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Controls moved to the right */}
            <div className="editor-controls-bar right-aligned">
                {/* Combined Language + Options buttons */}
                <div className="combined-controls">
                    {/* Language Switcher */}
                    <div className="language-dropdown">
                        <button
                            className="language-toggle-btn"
                            onClick={() => setShowOptions(false)}
                            title="Switch Language (Ctrl+S)"
                        >
                            {activeLanguage.toUpperCase()}
                            <span className="dropdown-arrow">▼</span>
                        </button>
                        <div className="language-dropdown-content">
                            <button
                                onClick={() => {
                                    setActiveLanguage('jsx');
                                    setShowOptions(false);
                                }}
                                className={activeLanguage === 'jsx' ? 'active' : ''}
                            >
                                <span className="lang-icon">⚛️</span> JSX
                            </button>
                            <button
                                onClick={() => {
                                    setActiveLanguage('css');
                                    setShowOptions(false);
                                }}
                                className={activeLanguage === 'css' ? 'active' : ''}
                            >
                                <span className="lang-icon">🎨</span> CSS
                            </button>
                            <button
                                onClick={() => {
                                    setActiveLanguage('html');
                                    setShowOptions(false);
                                }}
                                className={activeLanguage === 'html' ? 'active' : ''}
                            >
                                <span className="lang-icon">📄</span> HTML
                            </button>
                        </div>
                    </div>

                    {/* Options Button */}
                    <button
                        className="options-toggle-btn"
                        onClick={() => setShowOptions(!showOptions)}
                        title="Options (Ctrl+O)"
                    >
                        <CgOptions />
                   
                    </button>

                    {/* Options Menu */}
                    {showOptions && (
                        <div className="options-menu">
                            <div className="menu-header">
                                <h4>Editor Options</h4>
                                <button className="close-menu-btn" onClick={() => setShowOptions(false)}>×</button>
                            </div>
                            <div className="menu-items">
                                <button className="menu-item" onClick={handleFormatCode}>
                                    <span className="menu-icon">✨</span>
                                    <div className="menu-text">
                                        <span className="menu-title">Format Code</span>
                                        <span className="menu-shortcut">Ctrl+Shift+F</span>
                                    </div>
                                </button>
                                <button className="menu-item" onClick={() => setIsAutoWrap(!isAutoWrap)}>
                                    <span className="menu-icon">↔️</span>
                                    <div className="menu-text">
                                        <span className="menu-title">Auto Wrap</span>
                                        <span className="menu-status">{isAutoWrap ? 'ON' : 'OFF'}</span>
                                        <span className="menu-shortcut">Ctrl+W</span>
                                    </div>
                                </button>
                                <button className="menu-item" onClick={handleClearCode}>
                                    <span className="menu-icon">🗑️</span>
                                    <div className="menu-text">
                                        <span className="menu-title">Clear Editor</span>
                                        <span className="menu-warning">This cannot be undone</span>
                                    </div>
                                </button>
                                <button className="menu-item" onClick={onFullscreenToggle}>
                                    <span className="menu-icon">{isFullscreen ? '⤓' : '⤢'}</span>
                                    <div className="menu-text">
                                        <span className="menu-title">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
                                        <span className="menu-shortcut">Ctrl+F</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Code Editor Area */}
            <div className="code-editor-container">
                <div className="editor-header">
                    <span className="file-name">app.{activeLanguage === 'jsx' ? 'jsx' : activeLanguage}</span>
                    <span className="language-badge">{activeLanguage.toUpperCase()}</span>
                </div>
                <textarea
                    className={`code-editor ${isAutoWrap ? 'auto-wrap' : ''}`}
                    value={code[activeLanguage]}
                    onChange={(e) => onCodeChange(activeLanguage, e.target.value)}
                    placeholder={`Start coding in ${activeLanguage.toUpperCase()}... (Ctrl+W to toggle word wrap)`}
                    spellCheck="false"
                    style={{ whiteSpace: isAutoWrap ? 'pre-wrap' : 'pre' }}
                />
                <div className="editor-footer">
                    <span className="line-count">
                        {code[activeLanguage].split('\n').length} lines
                    </span>
                    <span className="char-count">
                        {code[activeLanguage].length} characters
                    </span>
                    <span className="wrap-status">
                        {isAutoWrap ? 'Word Wrap: ON' : 'Word Wrap: OFF'}
                    </span>
                </div>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="shortcuts-help">
                <span>Shortcuts: </span>
                <kbd>Ctrl+S</kbd> Switch Language •
                <kbd>Ctrl+W</kbd> Toggle Wrap •
                <kbd>Ctrl+F</kbd> Fullscreen •
                <kbd>Ctrl+Shift+F</kbd> Format •
                <kbd>Ctrl+O</kbd> Options
            </div>
        </div>
    );
};

export default CodeEditor;