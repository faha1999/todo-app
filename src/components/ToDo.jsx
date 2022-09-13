import React from 'react';
import { ReactComponent as CrossIcon } from '../assets/images/icon-cross.svg';
import { checkTask, deleteTodo } from '../utilities/UpdateTasks';

export const ToDo = ({ todoData, tasks, setTasks }) => {
  const deleteTask = () => {
    deleteTodo(todoData.id, tasks, setTasks);
  };

  const taskComplete = () => {
    checkTask(todoData.id, tasks, setTasks);
  };

  return (
    <div
      className={`todo ${todoData.taskCompleted === true ? 'completed' : ''}`}
    >
      <div className="todoBody" onClick={taskComplete}>
        <button
          className={`todoCheckbox ${
            todoData.taskCompleted === true ? 'completed' : ''
          }`}
        ></button>
        <p className="todoTask">{todoData.task}</p>
      </div>
      <button className="removeTaskBtn" onClick={deleteTask}>
        <CrossIcon />
      </button>
    </div>
  );
};
