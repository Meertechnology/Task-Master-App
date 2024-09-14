import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext); // Get tasks from context

  if (!tasks || tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h2>{task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Category: {task.category}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
