import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbHexagonLetterM } from "react-icons/tb";
import { FiSun, FiMoon } from "react-icons/fi"; // NEW IMPORT
import { useTheme } from '../context/ThemeContext'; // NEW IMPORT
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme(); // USE THEME

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">
           <TbHexagonLetterM />
          </span>
          <span className="logo-text">MAYO Codespace</span>
        </div>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/workspace" className={`nav-link ${isActive('/workspace') ? 'active' : ''}`}>
            Workspace
          </Link>
          <Link to="/showcase" className={`nav-link ${isActive('/showcase') ? 'active' : ''}`}>
            Showcase
          </Link>
          <Link to="/docs" className={`nav-link ${isActive('/docs') ? 'active' : ''}`}>
            Documentation
          </Link>
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link github-link"
          >
            GitHub
          </a>

          {/* NEW: Theme Toggle Button */}
          <button
            className="theme-toggle-btn"
            onClick={toggleDarkMode}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;