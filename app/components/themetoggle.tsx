// components/ThemeToggle.tsx
"use client"
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? (
        <>
          <i className="lni lni-sun-1"></i>
          <span className="sr-only">Toggle lightmode</span>
        </>
      ) : (
        <>
          <i className="lni lni-moon-half-right-5"></i>
          <span className="sr-only">Toggle darkmode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
