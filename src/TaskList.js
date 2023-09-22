import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, handleTaskToggle, handleTaskDelete }) => {
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleTaskToggle={() => handleTaskToggle(task.id, { completed: !task.completed })}
            handleTaskDelete={() => handleTaskDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;


