import React from 'react';
import { TaskLeft } from './TaskLeft';

export const Footer = ({ tasks, setTasks, setFilter }) => {
  return (
    <div className="items-filters-clear-container">
      <TaskLeft items={tasks} />
    </div>
  );
};
