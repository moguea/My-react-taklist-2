// src/hooks/useTaskManager.js
import { useState, useEffect } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task)));
  };

  return { tasks, setTasks, addTask, deleteTask, updateTask };
};

export default useTaskManager;

