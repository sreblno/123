import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import Start from './components/Start/Start';

function App() {

  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="logo">
            <Link to="/st">Homeworks</Link>
          </div>
          <div className="name">
            <ul>
              <li><Link to="/">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/st" element={<Start />} />
          <Route path="/" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
