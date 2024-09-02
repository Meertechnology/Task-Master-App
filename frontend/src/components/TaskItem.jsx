import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">
          {task.title}
          <span className="float-right">
            <button
              className="btn btn-primary btn-sm mr-2"
              onClick={() => onEdit(task)}
            >
              <i className="bi bi-pencil"></i> Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(task._id)}
            >
              <i className="bi bi-trash"></i> Delete
            </button>
          </span>
        </h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          <small className="text-muted">Category: {task.category}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">
            Due Date: {new Date(task.dueDate).toLocaleDateString()}
          </small>
        </p>
        <p className="card-text">
          <small className="text-muted">
            Status: {task.completed ? 'Completed' : 'Pending'}
          </small>
        </p>
      </div>
    </div>
  );
};

export default TaskItem;
