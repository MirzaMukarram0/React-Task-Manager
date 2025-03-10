import React from 'react';

function FilterBar({ filters, onFilterChange }) {
  const { category, priority, search } = filters;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleFilterChange}
        placeholder="Search by title"
      />
      <select name="category" value={category} onChange={handleFilterChange}>
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
      </select>
      <select name="priority" value={priority} onChange={handleFilterChange}>
        <option value="">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

export default FilterBar;
