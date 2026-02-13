// src/pages/ShowcasePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  MdCode,
  MdPlayArrow,
  MdSecurity,
  MdArrowForward,
  MdComputer,
  MdSpeed,
} from 'react-icons/md';
import { FaTerminal, FaList, FaCalculator, FaPlus } from 'react-icons/fa';
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

      {/* What You Can Build - Project Examples */}
      <section id="features" className="showcase-features">
        <h2 className="section-title">What You Can Build</h2>

        <div className="features-grid">
          {/* Project 1: Counter App */}
          <div className="feature-card">
            <div className="feature-icon"><FaPlus size={40} /></div>
            <h3 className="feature-title">Interactive Counter</h3>
            <p className="feature-desc">
              Build a React counter with useState, buttons, and live updates.
              Perfect for learning state management.
            </p>
            <div className="feature-tags">
              <span>React</span>
              <span>useState</span>
              <span>Events</span>
            </div>
            <Link to="/workspace?template=counter" className="feature-link">
              Try this template →
            </Link>
          </div>

          {/* Project 2: Todo List */}
          <div className="feature-card">
            <div className="feature-icon"><FaList size={40} /></div>
            <h3 className="feature-title">Todo List App</h3>
            <p className="feature-desc">
              Create a fully functional todo list with add, delete, and complete features.
              Includes CSS styling.
            </p>
            <div className="feature-tags">
              <span>React</span>
              <span>CSS</span>
              <span>Arrays</span>
            </div>
            <Link to="/workspace?template=todo" className="feature-link">
              Try this template →
            </Link>
          </div>

          {/* Project 3: Calculator */}
          <div className="feature-card">
            <div className="feature-icon"><FaCalculator size={40} /></div>
            <h3 className="feature-title">Calculator</h3>
            <p className="feature-desc">
              Build a working calculator with operations, clear function, and responsive design.
            </p>
            <div className="feature-tags">
              <span>JSX</span>
              <span>Logic</span>
              <span>CSS Grid</span>
            </div>
            <Link to="/workspace?template=calculator" className="feature-link">
              Try this template →
            </Link>
          </div>
        </div>
      </section>

      {/* Walkthrough */}
      <section className="walkthrough-section">
        <div className="walkthrough-container">
         
          <div className="walkthrough-video">
            <video
              src="/final1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="walkthrough-video-player"
            />
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