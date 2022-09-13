import React from 'react';
import { clearCompletedTasks } from '../utilities/clearCompletedTasks';

export const ClearBtn = ({ tasks, setTasks }) => {
  const deleteCompletedTasks = () => {
    clearCompletedTasks(tasks, setTasks);
  };
  return (
    <button className="clear-completed-btn" onClick={deleteCompletedTasks}>
      Clear Completed
    </button>
  );
};
