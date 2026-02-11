// src/pages/ShowcasePage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  MdCode,
  MdPlayArrow,
  MdFolderOpen,
  MdFlashOn,
  MdSecurity,
  MdArrowForward,
  MdComputer,
  MdSpeed,
  MdVideocam,
} from 'react-icons/md';
import { FaTerminal, FaCode, FaPlay } from 'react-icons/fa';
import { SiReact, SiJavascript, SiCss3 } from 'react-icons/si';
import '../styles/showcase.css';

const ShowcasePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`showcase-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />

      {/* Hero Section */}
      <section className="showcase-hero">
        <div className="hero-bg-animation"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            View <span className="gradient-text">MAYO CodeSpace</span>
          </h1>
          <p className="hero-subtitle">
            A fast, browser-based coding environment built for modern developers.
            Write, preview, prototype, and test your code instantly—no setup required.
          </p>
          <div className="cta-buttons">
            <Link to="/workspace" className="primary-cta">
              <MdCode size={20} />
              Try the IDE Now
            </Link>
            <a href="#features" className="secondary-cta">
              <MdPlayArrow size={20} />
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="showcase-features">
        <h2 className="section-title">What You Can Build</h2>

        <div className="features-grid">
          {/* Feature 1: Live Code Editing */}
          <div className="feature-card">
            <div className="feature-icon"><FaCode size={40} /></div>
            <h3 className="feature-title">Live Code Editing</h3>
            <p className="feature-desc">
              Write React components in JSX and see changes instantly. Real-time compilation with Babel in the browser.
            </p>
          </div>

          {/* Feature 2: Multi-file Workspace */}
          <div className="feature-card">
            <div className="feature-icon"><MdFolderOpen size={40} /></div>
            <h3 className="feature-title">Multi-file Workspace</h3>
            <p className="feature-desc">
              Switch between JSX, CSS, and HTML files seamlessly. Professional IDE layout with file management.
            </p>
          </div>

          {/* Feature 3: Fast Preview */}
          <div className="feature-card">
            <div className="feature-icon"><MdFlashOn size={40} /></div>
            <h3 className="feature-title">Instant Preview</h3>
            <p className="feature-desc">
              See your React app render live as you type. No page reloads needed—just pure development speed.
            </p>
          </div>
        </div>
      </section>

      {/* Walkthrough Section */}
      <section className="walkthrough-section">
        <div className="walkthrough-container">
          <h2 className="section-title">Complete Walkthrough</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '1.6' }}>
            Watch how to go from an idea to a working React component in under 60 seconds.
          </p>
          <div className="walkthrough-video" style={{ width: '100%', height: '400px', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <div style={{ textAlign: 'center' }}>
              <MdVideocam size={64} />
              <div style={{ marginTop: '20px', fontSize: '1.2rem' }}>Full Walkthrough Video</div>
              <div style={{ marginTop: '10px', opacity: 0.7 }}>(30-60 seconds demo)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="differentiators">
        <h2 className="section-title">Built for Developers</h2>
        <div className="diff-grid">
          <div className="diff-item"><MdComputer size={24} /><p className="diff-text">No Setup Required</p></div>
          <div className="diff-item"><FaTerminal size={24} /><p className="diff-text">Runs in Browser</p></div>
          <div className="diff-item"><MdSpeed size={24} /><p className="diff-text">Lightweight & Fast</p></div>
          <div className="diff-item"><MdSecurity size={24} /><p className="diff-text">Sandboxed Execution</p></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Code?</h2>
        <p className="cta-subtitle">Experience professional-grade development in your browser.</p>
        <Link to="/workspace" className="cta-button">
          Start Coding Now <MdArrowForward size={20} />
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default ShowcasePage;
