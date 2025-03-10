import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: '',
    category: '',
    priority: '',
    deadline: '',
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.category && task.priority && task.deadline) {
      addTask({
        ...task,
        id: Math.random().toString(36).substring(2), // simple unique ID
        deadline: new Date(task.deadline),
      });
      setTask({
        title: '',
        category: '',
        priority: '',
        deadline: '',
        completed: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <input
        type="text"
        name="category"
        value={task.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <select name="priority" value={task.priority} onChange={handleChange} required>
        <option value="">Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
