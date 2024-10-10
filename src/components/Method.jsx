import React from 'react';
import '../styles/Method.css'; // Certifique-se de criar o arquivo CSS e importar corretamente

const Method = () => {
  return (
    <section className="method-section">
      <div className="method-content">
        <div className="method-image">
          <img src="src\assets\metodo.jpg" alt="Método TCC" />
        </div>
        <div className="method-text">
          <h2>Mais sobre o método TCC</h2>
          <p>
            A Terapia Cognitivo-Comportamental (TCC) é uma abordagem terapêutica estruturada que foca na identificação e modificação de padrões de pensamentos e comportamentos disfuncionais que podem estar causando sofrimento emocional. O princípio central da TCC é que nossos pensamentos influenciam diretamente nossas emoções e comportamentos. Assim, ao trabalhar para mudar pensamentos negativos ou distorcidos, é possível melhorar o estado emocional e modificar comportamentos problemáticos.
          </p>
          <p>
            O processo da TCC geralmente envolve o terapeuta e o paciente colaborando para identificar esses padrões, questionar sua validade, e, em seguida, desenvolver novos pensamentos e comportamentos mais saudáveis. A TCC é prática e orientada para objetivos, com foco em problemas presentes, e costuma incluir tarefas e exercícios para serem realizados entre as sessões, como registros de pensamentos e exercícios de exposição.
          </p>
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

export default Method;
