const addTask = (taskData, tasks, setTasks) => {
  let data = [taskData, ...tasks];
  setTasks(data);
};

// mark task completed
const checkTask = (taskId, tasks, setTasks) => {
  const updatedTasks = [...tasks];
  const task = updatedTasks.find((data) => data.id === taskId);
  task.taskCompleted = task ? !task.taskCompleted : task.taskCompleted;
  setTasks(updatedTasks);
};

// delete todo
const deleteTodo = (taskId, tasks, setTasks) => {
  setTasks([...tasks].filter((todo) => todo.id !== taskId));
};

export { addTask, checkTask, deleteTodo };
