import React from 'react';
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

export default function WhiteboardCanvas({ taskId }) {
  // Using Tldraw's persistenceKey automatically saves the whiteboard data to localStorage
  return (
    <div className="tldraw-wrapper" style={{ height: '600px', width: '100%' }}>
      <Tldraw persistenceKey={`tldraw-task-${taskId}`} />
    </div>
  );
}
