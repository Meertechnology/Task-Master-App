export const deleteTask = asyncHandler(async (req, res) => {
  try {
    const task = await Task.findById(req.params.id); // Assuming your model is named Task

    if (task) {
      await task.deleteOne();
      res.status(200).json({ message: 'Task removed' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error(`Error deleting task with id ${req.params.id}:`, error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
