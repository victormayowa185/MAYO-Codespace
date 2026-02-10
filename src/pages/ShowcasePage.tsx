// src/pages/ShowcasePage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // ← ADD THIS IMPORT
import {
  MdCode,
  MdPlayArrow,
  MdFolderOpen,
  MdFlashOn,
  MdSecurity,
  MdCheckCircle,
  MdArrowForward,
  MdComputer,
  MdSpeed,
  MdVideocam,
  MdTerminal
} from 'react-icons/md';
import { FaTerminal, FaCode, FaPlay, FaLightbulb } from 'react-icons/fa';
import { SiReact, SiJavascript, SiCss3 } from 'react-icons/si';
import '../styles/showcase.css';

const ShowcasePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle theme from localStorage or system preference
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
        {/* Optional: Add background video here */}
        {/* <video className="hero-video-bg" autoPlay muted loop>
          <source src="/videos/terminal-bg.mp4" type="video/mp4" />
        </video> */}
         <div className="hero-bg-animation"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            View <span className='gradient-text'> MAYO CodeSpace</span> in action.
          </h1>
          <p className="hero-subtitle">
            A fast, browser-based coding environment built for modern developers.
            Write, preview, protype, and test your code instantly—no setup required.
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

      {/* Core Features Demos */}
      <section id="features" className="showcase-features">
        <h2 className="section-title">What You Can Build</h2>

        <div className="features-grid">
          {/* Feature 1: Live Code Editing */}
          <div className="feature-card">
            <div className="feature-icon">
              <FaCode size={40} />
            </div>
            <h3 className="feature-title">Live Code Editing</h3>
            <p className="feature-desc">
              Write React components in JSX and see changes instantly.
              Real-time compilation with Babel in the browser.
            </p>
            <div className="feature-video">

              {/* Video wrapper with your actual video */}
              <div className="video-wrapper">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="hero-video"
                  poster="/videos/poster.jpg"
                >
                  <source src="/video2.mp4" type="video/mp4" />
                  <source src="/videos/coding-hero.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
              </div>

              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #007acc, #005d99)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'monospace',
                fontSize: '14px'
              }}>
                {/* Video placeholder */}
                <div style={{ textAlign: 'center' }}>
                  <SiReact size={48} />
                  <div style={{ marginTop: '10px' }}>Live Editing Demo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Multi-file Workspace */}
          <div className="feature-card">
            <div className="feature-icon">
              <MdFolderOpen size={40} />
            </div>
            <h3 className="feature-title">Multi-file Workspace</h3>
            <p className="feature-desc">
              Switch between JSX, CSS, and HTML files seamlessly.
              Professional IDE layout with file management.
            </p>
            <div className="feature-video">
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #06d6a0, #118ab2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <SiJavascript size={48} />
                  <SiCss3 size={48} style={{ marginLeft: '10px' }} />
                  <div style={{ marginTop: '10px' }}>Multi-file Demo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Fast Preview */}
          <div className="feature-card">
            <div className="feature-icon">
              <MdFlashOn size={40} />
            </div>
            <h3 className="feature-title">Instant Preview</h3>
            <p className="feature-desc">
              See your React app render live as you type.
              No page reloads needed—just pure development speed.
            </p>
            <div className="feature-video">
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #ffd166, #ff9e6d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#333'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <MdSpeed size={48} />
                  <div style={{ marginTop: '10px', fontWeight: 'bold' }}>Live Preview Demo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Walkthrough Video */}
      <section className="walkthrough-section">
        <div className="walkthrough-container">
          <h2 className="section-title">Complete Walkthrough</h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 30px',
            lineHeight: '1.6'
          }}>
            Watch how to go from an idea to a working React component in under 60 seconds.
          </p>

          <div className="walkthrough-video">
            {/* Add your walkthrough video here */}
            {/* <video controls poster="/thumbnails/walkthrough-thumb.jpg">
              <source src="/videos/walkthrough.mp4" type="video/mp4" />
            </video> */}
            <div style={{
              width: '100%',
              height: '400px',
              background: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <div style={{ textAlign: 'center' }}>
                <MdVideocam size={64} />
                <div style={{ marginTop: '20px', fontSize: '1.2rem' }}>
                  Full Walkthrough Video
                </div>
                <div style={{ marginTop: '10px', opacity: 0.7 }}>
                  (30-60 seconds demo)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Different */}
      <section className="differentiators">
        <h2 className="section-title">Built for Developers</h2>

        <div className="diff-grid">
          <div className="diff-item">
            <div className="diff-icon">
              <MdComputer size={24} />
            </div>
            <p className="diff-text">No Setup Required</p>
          </div>

          <div className="diff-item">
            <div className="diff-icon">
              <FaTerminal size={24} />
            </div>
            <p className="diff-text">Runs in Browser</p>
          </div>

          <div className="diff-item">
            <div className="diff-icon">
              <MdSpeed size={24} />
            </div>
            <p className="diff-text">Lightweight & Fast</p>
          </div>

          <div className="diff-item">
            <div className="diff-icon">
              <MdSecurity size={24} />
            </div>
            <p className="diff-text">Sandboxed Execution</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Code?</h2>
        <p className="cta-subtitle">
          Experience professional-grade development in your browser.
        </p>
        <Link to="/workspace" className="cta-button">
          Start Coding Now
          <MdArrowForward size={20} />
        </Link>
      </section>

      <Footer />

    </div>
  );
};

export default ShowcasePage;