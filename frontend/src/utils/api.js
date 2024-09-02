import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';  // Ensure correct path to TaskContext

const TaskList = () => {
  const { tasks, removeTask, updateTask } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => removeTask(task._id)}>Delete</button>
          <button onClick={() => updateTask({ ...task, completed: !task.completed })}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
