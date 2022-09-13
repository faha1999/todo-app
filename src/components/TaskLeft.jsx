import React from 'react';

export const TaskLeft = ({ items }) => {
  const itemsLeft = () => {
    let completedItems = [];
    let totalItems = items.length;
    completedItems = items.filter((item) => item.taskCompleted === true);
    return totalItems - completedItems.length;
  };
  return (
    <div className="itemsLeft">
      <span> {itemsLeft()} items Left</span>
    </div>
  );
};
