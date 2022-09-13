import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme/Theme';

export const App = () => {
  const savedTheme =
    localStorage.getItem('theme') != null
      ? localStorage.getItem('theme')
      : 'dark';

  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};
