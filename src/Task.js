import React from 'react';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, handleTaskToggle, handleTaskDelete }) => {
  const { id, description, completed } = task;

  const handleCheckboxChange = () => {
    handleTaskToggle(id);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm('¿Seguro que quieres eliminar esta tarea?');
    if (confirmDelete) {
      handleTaskDelete(id);
    }
  };

  return (
    <li className={`task ${completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        {description}
      </label>
      <div>
        <FontAwesomeIcon icon={faEdit} className="edit-icon" />
        <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={handleDeleteClick} />
      </div>
      {completed && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
    </li>
  );
};

export default Task;
