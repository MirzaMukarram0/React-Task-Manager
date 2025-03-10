import './App.css';
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    priority: '',
    search: '',
  });

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const filterTasks = (task) => {
    const { category, priority, search } = filters;
    const titleMatches = task.title.toLowerCase().includes(search.toLowerCase());
    const categoryMatches = category ? task.category === category : true;
    const priorityMatches = priority ? task.priority === priority : true;

    return titleMatches && categoryMatches && priorityMatches;
  };

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <TaskList
        tasks={tasks.filter(filterTasks)}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
}

export default App;
