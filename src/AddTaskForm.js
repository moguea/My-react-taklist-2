import React, { useState } from 'react';
import './AddTaskForm.css';

const AddTaskForm = ({ handleTaskAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.length >= 3) {
      handleTaskAdd({ id: new Date().getTime(), name: taskName, description: taskDescription, completed: false });
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        className="add-task-input"
        type="text"
        placeholder="Nombre de la tarea"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        className="add-task-input"
        type="text"
        placeholder="Descripción (opcional)"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className="add-task-button" type="submit">
        Agregar Tarea
      </button>
    </form>
  );
};

export default AddTaskForm;

