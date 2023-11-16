import React, { useState } from 'react';
import './AddTaskForm.css';

const AddTaskForm = ({ handleTaskAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.length >= 3 && taskDescription.trim() !== '') {
      handleTaskAdd({
        id: new Date().getTime(),
        name: taskName,
        description: taskDescription,
        completed: false,
      });
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('Por favor, ingresa un nombre de tarea válido y una descripción.');
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
        className="add-task-input bold-description" // Agregamos una clase para aplicar estilos
        type="text"
        placeholder="Descripción"
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
