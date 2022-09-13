import React from 'react';
import { Filters } from './Filters';
import { TaskLeft } from './TaskLeft';

export const Footer = ({ tasks, setTasks, setFilter }) => {
  return (
    <div className="items-filters-clear-container">
      <TaskLeft items={tasks} />
      <div className="for-desktop">
        <Filters setFilter={setFilter} />
      </div>
    </div>
  );
};
