const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
      
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 cursor-pointer"
        />

        <span
          className={`text-sm ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-400 hover:text-red-600"
      >
        ✕
      </button>
    </div>
  );
};

export default TaskItem;