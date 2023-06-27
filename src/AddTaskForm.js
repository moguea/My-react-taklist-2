import React, { useState } from 'react';

const AddTaskForm = ({ handleTaskAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        description: newTask,
        completed: false
      };
      handleTaskAdd(task);
      setNewTask('');
    }
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTaskForm;
