import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import WhiteboardCanvas from './WhiteboardCanvas';

export default function TaskItem({ task, toggleTask, updateTaskTitle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''} ${expanded ? 'expanded' : ''}`}>
      <div className="task-header" onClick={() => setExpanded(!expanded)}>
        <button 
          type="button"
          role="checkbox"
          aria-checked={task.completed}
          aria-label={task.completed ? "Mark task incomplete" : "Mark task complete"}
          className="task-checkbox-wrapper" 
          onClick={(e) => {
            e.stopPropagation();
            toggleTask(task.id);
          }}
        >
          {task.completed && <Check size={16} strokeWidth={3} />}
        </button>
        
        <input 
          type="text"
          className="task-title-input task-title"
          aria-label="Task title"
          value={task.title}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => updateTaskTitle(task.id, e.target.value)}
        />
        
        <button 
          type="button"
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse canvas" : "Expand canvas"}
          className="task-expand-icon"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {/* We mount the canvas only when expanded to save performance, 
          as having many Tldraw instances could be heavy. */}
      {expanded && (
        <div className="task-canvas-container" style={{ height: '600px', opacity: 1, borderTopColor: 'var(--border)' }}>
          <WhiteboardCanvas taskId={task.id} />
        </div>
      )}
    </div>
  );
}
