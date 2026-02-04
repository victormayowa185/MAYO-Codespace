// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-icon">⚛️</span>
          <span className="logo-text">CodeWorkspace</span>
        </div>
        <p className="footer-tagline">
          A professional React development environment built for Google Summer of Code 2024
        </p>
        
        <div className="footer-links">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <Link to="/docs" className="footer-link">
            Documentation
          </Link>
          <a 
            href="https://summerofcode.withgoogle.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GSoC
          </a>
          <Link to="/showcase" className="footer-link">
            Showcase
          </Link>
          <Link to="/workspace" className="footer-link">
            Workspace
          </Link>
        </div>
        
        <div className="footer-copyright">
          © 2024 CodeWorkspace • Open Source • Built for GSoC
        </div>
      </div>
    </footer>
  );
};

export default Footer;