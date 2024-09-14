import asyncHandler from 'express-async-handler';
import Task from '../models/taskModel.js';

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Public
export const deleteTask = asyncHandler(async (req, res) => {
  try {
    // Find the task by its ID
    const task = await Task.findById(req.params.id);

    // If task is found, delete it
    if (task) {
      await task.deleteOne();
      res.status(200).json({ message: 'Task removed' });
    } else {
      // If task is not found, respond with 404
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    // Log error details and respond with 500
    console.error(`Error deleting task with id ${req.params.id}:`, error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
