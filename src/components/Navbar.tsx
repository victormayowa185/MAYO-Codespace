import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbHexagonLetterM } from "react-icons/tb";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from '../context/ThemeContext';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-icon">
            <TbHexagonLetterM />
          </span>
          <span className="logo-text">MAYO Codespace</span>
        </div>

        {/* Desktop Navigation */}
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
            href="https://github.com/victormayowa185"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link github-link"
          >
            GitHub
          </a>
          <button className="theme-toggle-btn" onClick={toggleDarkMode}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* HAMBURGER BUTTON – visible on mobile */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU – appears when menuOpen is true */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <Link to="/" className={`mobile-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </Link>
            <Link to="/workspace" className={`mobile-link ${isActive('/workspace') ? 'active' : ''}`} onClick={closeMenu}>
              Workspace
            </Link>
            <Link to="/showcase" className={`mobile-link ${isActive('/showcase') ? 'active' : ''}`} onClick={closeMenu}>
              Showcase
            </Link>
            <Link to="/docs" className={`mobile-link ${isActive('/docs') ? 'active' : ''}`} onClick={closeMenu}>
              Documentation
            </Link>
            <a
              href="https://github.com/victormayowa185"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-link github-link"
              onClick={closeMenu}
            >
              GitHub
            </a>
            <div className="mobile-theme-wrapper">
              <button className="mobile-theme-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? <FiSun /> : <FiMoon />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;