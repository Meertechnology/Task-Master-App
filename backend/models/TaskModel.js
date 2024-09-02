import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
