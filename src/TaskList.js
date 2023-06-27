import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, handleTaskToggle, handleTaskDelete, handleClearCompleted }) => {
  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  const handleClearAllClick = () => {
    const confirmClearAll = window.confirm('¿Estás seguro/a de eliminar todas las tareas completadas?');
    if (confirmClearAll) {
      handleClearCompleted();
    }
  };

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleTaskToggle={handleTaskToggle}
            handleTaskDelete={handleTaskDelete}
          />
        ))}
      </ul>
      {completedTasks.length > 0 && (
        <div>
          <button className="clear-all-button" onClick={handleClearAllClick}>
            Clear All
          </button>
          <p>{pendingTasks.length} tarea(s) pendiente(s)</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;


