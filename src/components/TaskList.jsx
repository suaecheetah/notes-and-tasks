import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleTask, updateTaskTitle }) {
  if (tasks.length === 0) {
    return (
      <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem 0' }}>
        No tasks yet. Add one to get started!
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          updateTaskTitle={updateTaskTitle} 
        />
      ))}
    </div>
  );
}
