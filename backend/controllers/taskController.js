import asyncHandler from 'express-async-handler';
import Task from '../models/taskModel.js';

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// @desc    Create a task
// @route   POST /api/tasks
// @access  Public
export const createTask = asyncHandler(async (req, res) => {
  const { title, description, category, dueDate } = req.body;

  const task = new Task({
    title,
    description,
    category,
    dueDate,
  });

  const createdTask = await task.save();
  res.status(201).json(createdTask);
});

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Public
export const updateTask = asyncHandler(async (req, res) => {
  const { title, description, category, completed, dueDate } = req.body;

  const task = await Task.findById(req.params.id);

  if (task) {
    task.title = title;
    task.description = description;
    task.category = category;
    task.completed = completed;
    task.dueDate = dueDate;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Public
export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    await task.remove();
    res.json({ message: 'Task removed' });
  } else {
    res.status(404);
    throw new Error('Task not found');v 
  }
});
