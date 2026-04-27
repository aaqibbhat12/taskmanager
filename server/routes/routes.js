import express from "express";
import {
  getAllTasks,
  addTask,
  deleteTask,
  toggleTask
} from "../controller/taskControllers.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", addTask);
router.delete("/:id", deleteTask);

// Bonus route
router.patch("/:id", toggleTask);

export default router;