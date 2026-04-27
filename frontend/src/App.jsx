import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  toggleTask,
} from "./services/taskServices.js";
import TaskItem from "./components/TaskItem.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);


  //the file is giving the errors for build 

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await getTasks();
      setTasks(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const handleAdd = async () => {
    if (!input.trim()) return;

    await createTask({ text: input });
    setInput("");
    fetchTasks();
  };

  // Delete
  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  // Toggle
  const handleToggle = async (id) => {
    await toggleTask(id);
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-slate-950 p-6 rounded-2xl shadow-xl">

        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Task Manager
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 p-2 rounded-lg bg-slate-800 text-white outline-none"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 px-4 rounded-lg text-white"
          >
            Add
          </button>
        </div>

        {/* List */}
        <div className="space-y-2">
          {loading ? (
            <p className="text-gray-400 text-center">Loading...</p>
          ) : tasks.length === 0 ? (
            <p className="text-gray-400 text-center">No tasks yet</p>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;