import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css';

const Home = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="home-container">
      <h1>Bienvenido a la Aplicación de Tareas</h1>
      <p>
        Aquí puedes administrar tus tareas de manera fácil y eficiente. ¡Comienza agregando algunas tareas!
      </p>
      <div className="calendario-container">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
    </div>
  );
};

export default Home;
