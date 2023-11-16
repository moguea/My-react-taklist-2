// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to="/tareas" className="menu-item">
        Tareas
      </Link>
      <Link to="/sobre-nosotros" className="menu-item">
        Sobre Nosotros
      </Link>
    </div>
  );
};

export default Menu;
