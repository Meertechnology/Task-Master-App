export const deleteTask = asyncHandler(async (req, res) => {
  try {
    const task = await task.findById(req.params.id);

    if (task) {
      await task.remove();
      res.status(200).json({ message: 'Task removed' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error(`Error deleting task with id ${req.params.id}:`, error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
