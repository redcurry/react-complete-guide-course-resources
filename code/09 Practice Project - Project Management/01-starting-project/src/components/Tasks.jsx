import { useState } from "react";

export default function Tasks({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
}) {
  const [taskInput, setTaskInput] = useState("");

  function handleAddTask() {
    onAddTask(taskInput);
    setTaskInput("");
  }

  return (
    <div>
      <button onClick={onDeleteProject}>Delete</button>
      <h2>{project.title}</h2>
      <p>{project.dueDate}</p>
      <p>{project.description}</p>

      <h2>Tasks</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      {project.tasks.map((task, index) => {
        return (
          <div key={index}>
            <p>{task}</p>
            <button onClick={() => onDeleteTask(index)}>Clear</button>
          </div>
        );
      })}
    </div>
  );
}
