import React from 'react';
import { ToDo } from './ToDo';

export const ToDoContainer = ({ todoData, setTasks, filter }) => {
  const activeTasksList = todoData.map((data) => {
    let task;
    if (data.taskCompleted === false) {
      task = (
        <ToDo
          tasks={todoData}
          todoData={data}
          key={data.id}
          setTasks={setTasks}
        />
      );
    }

    return task;
  });

  const completedTasksList = todoData.map((data) => {
    let task;
    if (data.taskCompleted === true) {
      task = (
        <ToDo
          tasks={todoData}
          todoData={data}
          key={data.id}
          setTasks={setTasks}
        />
      );
    }
    return task;
  });

  const allTasksList = todoData.map((data) => {
    return (
      <ToDo
        tasks={todoData}
        todoData={data}
        key={data.id}
        setTasks={setTasks}
      />
    );
  });

  const tasksList = () => {
    if (filter === 'active') return activeTasksList;
    else if (filter === 'completed') return completedTasksList;
    else return allTasksList;
  };

  return (
    <div className="todoContainer" id="sortableList">
      {tasksList()}
    </div>
  );
};
