import React from 'react';
import '../styles/Services.css'; // Certifique-se de criar o arquivo CSS e importar corretamente

const Services = () => {
  return (
    <section className="services-section">
      <h2>Nossos serviços</h2>
      <div className="services-grid">
        <div className="service-item">
          <img src="src\assets\adulto_presencial.jpg" alt="Atendimento adulto presencial" />
          <h3>Atendimento adulto presencial</h3>
          <p>R$ 230</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ac augue vitae fringilla.</p>
          <a 
          href="https://wa.me/5511967300632" 
          target="_blank" 
          rel="noopener noreferrer"
          className="schedule-button">Agende uma sessão</a>
        </div>
        <div className="service-item">
          <img src="src\assets\infantil_presencial.jpg" alt="Atendimento infantil presencial" />
          <h3>Atendimento infantil presencial</h3>
          <p>R$ 230</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ac augue vitae fringilla.</p>
          <a 
          href="https://wa.me/5511967300632" 
          target="_blank" 
          rel="noopener noreferrer"
          className="schedule-button">Agende uma sessão</a>
        </div>
        <div className="service-item">
          <img src="src\assets\online_geral.jpg" alt="Atendimento online" />
          <h3>Atendimento online</h3>
          <p>R$ 200</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ac augue vitae fringilla.</p>
          <a 
          href="https://wa.me/5511967300632" 
          target="_blank" 
          rel="noopener noreferrer"
          className="schedule-button">Agende uma sessão</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
