// src/components/OptionsMenu.tsx
import React, { useRef, useEffect } from 'react';
import '../styles/options-menu.css';

interface OptionsMenuProps {
  onFormat: () => void;
  onClear: () => void;
  onFullscreen: () => void;
  onToggleAutoWrap: () => void;
  onClose: () => void;
  isFullscreen: boolean;
  isAutoWrap: boolean;
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({
  onFormat,
  onClear,
  onFullscreen,
  onToggleAutoWrap,
  onClose,
  isFullscreen,
  isAutoWrap
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div ref={menuRef} className="options-menu">
      <div className="menu-header">
        <h4>Editor Options</h4>
        <button className="close-menu-btn" onClick={onClose}>×</button>
      </div>
      
      <div className="menu-items">
        <button 
          className="menu-item"
          onClick={() => {
            onFormat();
            onClose();
          }}
        >
          <span className="menu-icon">✨</span>
          <div className="menu-text">
            <span className="menu-title">Format Code</span>
            <span className="menu-shortcut">Ctrl+Shift+F</span>
          </div>
        </button>

        <button 
          className="menu-item"
          onClick={() => {
            onToggleAutoWrap();
          }}
        >
          <span className="menu-icon">↔️</span>
          <div className="menu-text">
            <span className="menu-title">Auto Wrap</span>
            <span className="menu-status">{isAutoWrap ? 'ON' : 'OFF'}</span>
            <span className="menu-shortcut">Ctrl+W</span>
          </div>
        </button>

        <button 
          className="menu-item"
          onClick={() => {
            onClear();
            onClose();
          }}
        >
          <span className="menu-icon">🗑️</span>
          <div className="menu-text">
            <span className="menu-title">Clear Editor</span>
            <span className="menu-warning">This cannot be undone</span>
          </div>
        </button>

        <button 
          className="menu-item"
          onClick={() => {
            onFullscreen();
            onClose();
          }}
        >
          <span className="menu-icon">{isFullscreen ? '⤓' : '⤢'}</span>
          <div className="menu-text">
            <span className="menu-title">
              {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            </span>
            <span className="menu-shortcut">Ctrl+F</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default OptionsMenu;