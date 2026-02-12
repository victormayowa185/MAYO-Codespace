// src/pages/HomePage.tsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdSpeed } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { RiGalleryFill } from "react-icons/ri";
import { RiShare2Line } from "react-icons/ri";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/homepage.css';
import '../styles/darkmode.css'

const HomePage: React.FC = () => {
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionSubtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust trigger point
      }
    );

    // Observe all animated elements
    if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
    if (sectionSubtitleRef.current) observer.observe(sectionSubtitleRef.current);

    // Observe all feature cards
    featureCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Add refs to your feature cards
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    featureCardsRef.current[index] = el;
  };

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
              poster="/videos/poster.jpg"
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
            <div className="hero-badge">GSoC 2026 PROJECT</div>
            <h1 className="hero-title">
              <span className="hero-word">Professional, </span>
              <span className="highlight">Elegant,</span>
              <br />
              <span className="hero-word">Code</span>
            </h1>
            <p className="hero-description">
              A browser-based IDE for learning, prototyping,
              and sharing React components with zero setup.
              Built for modern web development.
            </p>

            <div className="hero-actions">
              <Link to="/workspace" className="btn btn-primary">
                <IoMdRocket />
                Launch Workspace
              </Link>
              <Link to="/showcase" className="btn btn-secondary">
                <RiGalleryFill />
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    
      {/* Features Section (Below fold) */}
      <section className="features-section">
        <div className="section-container">
          <h2 ref={sectionTitleRef} className="section-title">Why Choose MAYO Codespace?</h2>

          <div ref={sectionSubtitleRef} className="section-subtitle">
            MAYO Codespace redefines modern web development by combining enterprise-grade performance with an intuitive, zero-configuration workflow. Our platform is engineered for developers who demand both speed and precision—offering real-time collaboration, intelligent code completion, and seamless integration with your favorite tools and frameworks. Every feature is meticulously designed with accessibility at its core, ensuring an inclusive environment where developers of all backgrounds can innovate, prototype, and deploy with confidence. Experience a development ecosystem that not only keeps pace with your creativity but accelerates it.
          </div>

          <div className="features-grid">
            <div className="feature-card" ref={(el) => addToRefs(el, 0)}>
              <h3 className="feature-title1">Instant Feedback</h3>
              <p className="feature-description">
                See your React components update in real-time as you type.
                No manual refresh required.
              </p>

              <MdSpeed className='icon'/>

            </div>

            <div className="feature-card" ref={(el) => addToRefs(el, 1)}>
              <h3 className="feature-title2">Professional Tools</h3>
              <p className="feature-description">
                Built-in code editor with syntax highlighting, auto-completion,
                and error detection.
              </p>
              <FaTools className='icon'/>
            </div>

            <div className="feature-card" ref={(el) => addToRefs(el, 2)}>
              <h3 className="feature-title3">Share Anywhere</h3>
              <p className="feature-description">
                Generate shareable URLs for your projects. Collaborate with
                team members instantly.
              </p>
              <RiShare2Line className='icon' />
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