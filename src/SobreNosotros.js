// SobreNosotros.js
import React from 'react';
import './SobreNosotros.css'; // Asegúrate de importar tu archivo CSS

const SobreNosotros = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">Sobre Nosotros</h2>
      <p className="about-us-description">
        Somos un equipo de desarrolladores apasionados por la creación de
        aplicaciones útiles y eficientes. Esta aplicación ha sido desarrollada
        utilizando React para la interfaz de usuario y React Router para la
        navegación entre páginas.
      </p>
      <p className="about-us-description">
        Nuestra misión es proporcionar a los usuarios una forma sencilla de
        administrar sus tareas diarias de manera eficaz y organizada. Esperamos
        que encuentres esta aplicación útil en tu vida diaria.
      </p>
    </div>
  );
};

export default SobreNosotros;
