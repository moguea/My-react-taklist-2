import React from 'react';
import './App.css';
import useTaskManager from './useTaskManager';
import Header from './Header';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const App = () => {
  const { tasks, addTask, deleteTask, updateTask } = useTaskManager();

  return (
    <div className="app-container">
      <Header />
      <AddTaskForm handleTaskAdd={addTask} />
      <TaskList
        tasks={tasks}
        handleTaskToggle={updateTask}
        handleTaskDelete={deleteTask}
      />
    </div>
  );
};

export default App;








