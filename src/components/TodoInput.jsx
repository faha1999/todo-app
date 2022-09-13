import React, { useState } from 'react';

export const TodoInput = ({ tasks, setTasks }) => {
  const [task, setTask] = useState('');

  const addTodo = (e) => {
    e.preventDefault();

    if (task === '') return;
    const taskData = {
      id: Math.floor(Math.random() * 1000) + 1,
      task: task,
      taskCompleted: false,
    };

    setTask('');
  };

  return (
    <>
      <div className="TodoInputWrapper">
        <form onSubmit={addTodo}>
          <div className="todoInput">
            <button className="addBtn">Add</button>
            <input
              type="text"
              placeholder="Create a new todo"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};
