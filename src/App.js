// App root component: provides theme, routing, and layout.
import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollManager from './components/ScrollManager';
import Header from './components/Header';
import RoutesApp from './routes';
import './styles/base/main.css';
import './styles/base/theme.css';

export const ThemeContext = createContext(); // Theme Context

function App() {
  // State for dark mode theme
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between dark and light theme
  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Ensure SPA controls scroll restoration (prevents browser from restoring mid-page positions)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        <BrowserRouter>
          {/* Scroll manager: go to top on route changes unless a hash is present */}
          <ScrollManager />

          {/* Site header */}
          <Header />

          {/* Main content with margin-top */}
          <div className='container mt-4'>
            <RoutesApp />
          </div>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
