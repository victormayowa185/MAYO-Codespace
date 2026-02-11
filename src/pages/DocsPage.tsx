import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/docs.css';

import {
  MdHome,
  MdPlayArrow,
  MdCode,
  MdLanguage,
  MdFolder,
  MdPlayCircle,
  MdSecurity,
  MdHelp,
  MdRocket,
  MdInfo,
  MdCheckCircle,
  MdLightbulb,
  MdKeyboard,
  MdTimer,
  MdCloud,
  MdGroup,
  MdSearch,
  MdBook,
  MdSchool,
  MdDeveloperMode,
  MdSpeed,
  MdStorage,
  MdShield,
  MdTrendingUp,
  MdDownload
} from 'react-icons/md';
import {
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaUsers,
  FaRobot
} from 'react-icons/fa';
import {
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const DocsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            const id = entry.target.getAttribute('id');
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-100px 0px -100px 0px' }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const docsSections = [
    { id: 'overview', icon: <MdHome />, title: 'Overview', color: '#007acc' },
    { id: 'getting-started', icon: <MdRocket />, title: 'Getting Started', color: '#00bcd4' },
    { id: 'editor-guide', icon: <MdCode />, title: 'Editor Guide', color: '#9c27b0' },
    { id: 'language-support', icon: <MdLanguage />, title: 'Language Support', color: '#ff9800' },
    { id: 'workspace-files', icon: <MdFolder />, title: 'Workspace & Files', color: '#4caf50' },
    { id: 'running-output', icon: <MdPlayCircle />, title: 'Running & Output', color: '#f44336' },
    { id: 'limitations-security', icon: <MdSecurity />, title: 'Limitations & Security', color: '#795548' },
    { id: 'faq', icon: <MdHelp />, title: 'FAQ', color: '#607d8b' },
    { id: 'roadmap', icon: <MdTrendingUp />, title: 'Roadmap', color: '#e91e63' },
    { id: 'about', icon: <MdInfo />, title: 'About & Credits', color: '#3f51b5' }
  ];

  const languages = [
    { icon: <FaHtml5 />, name: 'HTML', color: '#e34c26', status: 'Full Support' },
    { icon: <FaCss3Alt />, name: 'CSS', color: '#264de4', status: 'Full Support' },
    { icon: <SiJavascript />, name: 'JavaScript', color: '#f0db4f', status: 'Full Support' },
    { icon: <FaReact />, name: 'React/JSX', color: '#61dafb', status: 'Full Support' },
    { icon: <SiCplusplus />, name: 'C++', color: '#00599c', status: 'Beta' },
    { icon: <FaPython />, name: 'Python', color: '#3776ab', status: 'Coming Soon' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#007acc', status: 'Coming Soon' }
  ];

  const roadmapItems = [
    { icon: <MdGroup />, title: 'User Accounts', desc: 'Save projects, track progress', eta: 'Q2 2024' },
    { icon: <MdStorage />, title: 'Project Saving', desc: 'Cloud storage for your work', eta: 'Q2 2024' },
    { icon: <MdDownload />, title: 'Package Support', desc: 'NPM packages integration', eta: 'Q3 2024' },
    { icon: <FaRobot />, title: 'AI Assistant', desc: 'Intelligent code suggestions', eta: 'Q4 2024' },
    { icon: <MdSpeed />, title: 'Performance Boost', desc: 'Faster compilation & execution', eta: 'Q1 2025' }
  ];

  const faqs = [
    { q: 'Why is my code not running?', a: 'Check for syntax errors or infinite loops. Our sandbox has a 10-second execution limit.' },
    { q: 'Can I install libraries/packages?', a: 'Currently, only built-in libraries are supported. Package support is coming soon!' },
    { q: 'Is my code private and secure?', a: 'Yes! All code executes in an isolated sandbox. We don\'t store or share your code.' },
    { q: 'Can I save my projects?', a: 'Project saving feature is coming soon. Currently, copy your code to save locally.' },
    { q: 'What browsers are supported?', a: 'Chrome, Firefox, Safari, and Edge (latest versions).' }
  ];

  return (
    <div className="docs-page">
      <Navbar />

      {/* Luxurious Hero Section with Animated Background */}
      <header className="docs-hero">
        <div className="hero-bg-animation"></div>
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <MdBook className="badge-icon" />
            COMPREHENSIVE DOCUMENTATION
          </div>
          <h1 className="hero-title animate-slide-up ">
            MAYO <span className="gradient-text">Codespace</span>
          </h1>
          <p className="hero-subtitle animate-slide-up-delay">
            Everything you need to build, test, and deploy with our professional browser-based IDE.
            From beginner to expert, we've got you covered.
          </p>

          <div className="search-container animate-slide-up-delay-2">
            <MdSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search documentation (e.g., 'How to run code', 'Keyboard shortcuts')"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search-hint">
              <MdLightbulb /> Try: "Getting Started" or "Error Solutions"
            </div>
          </div>

          <div className="quick-stats animate-fade-in-delay">
            <div className="stat-card">
              <div className="stat-icon"><MdSchool /></div>
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Students Learning</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><MdDeveloperMode /></div>
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><MdSpeed /></div>
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Documentation Container */}
      <div className="docs-container">
        {/* Sidebar Navigation */}
        <nav className="docs-sidebar">
          <div className="sidebar-header">
            <h3><MdBook className='bookmark' /> Documentation</h3>
            <div className="sidebar-subtitle">Navigate through guides</div>
          </div>

          <ul className="sidebar-nav">
            {docsSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  style={{ '--color': section.color } as React.CSSProperties}
                  onClick={() => setActiveSection(section.id)}
                >
                  <div className="nav-icon" style={{ color: section.color }}>
                    {section.icon}
                  </div>
                  <span className="nav-title">{section.title}</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
            ))}
          </ul>

          <div className="sidebar-quicklinks">
            <h4><MdLightbulb /> Quick Links</h4>
            <Link to="/workspace" className="quicklink">
              <MdPlayArrow /> Try the Workspace
            </Link>
            <Link to="/showcase" className="quicklink">
              <MdCode /> View Examples
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="quicklink">
              <FaGithub /> GitHub Repository
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="docs-content">
          {docsSections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              ref={el => { sectionRefs.current[idx] = el }} // ✅ Fixed ref callback
              className="docs-section animate-on-scroll"
            >
              <div className="section-header">
                <div className="section-icon">{section.icon}</div>
                <h2 className="section-title">{section.title}</h2>
                <div className="section-subtitle">{section.id.replace('-', ' ')}</div>
              </div>

              {/* Add actual content here based on section.id */}
            </section>
          ))}

        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DocsPage;
