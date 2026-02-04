// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        {/* Video Container (60% width, left side) */}
        <div className="video-container">
          {/* Video wrapper with your actual video */}
          <div className="video-wrapper">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="hero-video"
              poster="/videos/poster.jpg" // Optional: Add a poster image
            >
              <source src="/video.mp4" type="video/mp4" />
              <source src="/videos/coding-hero.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
          </div>
        </div>

        {/* Hero Container Overlay (on top of right side) */}
        <div className="hero-overlay-container">
          <div className="hero-card">
            <div className="hero-badge">GSoC 2024 PROJECT</div>
            <h1 className="hero-title">
              Professional <span className="highlight">Elegant</span>
              <br />
              Code
            </h1>
            <p className="hero-description">
              A browser-based IDE for learning, prototyping, 
              and sharing React components with zero setup. 
              Built for modern web development.
            </p>

            <div className="hero-actions">
              <Link to="/workspace" className="btn btn-primary">
                <span className="btn-icon">🚀</span>
                Launch Workspace
              </Link>
              <Link to="/showcase" className="btn btn-secondary">
                <span className="btn-icon">📂</span>
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section (Below fold) */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose CodeWorkspace?</h2>
          <p className="section-subtitle">
            Built with performance, accessibility, and developer experience in mind.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Instant Feedback</h3>
              <p className="feature-description">
                See your React components update in real-time as you type.
                No manual refresh required.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3 className="feature-title">Professional Tools</h3>
              <p className="feature-description">
                Built-in code editor with syntax highlighting, auto-completion,
                and error detection.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3 className="feature-title">Share Anywhere</h3>
              <p className="feature-description">
                Generate shareable URLs for your projects. Collaborate with
                team members instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;