import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, removeTask, updateTask } = useContext(TaskContext);

  // const handleDelete = (id) => {
  //   removeTask(id);
  // };

  // const handleEdit = (task) => {
  //   // You might want to open an edit form/modal and then update the task
  //   updateTask(task);
  // };
  const handleDelete = (id) => {
    removeTask(id);
  };

  const handleEdit = (task) => {
    // You might want to open an edit form/modal and then update the task
    updateTask(task);
  };
  
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
