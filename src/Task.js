// Task.js
import React, { useState } from 'react';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';


const Task = ({ task, handleTaskToggle, handleTaskDelete, handleTaskEdit }) => {
  const { id, name, description, completed } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleCheckboxChange = () => {
    handleTaskToggle(id);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm('¿Seguro que quieres eliminar esta tarea?');
    if (confirmDelete) {
      handleTaskDelete(id);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Validaciones o lógica adicional si es necesario
    handleTaskEdit(id, editedName, editedDescription);
    setIsEditing(false);
  };

  return (
    <li className={`task ${completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        {isEditing ? (
          <div className="task-details">
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </div>
        ) : (
          <div className="task-details">
            <strong>{name}</strong>
            {description && <p className="task-description"><strong>Descripción:</strong> {description}</p>}
          </div>
        )}
      </label>
      <div>
        {!isEditing && (
          <>
            <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={handleEditClick} />
            <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={handleDeleteClick} />
          </>
        )}
        {isEditing && (
          <FontAwesomeIcon icon={faSave} className="save-icon" onClick={handleSaveClick} />
        )}
      </div>
      {completed && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
    </li>
  );
};

export default Task;
