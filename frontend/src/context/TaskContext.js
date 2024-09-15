import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
        setError(null);
      } catch (err) {
        setError('Error fetching tasks');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/tasks', newTask);
      setTasks([...tasks, response.data]);
      setError(null);
    } catch (err) {
      setError('Error adding task');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeTask = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
      setError(null);
    } catch (err) {
      setError('Error removing task');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      setLoading(true);
      const response = await axios.put(`/api/tasks/${updatedTask._id}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === updatedTask._id ? response.data : task)));
      setError(null);
    } catch (err) {
      setError('Error updating task');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        updateTask,
        loading,
        error,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
