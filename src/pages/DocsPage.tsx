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
  MdArrowForward,
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
  MdAccountCircle,
  MdStar,
  MdTrendingUp,
  MdDownload
} from 'react-icons/md';
import {
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaCuttlefish,
  FaTerminal,
  FaPalette,
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

          {/* Animated Search Bar */}
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

          {/* Quick Stats Animation */}
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
            {docsSections.map((section, index) => (
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

          {/* Quick Links */}
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
          {/* 1️⃣ Overview Section */}
          <section
            id="overview"
            ref={el => sectionRefs.current[0] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdHome /></div>
              <h2 className="section-title">What is MAYO Codespace?</h2>
              <div className="section-subtitle">Professional browser-based IDE for modern development</div>
            </div>

            <div className="section-content">
              <div className="feature-grid">
                <div className="feature-card animate-card">
                  <div className="feature-icon"><MdCode /></div>
                  <h3>Zero-Setup Development</h3>
                  <p>Start coding instantly in your browser. No installations, no configurations.</p>
                </div>
                <div className="feature-card animate-card">
                  <div className="feature-icon"><TbBrandVscode /></div>
                  <h3>VS Code Experience</h3>
                  <p>Powered by Monaco Editor - the same engine behind VS Code.</p>
                </div>
                <div className="feature-card animate-card">
                  <div className="feature-icon"><MdPlayCircle /></div>
                  <h3>Live Preview</h3>
                  <p>See your changes in real-time as you type. No manual refreshing needed.</p>
                </div>
                <div className="feature-card animate-card">
                  <div className="feature-icon"><MdSecurity /></div>
                  <h3>Secure Sandbox</h3>
                  <p>Code runs in isolated environments. Your machine stays protected.</p>
                </div>
              </div>

              <div className="target-audience">
                <h3>Who Should Use MAYO Codespace?</h3>
                <div className="audience-grid">
                  <div className="audience-card">
                    <MdSchool />
                    <h4>Students & Beginners</h4>
                    <p>Perfect for learning programming concepts without complex setups</p>
                  </div>
                  <div className="audience-card">
                    <MdDeveloperMode />
                    <h4>Developers</h4>
                    <p>Quick prototyping, testing ideas, and sharing code snippets</p>
                  </div>
                  <div className="audience-card">
                    <FaUsers />
                    <h4>Educators</h4>
                    <p>Teach coding with live examples and instant feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2️⃣ Getting Started Section */}
          <section
            id="getting-started"
            ref={el => sectionRefs.current[1] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdRocket /></div>
              <h2 className="section-title">Getting Started</h2>
              <div className="section-subtitle">Your first 5 minutes with MAYO Codespace</div>
            </div>

            <div className="steps-timeline">
              {[
                { step: 1, title: 'Open Workspace', desc: 'Click "Launch Workspace" from homepage', icon: <MdPlayArrow /> },
                { step: 2, title: 'Create Files', desc: 'Click tabs to create JSX, CSS, HTML files', icon: <MdFolder /> },
                { step: 3, title: 'Write Code', desc: 'Start typing in the Monaco Editor', icon: <MdKeyboard /> },
                { step: 4, title: 'See Live Preview', desc: 'Watch changes appear instantly on right panel', icon: <MdPlayCircle /> },
                { step: 5, title: 'Run & Test', desc: 'Click refresh button to test functionality', icon: <MdCheckCircle /> }
              ].map((item) => (
                <div key={item.step} className="step-card animate-card">
                  <div className="step-number">{item.step}</div>
                  <div className="step-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3️⃣ Editor Guide Section */}
          <section
            id="editor-guide"
            ref={el => sectionRefs.current[2] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdCode /></div>
              <h2 className="section-title">Monaco Editor Guide</h2>
              <div className="section-subtitle">Professional editing experience</div>
            </div>

            <div className="editor-features">
              <div className="feature-demo">
                <div className="demo-window">
                  <div className="demo-header">
                    <div className="window-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="demo-title">example.jsx</div>
                  </div>
                  <div className="demo-content">
                    <pre>{`// IntelliSense auto-complete
function Welcome() {
  return (
    <div className="app">
      <h1>Hello, World!</h1>
      {/* Type <C to see components */}
    </div>
  );
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="keyboard-shortcuts">
                <h3><MdKeyboard /> Essential Shortcuts</h3>
                <div className="shortcuts-grid">
                  <div className="shortcut"><kbd>Ctrl</kbd> + <kbd>S</kbd> <span>Save</span></div>
                  <div className="shortcut"><kbd>Ctrl</kbd> + <kbd>F</kbd> <span>Find</span></div>
                  <div className="shortcut"><kbd>Ctrl</kbd> + <kbd>/</kbd> <span>Comment</span></div>
                  <div className="shortcut"><kbd>Alt</kbd> + <kbd>Z</kbd> <span>Word Wrap</span></div>
                  <div className="shortcut"><kbd>F1</kbd> <span>Command Palette</span></div>
                  <div className="shortcut"><kbd>Ctrl</kbd> + <kbd>Space</kbd> <span>Suggestions</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* 4️⃣ Language Support Section */}
          <section
            id="language-support"
            ref={el => sectionRefs.current[3] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdLanguage /></div>
              <h2 className="section-title">Language Support</h2>
              <div className="section-subtitle">Multi-language development environment</div>
            </div>

            <div className="languages-grid">
              {languages.map((lang) => (
                <div key={lang.name} className="language-card animate-card" style={{ '--color': lang.color } as React.CSSProperties}>
                  <div className="lang-icon" style={{ color: lang.color }}>
                    {lang.icon}
                  </div>
                  <h3>{lang.name}</h3>
                  <div className={`lang-status ${lang.status.toLowerCase().replace(' ', '-')}`}>
                    {lang.status}
                  </div>
                  <div className="lang-example">
                    <pre>
                      {lang.name === 'HTML' ? '<h1>Hello World</h1>' :
                        lang.name === 'CSS' ? 'body { color: #007acc; }' :
                          lang.name === 'JavaScript' ? 'console.log("Hello");' :
                            lang.name === 'React/JSX' ? 'function App() {\n  return <h1>Hello</h1>;\n}' :
                              '// Coming Soon'}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5️⃣ Workspace & Files Section */}
          <section
            id="workspace-files"
            ref={el => sectionRefs.current[4] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdFolder /></div>
              <h2 className="section-title">Workspace & Files</h2>
              <div className="section-subtitle">Organize your projects efficiently</div>
            </div>

            <div className="workspace-guide">
              <div className="file-structure">
                <h3><MdFolder /> File Structure</h3>
                <div className="structure-tree">
                  <div className="tree-item">📁 project/</div>
                  <div className="tree-item indent">📄 index.jsx</div>
                  <div className="tree-item indent">📄 styles.css</div>
                  <div className="tree-item indent">📄 index.html</div>
                  <div className="tree-item indent">📁 components/</div>
                  <div className="tree-item double-indent">📄 Button.jsx</div>
                </div>
              </div>

              <div className="best-practices">
                <h3><MdCheckCircle /> Best Practices</h3>
                <ul>
                  <li>Use descriptive file names</li>
                  <li>Keep related files together</li>
                  <li>Use tabs for easy switching</li>
                  <li>Regularly test multi-file projects</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6️⃣ Running & Output Section */}
          <section
            id="running-output"
            ref={el => sectionRefs.current[5] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdPlayCircle /></div>
              <h2 className="section-title">Running & Output</h2>
              <div className="section-subtitle">Understanding execution and results</div>
            </div>

            <div className="output-guide">
              <div className="output-types">
                <div className="output-type success">
                  <h4>✓ Successful Execution</h4>
                  <p>Shows your app running in preview panel</p>
                </div>
                <div className="output-type error">
                  <h4>✗ Errors & Warnings</h4>
                  <p>Detailed error messages in console</p>
                </div>
                <div className="output-type limit">
                  <h4>⏱️ Execution Limits</h4>
                  <p>10-second timeout for long-running code</p>
                </div>
              </div>
            </div>
          </section>

          {/* 7️⃣ Limitations & Security */}
          <section
            id="limitations-security"
            ref={el => sectionRefs.current[6] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdSecurity /></div>
              <h2 className="section-title">Limitations & Security</h2>
              <div className="section-subtitle">Safe and responsible coding environment</div>
            </div>

            <div className="limitations-grid">
              <div className="limitation-card">
                <MdTimer />
                <h3>Time Limits</h3>
                <p>10-second execution timeout per run</p>
              </div>
              <div className="limitation-card">
                <MdShield />
                <h3>Sandboxed</h3>
                <p>No file system or network access</p>
              </div>
              <div className="limitation-card">
                <MdCloud />
                <h3>Browser-Based</h3>
                <p>Limited to browser capabilities</p>
              </div>
            </div>
          </section>

          {/* 8️⃣ FAQ Section */}
          <section
            id="faq"
            ref={el => sectionRefs.current[7] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdHelp /></div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="section-subtitle">Quick answers to common questions</div>
            </div>

            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-card animate-card">
                  <div className="faq-question">
                    <MdHelp />
                    <h3>{faq.q}</h3>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9️⃣ Roadmap Section */}
          <section
            id="roadmap"
            ref={el => sectionRefs.current[8] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdTrendingUp /></div>
              <h2 className="section-title">Roadmap</h2>
              <div className="section-subtitle">What's coming next to MAYO Codespace</div>
            </div>

            <div className="roadmap-timeline">
              {roadmapItems.map((item, index) => (
                <div key={index} className="roadmap-item animate-card">
                  <div className="roadmap-icon">{item.icon}</div>
                  <div className="roadmap-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 🔟 About & Credits */}
          <section
            id="about"
            ref={el => sectionRefs.current[9] = el}
            className="docs-section animate-on-scroll"
          >
            <div className="section-header">
              <div className="section-icon"><MdInfo /></div>
              <h2 className="section-title">About & Credits</h2>
              <div className="section-subtitle">Built with passion for developers</div>
            </div>

            <div className="about-content">
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>
                  To democratize coding education by providing a professional-grade development
                  environment that's accessible to everyone, regardless of their hardware or experience level.
                </p>
              </div>

              <div className="credits">
                <h3>Powered By</h3>
                <div className="tech-stack">
                  <div className="tech-item">
                    <SiNextdotjs />
                    <span>Next.js</span>
                  </div>
                  <div className="tech-item">
                    <FaReact />
                    <span>React</span>
                  </div>
                  <div className="tech-item">
                    <TbBrandVscode />
                    <span>Monaco Editor</span>
                  </div>
                  <div className="tech-item">
                    <MdCloud />
                    <span>Vercel</span>
                  </div>
                </div>

                <div className="github-link">
                  <a href="https://github.com/victormayowa185" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Contribute on GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="docs-cta">
            <div className="cta-content">
              <h2>Ready to Start Coding?</h2>
              <p>Experience professional development in your browser today.</p>
              <Link to="/workspace" className="cta-button-primary">
                <MdPlayArrow /> Launch Workspace Now
              </Link>
              <Link to="/showcase" className="cta-button-secondary">
                <MdCode /> View Examples
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DocsPage;