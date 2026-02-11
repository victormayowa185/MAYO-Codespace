// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import WorkspacePage from './pages/WorkSpace';
import ShowcasePage from './pages/ShowcasePage';
import DocumentPage from './pages/DocsPage';
import './styles/darkmode.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workspace" element={<WorkspacePage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          <Route path="/docs" element={<DocumentPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;