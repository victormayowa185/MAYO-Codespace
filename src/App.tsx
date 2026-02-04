// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import WorkspacePage from './pages/WorkspacePage';
// import ShowcasePage from './pages/ShowcasePage';
// import DocsPage from './pages/DocsPage';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/docs" element={<DocsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;