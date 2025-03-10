import React from 'react';

function TaskItem({ task, deleteTask, toggleTaskCompletion }) {
  const { id, title, category, priority, deadline, completed } = task;

  return (
    <div style={{ marginBottom: '10px' }}>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTaskCompletion(id)}
        />
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {title} - {category} - {priority} - {new Date(deadline).toLocaleDateString()}
        </span>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
