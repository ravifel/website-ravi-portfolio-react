// App root component: provides theme, routing, and layout.
import React, { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
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

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        <BrowserRouter>
          {/* Site header */}
          <Header />
          {/* Main content with margin-top */}
          <div className="container mt-4">
            <RoutesApp />
          </div>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;