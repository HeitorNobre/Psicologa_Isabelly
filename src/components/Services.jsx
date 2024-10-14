import React from 'react';
import '../styles/Services.css'; // Certifique-se de criar o arquivo CSS e importar corretamente

const Services = () => {
  return (
    <section id="servicos" className="services-section">
      <h2>Nossos serviços</h2>
      <div className="services-grid">
        <div className="service-item">
          <img src="src\assets\adulto_presencial.jpg" alt="Atendimento adulto presencial" />
          <h3>Atendimento adulto presencial</h3>
          <p>R$ 230</p>
          <p>Oferecemos atendimento psicológico presencial em nosso espaço no Tatuapé, SP. Com um local acolhedor e confidencial, estamos prontos para ajudá-lo a superar desafios emocionais e melhorar seu bem-estar.<br/><br/>
            Agende sua sessão e comece sua jornada de autoconhecimento e transformação!
          </p>
          <br />
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
          <p>Oferecemos atendimento psicológico presencial para crianças em nossa clínica em Tatuapé, SP. Em um ambiente acolhedor, ajudamos os pequenos a expressar emoções, desenvolver habilidades sociais e superar desafios.
            <br /><br />
            Agende uma sessão e proporcione ao seu filho um espaço seguro para crescer e se desenvolver!</p>
            <br />
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
          <p>Oferecemos sessões de terapia online com a TCC, no conforto da sua casa. Em um ambiente virtual seguro, você pode acessar apoio emocional e desenvolver estratégias para enfrentar desafios diretamente do conforto do seu lar.
            <br /><br />
            Agende sua sessão online e dê o primeiro passo rumo ao bem-estar!</p>
            <br />
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
