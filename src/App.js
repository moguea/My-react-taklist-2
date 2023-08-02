import React from 'react';
import './App.css';
import useTaskManager from './useTaskManager';
import Header from './Header';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const App = () => {
  const { tasks, setTasks, addTask, deleteTask, updateTask } = useTaskManager();

  return (
    <div className="app-container">
      <Header />
      <TaskList
        tasks={tasks}
        handleTaskToggle={(taskId) => updateTask(taskId, { completed: !tasks.find((task) => task.id === taskId).completed })}
        handleTaskDelete={deleteTask}
        handleClearCompleted={() => setTasks(tasks.filter((task) => !task.completed))}
      />
      <AddTaskForm handleTaskAdd={addTask} />
    </div>
  );
};

export default App;




