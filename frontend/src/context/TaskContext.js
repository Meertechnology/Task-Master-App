import { createContext, useState, useEffect } from 'react';
import { getTasks, createTask, updateTask as updateTaskService, deleteTask } from '../services/taskService';

export const TaskContext = createContext(); // Named export

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const updateTask = async (updatedTask) => {
    const task = await updateTaskService(updatedTask._id, updatedTask);
    setTasks(tasks.map((t) => (t._id === task._id ? task : t)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
