import React, { useEffect, useRef, useState, useMemo } from 'react';
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

  // Helper function for refs
  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current[index] = el;
  };

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

  // ---------- DATA ----------
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

  // Feature cards (Overview)
  const featureCardsData = [
    { icon: <MdCode />, title: 'Zero-Setup Development', desc: 'Start coding instantly in your browser. No installations, no configurations.' },
    { icon: <TbBrandVscode />, title: 'VS Code Experience', desc: 'Powered by Monaco Editor - the same engine behind VS Code.' },
    { icon: <MdPlayCircle />, title: 'Live Preview', desc: 'See your changes in real-time as you type. No manual refreshing needed.' },
    { icon: <MdSecurity />, title: 'Secure Sandbox', desc: 'Code runs in isolated environments. Your machine stays protected.' }
  ];

  // Audience cards (Overview)
  const audienceCardsData = [
    { icon: <MdSchool />, title: 'Students & Beginners', desc: 'Perfect for learning programming concepts without complex setups' },
    { icon: <MdDeveloperMode />, title: 'Developers', desc: 'Quick prototyping, testing ideas, and sharing code snippets' },
    { icon: <FaUsers />, title: 'Educators', desc: 'Teach coding with live examples and instant feedback' }
  ];

  // Step cards (Getting Started)
  const stepCardsData = [
    { step: 1, title: 'Open Workspace', desc: 'Click "Launch Workspace" from homepage', icon: <MdPlayArrow /> },
    { step: 2, title: 'Create Files', desc: 'Click tabs to create JSX, CSS, HTML files', icon: <MdFolder /> },
    { step: 3, title: 'Write Code', desc: 'Start typing in the Monaco Editor', icon: <MdKeyboard /> },
    { step: 4, title: 'See Live Preview', desc: 'Watch changes appear instantly on right panel', icon: <MdPlayCircle /> },
    { step: 5, title: 'Run & Test', desc: 'Click refresh button to test functionality', icon: <MdCheckCircle /> }
  ];

  // Output types (Running & Output)
  const outputTypesData = [
    { type: 'success', title: '✓ Successful Execution', desc: 'Shows your app running in preview panel' },
    { type: 'error', title: '✗ Errors & Warnings', desc: 'Detailed error messages in console' },
    { type: 'limit', title: '⏱️ Execution Limits', desc: '10-second timeout for long-running code' }
  ];

  // Limitation cards
  const limitationCardsData = [
    { icon: <MdTimer />, title: 'Time Limits', desc: '10-second execution timeout per run' },
    { icon: <MdShield />, title: 'Sandboxed', desc: 'No file system or network access' },
    { icon: <MdCloud />, title: 'Browser-Based', desc: 'Limited to browser capabilities' }
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

  // ---------- TECH STACK (POWERED BY) – FULLY SEARCHABLE ----------
  const techStackData = [
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
      color: '#007acc',
      desc: 'React framework for production',
      keywords: ['ssr', 'static site generation', 'vercel', 'routing', 'api routes', 'react framework']
    },
    {
      icon: <FaReact />,
      name: 'React',
      color: '#61dafb',
      desc: 'UI library',
      keywords: ['components', 'jsx', 'virtual dom', 'hooks', 'frontend']
    },
    {
      icon: <TbBrandVscode />,
      name: 'Monaco Editor',
      color: '#007acc',
      desc: "VS Code's editor",
      keywords: ['intellisense', 'syntax highlighting', 'code completion', 'vs code']
    },
    {
      icon: <MdCloud />,
      name: 'Vercel',
      color: '#000000',
      desc: 'Deployment platform',
      keywords: ['hosting', 'ci/cd', 'edge functions', 'preview deployments', 'deploy']
    }
  ];

  // ---------- STATIC SECTION KEYWORDS – ADD YOUR OWN HERE ----------
  const staticSearchIndex = [
    {
      section: 'editor-guide',
      keywords: [
        'monaco',
        'editor',
        'vscode',
        'keyboard shortcuts',
        'intellisense',
        'autocomplete',
        'code formatting',
        'syntax highlighting',
        'user guide',
        'shortcut',
        'guide'
      ]
    },
    {
      section: 'workspace-files',
      keywords: [
        'files',
        'folders',
        'tabs',
        'multiple files',
        'project structure',
        'components',
        'jsx css html',
        'code',
        'codespace'
      ]
    },
    {
      section: 'about',
      keywords: [
        'ide',
        'mayo codespace',
        'browser ide',
        'online ide',
        'vercel',
        'react',
        'mission',
        'credits'
      ]
    }
  ];

  // ---------- SEARCH FILTERING ----------
  const normalize = (str: string) => str.toLowerCase().trim();
  const query = normalize(searchQuery);

  // Filter each dataset based on search query
  const filteredFeatures = useMemo(() => {
    if (!query) return featureCardsData;
    return featureCardsData.filter(card =>
      normalize(card.title).includes(query) ||
      normalize(card.desc).includes(query)
    );
  }, [query]);

  const filteredAudience = useMemo(() => {
    if (!query) return audienceCardsData;
    return audienceCardsData.filter(card =>
      normalize(card.title).includes(query) ||
      normalize(card.desc).includes(query)
    );
  }, [query]);

  const filteredSteps = useMemo(() => {
    if (!query) return stepCardsData;
    return stepCardsData.filter(step =>
      normalize(step.title).includes(query) ||
      normalize(step.desc).includes(query)
    );
  }, [query]);

  const filteredLanguages = useMemo(() => {
    if (!query) return languages;
    return languages.filter(lang =>
      normalize(lang.name).includes(query) ||
      normalize(lang.status).includes(query)
    );
  }, [query]);

  const filteredOutputTypes = useMemo(() => {
    if (!query) return outputTypesData;
    return outputTypesData.filter(ot =>
      normalize(ot.title).includes(query) ||
      normalize(ot.desc).includes(query)
    );
  }, [query]);

  const filteredLimitations = useMemo(() => {
    if (!query) return limitationCardsData;
    return limitationCardsData.filter(lim =>
      normalize(lim.title).includes(query) ||
      normalize(lim.desc).includes(query)
    );
  }, [query]);

  const filteredFaqs = useMemo(() => {
    if (!query) return faqs;
    return faqs.filter(faq =>
      normalize(faq.q).includes(query) ||
      normalize(faq.a).includes(query)
    );
  }, [query]);

  const filteredRoadmap = useMemo(() => {
    if (!query) return roadmapItems;
    return roadmapItems.filter(item =>
      normalize(item.title).includes(query) ||
      normalize(item.desc).includes(query) ||
      normalize(item.eta).includes(query)
    );
  }, [query]);

  // ---------- TECH STACK FILTER (with keywords support) ----------
  const filteredTechStack = useMemo(() => {
    if (!query) return techStackData;
    return techStackData.filter(item =>
      normalize(item.name).includes(query) ||
      normalize(item.desc).includes(query) ||
      (item.keywords && item.keywords.some(k => normalize(k).includes(query)))
    );
  }, [query]);

  // ----- SHOW FLAGS – ORDER MATTERS! showTechStack must be BEFORE showAbout -----
  const showTechStack = filteredTechStack.length > 0;

  const showOverview = filteredFeatures.length > 0 || filteredAudience.length > 0;
  const showGettingStarted = filteredSteps.length > 0;
  const showLanguageSupport = filteredLanguages.length > 0;
  const showRunningOutput = filteredOutputTypes.length > 0;
  const showLimitationsSecurity = filteredLimitations.length > 0;
  const showFaq = filteredFaqs.length > 0;
  const showRoadmap = filteredRoadmap.length > 0;

  // Static section visibility (now using keywords)
  const showEditorGuide = useMemo(() => {
    if (!query) return true;
    const entry = staticSearchIndex.find(s => s.section === 'editor-guide');
    if (!entry) return false;
    return entry.keywords.some(k => normalize(k).includes(query));
  }, [query]);

  const showWorkspaceFiles = useMemo(() => {
    if (!query) return true;
    const entry = staticSearchIndex.find(s => s.section === 'workspace-files');
    if (!entry) return false;
    return entry.keywords.some(k => normalize(k).includes(query));
  }, [query]);

  // showAbout uses showTechStack – so showTechStack MUST be defined above
  const showAbout = useMemo(() => {
    if (!query) return true;
    const entry = staticSearchIndex.find(s => s.section === 'about');
    const keywordMatch = entry ? entry.keywords.some(k => normalize(k).includes(query)) : false;
    return showTechStack || keywordMatch;
  }, [query, showTechStack]);

  const hasAnyResults = showOverview || showGettingStarted || showLanguageSupport || showRunningOutput || showLimitationsSecurity || showFaq || showRoadmap || showTechStack || showEditorGuide || showWorkspaceFiles || showAbout;

  return (
    <div className="docs-page">
      <Navbar />

      {/* Hero Section */}
      <header className="docs-hero">
        <div className="hero-bg-animation"></div>
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <MdBook className="badge-icon" />
            COMPREHENSIVE DOCUMENTATION
          </div>
          <h1 className="hero-title animate-slide-up">
            MAYO <span className="gradient-text">Codespace</span>
          </h1>
          <p className="hero-subtitle animate-slide-up-delay">
            Everything you need to build, test, and deploy with our professional browser-based IDE.
            From beginner to expert, we've got you covered.
          </p>

          <div className="search-container animate-slide-up-delay-2">
          
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
            {docsSections.map((section) => {
              // Hide sidebar links for sections that are empty in search results
              if (searchQuery.trim() !== '') {
                if (section.id === 'overview' && !showOverview) return null;
                if (section.id === 'getting-started' && !showGettingStarted) return null;
                if (section.id === 'language-support' && !showLanguageSupport) return null;
                if (section.id === 'running-output' && !showRunningOutput) return null;
                if (section.id === 'limitations-security' && !showLimitationsSecurity) return null;
                if (section.id === 'faq' && !showFaq) return null;
                if (section.id === 'roadmap' && !showRoadmap) return null;
                // Static sections – now conditionally hidden
                if (section.id === 'editor-guide' && !showEditorGuide) return null;
                if (section.id === 'workspace-files' && !showWorkspaceFiles) return null;
                if (section.id === 'about' && !showAbout) return null;
              }
              return (
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
              );
            })}
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
          {searchQuery.trim() !== '' && !hasAnyResults && (
            <div className="no-results">
              <MdSearch size={48} />
              <h3>No matching results found</h3>
              <p>Try different keywords or browse the sections below.</p>
            </div>
          )}

          {/* Overview Section */}
          {showOverview && (
            <section 
              id="overview" 
              ref={setSectionRef(0)}
              className="docs-section animate-on-scroll"
            >
              <div className="section-header">
                <div className="section-icon"><MdHome /></div>
                <h2 className="section-title">What is MAYO Codespace?</h2>
                <div className="section-subtitle">Professional browser-based IDE for modern development</div>
              </div>

              <div className="section-content">
                {filteredFeatures.length > 0 && (
                  <div className="feature-grid">
                    {filteredFeatures.map((card, idx) => (
                      <div key={idx} className="feature-card animate-card">
                        <div className="feature-icon">{card.icon}</div>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {filteredAudience.length > 0 && (
                  <div className="target-audience">
                    <h3>Who Should Use MAYO Codespace?</h3>
                    <div className="audience-grid">
                      {filteredAudience.map((card, idx) => (
                        <div key={idx} className="audience-card">
                          {card.icon}
                          <h4>{card.title}</h4>
                          <p>{card.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Getting Started Section */}
          {showGettingStarted && (
            <section 
              id="getting-started" 
              ref={setSectionRef(1)}
              className="docs-section animate-on-scroll"
            >
              <div className="section-header">
                <div className="section-icon"><MdRocket /></div>
                <h2 className="section-title">Getting Started</h2>
                <div className="section-subtitle">Your first 5 minutes with MAYO Codespace</div>
              </div>

              <div className="steps-timeline">
                {filteredSteps.map((item) => (
                  <div key={item.step} className="step-card animate-card">
                    <div className="step-number">{item.step}</div>
                    <div className="step-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Editor Guide Section – now searchable via keywords */}
          {showEditorGuide && (
            <section 
              id="editor-guide" 
              ref={setSectionRef(2)}
              className="docs-section animate-on-scroll"
            >
              <div className="section-header">
                <div className="section-icon"><MdCode /></div>
                <h2 className="section-title">Monaco Editor Guide</h2>
                <div className="section-subtitle">Professional editing experience</div>
              </div>

              <div className="editor-features">
                <div className="feature-demo">
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
          )}

          {/* Language Support Section */}
          {showLanguageSupport && (
            <section 
              id="language-support" 
              ref={setSectionRef(3)}
              className="docs-section animate-on-scroll"
            >
              <div className="section-header">
                <div className="section-icon"><MdLanguage /></div>
                <h2 className="section-title">Language Support</h2>
                <div className="section-subtitle">Multi-language development environment</div>
              </div>

              <div className="languages-grid">
                {filteredLanguages.map((lang) => (
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
          )}

          {/* Workspace & Files Section – now searchable via keywords */}
          {showWorkspaceFiles && (
            <section 
              id="workspace-files" 
              ref={setSectionRef(4)}
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
          )}

          {/* Running & Output Section */}
          {showRunningOutput && (
            <section 
              id="running-output" 
              ref={setSectionRef(5)}
              className="docs-section animate-on-scroll"
            >
              <div className="section-header">
                <div className="section-icon"><MdPlayCircle /></div>
                <h2 className="section-title">Running & Output</h2>
                <div className="section-subtitle">Understanding execution and results</div>
              </div>

              <div className="output-guide">
                <div className="output-types">
                  {filteredOutputTypes.map((ot, idx) => (
                    <div key={idx} className={`output-type ${ot.type}`}>
                      <h4>{ot.title}</h4>
                      <p>{ot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Limitations & Security Section */}
          {showLimitationsSecurity && (
            <section 
              id="limitations-security" 
              ref={setSectionRef(6)}
              className="docs-section animate-on-scroll"
            >
              <div className="section-header">
                <div className="section-icon"><MdSecurity /></div>
                <h2 className="section-title">Limitations & Security</h2>
                <div className="section-subtitle">Safe and responsible coding environment</div>
              </div>

              <div className="limitations-grid">
                {filteredLimitations.map((lim, idx) => (
                  <div key={idx} className="limitation-card">
                    {lim.icon}
                    <h3>{lim.title}</h3>
                    <p>{lim.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {showFaq && (
            <section 
              id="faq" 
              ref={setSectionRef(7)}
              className="docs-section animate-on-scroll"
            >
              <div className="section-header">
                <div className="section-icon"><MdHelp /></div>
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="section-subtitle">Quick answers to common questions</div>
              </div>

              <div className="faq-grid">
                {filteredFaqs.map((faq, index) => (
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
          )}

          {/* Roadmap Section */}
          {showRoadmap && (
            <section 
              id="roadmap" 
              ref={setSectionRef(8)}
              className="docs-section animate-on-scroll"
            >
              <div className="section-header">
                <div className="section-icon"><MdTrendingUp /></div>
                <h2 className="section-title">Roadmap</h2>
                <div className="section-subtitle">What's coming next to MAYO Codespace</div>
              </div>

              <div className="roadmap-timeline">
                {filteredRoadmap.map((item, index) => (
                  <div key={index} className="roadmap-item animate-card">
                    <div className="roadmap-icon">{item.icon}</div>
                    <div className="roadmap-content">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <div className="roadmap-eta">{item.eta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* About & Credits Section – now searchable via keywords + tech stack */}
          {showAbout && (
            <section 
              id="about" 
              ref={setSectionRef(9)}
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
                  {/* Tech stack grid – now searchable and conditionally rendered */}
                  {showTechStack && (
                    <div className="tech-stack">
                      {filteredTechStack.map((item, idx) => (
                        <div key={idx} className="tech-item">
                          {item.icon}
                          <span>{item.name}</span>
                          {searchQuery && (
                            <small style={{ display: 'block', color: '#666', marginTop: '5px' }}>
                              {item.desc}
                            </small>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="github-link">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Contribute on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

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