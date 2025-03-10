import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
