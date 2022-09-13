import React from 'react';

export const clearCompletedTasks = (tasks, setTasks) => {
  let completedTasks = tasks.filter((item) => item.taskCompleted === true);
  let unCompletedTasks = tasks.filter((item) => item.taskCompleted === false);

  if (completedTasks.length === 0) return;
  if (
    window.confirm(
      `Are you sure you want to delete ${completedTasks.length} ${
        completedTasks.length === 1 ? 'task' : 'tasks'
      }? `,
    )
  ) {
    setTasks(unCompletedTasks);
  }
};
