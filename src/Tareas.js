import React from 'react';
import useTaskManager from './useTaskManager';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const Tareas = () => {
  const { tasks, addTask, deleteTask, updateTask } = useTaskManager();

  return (
    <div>
      <AddTaskForm handleTaskAdd={addTask} />
      <TaskList
        tasks={tasks}
        handleTaskToggle={updateTask}
        handleTaskDelete={deleteTask}
      />
    </div>
  );
};

export default Tareas;