import React, { createContext, useState, useContext } from 'react';

// Create a Context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [theme, setTheme] = useState('light')

  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
