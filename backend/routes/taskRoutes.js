import express from 'express';
const router = express.Router();

// Get all tasks
router.get('/', (req, res) => {
  console.log('GET request received at /api/tasks');
  res.json({ message: 'Get all tasks' });
});

// Create a new task
router.post('/', (req, res) => {
  console.log('POST request received at /api/tasks', req.body);
  res.json({ message: 'Task created', task: req.body });
});

// Update a task by ID
router.put('/:id', (req, res) => {
  console.log(`PUT request received at /api/tasks/${req.params.id}`, req.body);
  res.json({ message: `Task with ID ${req.params.id} updated`, task: req.body });
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
  console.log(`DELETE request received at /api/tasks/${req.params.id}`);
  res.json({ message: `Task with ID ${req.params.id} deleted` });
});

export default router;
