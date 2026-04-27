import { getTasks, setTasks } from "../config/db.js";
import { createTask } from "../models/taskModel.js";

// GET /tasks
export const getAllTasks = (req, res) => {
  res.json({
    success: true,
    data: getTasks()
  });
};

// POST /tasks
export const addTask = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "Task text is required"
    });
  }

  const newTask = createTask(text);
  const tasks = getTasks();

  setTasks([...tasks, newTask]);

  res.status(201).json({
    success: true,
    data: newTask
  });
};

// DELETE /tasks/:id
export const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const tasks = getTasks();

  const updatedTasks = tasks.filter(task => task.id !== id);
  setTasks(updatedTasks);

  res.json({
    success: true,
    message: "Task deleted"
  });
};

// BONUS: PATCH /tasks/:id
export const toggleTask = (req, res) => {
  const id = Number(req.params.id);
  const tasks = getTasks();

  const updatedTasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );

  setTasks(updatedTasks);

  res.json({
    success: true,
    message: "Task updated"
  });
};