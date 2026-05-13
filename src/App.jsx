import React, { useState, useEffect } from 'react';
import { Moon, Sun, Plus, Palette } from 'lucide-react';
import TaskList from './components/TaskList';
import SettingsModal from './components/SettingsModal';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('note-app-tasks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [themeHue, setThemeHue] = useState(() => {
    const saved = localStorage.getItem('note-app-hue');
    return saved ? parseInt(saved, 10) : 220;
  });

  useEffect(() => {
    localStorage.setItem('note-app-tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.style.setProperty('--hue', themeHue);
    localStorage.setItem('note-app-hue', themeHue.toString());
  }, [themeHue]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    
    const newTask = {
      id: crypto.randomUUID(),
      title: newTaskTitle.trim(),
      completed: false,
      createdAt: Date.now()
    };
    
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const updateTaskTitle = (id, newTitle) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    ));
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Notes & Tasks</h1>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setIsSettingsOpen(true)} aria-label="Open settings">
            <Palette size={24} />
          </button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </header>

      <form className="add-task-form" onSubmit={addTask}>
        <input
          type="text"
          className="add-task-input"
          placeholder="What needs to be done?"
          aria-label="New task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit" className="add-task-button">
          <Plus size={20} />
          Add
        </button>
      </form>

      <main>
        <TaskList tasks={tasks} toggleTask={toggleTask} updateTaskTitle={updateTaskTitle} />
      </main>

      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        hue={themeHue} 
        setHue={setThemeHue} 
      />
    </div>
  );
}
