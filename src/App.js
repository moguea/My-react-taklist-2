import React, { useState, useEffect } from 'react';
import Header from './Header';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleTaskAdd = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const handleClearCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <Header />
      <TaskList
        tasks={tasks}
        handleTaskToggle={handleTaskToggle}
        handleTaskDelete={handleTaskDelete}
        handleClearCompleted={handleClearCompleted}
      />
      <AddTaskForm handleTaskAdd={handleTaskAdd} />
    </div>
  );
  
  
};

export default App;



