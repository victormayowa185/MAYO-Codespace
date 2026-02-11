// src/pages/ShowcasePage.tsx
import React from 'react';
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
import { FaTerminal, FaCode } from 'react-icons/fa';
import '../styles/showcase.css';

const ShowcasePage: React.FC = () => {
  return (
    <div className="showcase-page">
      {/* Navbar controls theme globally */}
      <Navbar />

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
          <div className="feature-card">
            <div className="feature-icon"><FaCode size={40} /></div>
            <h3 className="feature-title">Live Code Editing</h3>
            <p className="feature-desc">
              Write React components in JSX and see changes instantly.
              Real-time compilation in the browser.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><MdFolderOpen size={40} /></div>
            <h3 className="feature-title">Multi-file Workspace</h3>
            <p className="feature-desc">
              Switch between JSX, CSS, and HTML files seamlessly
              with a professional IDE layout.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><MdFlashOn size={40} /></div>
            <h3 className="feature-title">Instant Preview</h3>
            <p className="feature-desc">
              See your React app render live as you type.
              No reloads, just speed.
            </p>
          </div>
        </div>
      </section>

      {/* Walkthrough */}
      <section className="walkthrough-section">
        <div className="walkthrough-container">
          <h2 className="section-title">Complete Walkthrough</h2>
          <p className="walkthrough-subtitle">
            Watch how to go from an idea to a working React component in under 60 seconds.
          </p>

          <div className="walkthrough-video">
            <div className="video-placeholder">
              <MdVideocam size={64} />
              <div>Full Walkthrough Video</div>
              <small>(30–60 seconds demo)</small>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="differentiators">
        <h2 className="section-title">Built for Developers</h2>
        <div className="diff-grid">
          <div className="diff-item"><MdComputer /><p>No Setup Required</p></div>
          <div className="diff-item"><FaTerminal /><p>Runs in Browser</p></div>
          <div className="diff-item"><MdSpeed /><p>Lightweight & Fast</p></div>
          <div className="diff-item"><MdSecurity /><p>Sandboxed Execution</p></div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Code?</h2>
        <p className="cta-subtitle">
          Experience professional-grade development in your browser.
        </p>
        <Link to="/workspace" className="cta-button">
          Start Coding Now <MdArrowForward size={20} />
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default ShowcasePage;
