import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Filters } from './components/Filters';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ToDoContainer } from './components/ToDoContainer';
import { TodoInput } from './components/TodoInput';
import { lightTheme, darkTheme, GlobalStyles } from './theme/Theme';

export const App = () => {
  const savedTheme =
    localStorage.getItem('theme') != null
      ? localStorage.getItem('theme')
      : 'dark';
  const savedTasks =
    localStorage.getItem('tasks') != null
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];

  const [theme, setTheme] = useState(savedTheme);
  const [tasks, setTasks] = useState(savedTasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [theme, tasks]);

  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <main className="toDoContainer">
          <Header themeToggler={themeToggler} theme={theme} />
          <TodoInput tasks={tasks} setTasks={setTasks} />
          <div className="container">
            <ToDoContainer
              todoData={tasks}
              setTasks={setTasks}
              filter={filter}
            />
            <Footer tasks={tasks} setTasks={setTasks} setFilter={setFilter} />
          </div>

          <div className="for-mobile">
            <Filters setFilter={setFilter} />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
};
