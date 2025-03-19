import React from 'react';
import '../styles/Services.css'; // Certifique-se de criar o arquivo CSS e importar corretamente
import adultoPresencial from '../assets/adulto_presencial.jpg';
import infantilPresencial from '../assets/infantil_presencial.jpg';
import onlineGeral from '../assets/online_geral.jpg';



const Services = () => {
  return (
    <section id="servicos" className="services-section">
      <h2>Nossos serviços</h2>
      <div className="services-grid">
        <div className="service-item">
        <img src={adultoPresencial} alt="Atendimento adulto presencial" />
          <h3>Atendimento adulto presencial</h3>
          <p>R$ 215</p>
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
          <img src={infantilPresencial} alt="Atendimento infantil presencial" />
          <h3>Atendimento infantil presencial</h3>
          <p>R$ 215</p>
          <p>Oferecemos atendimento psicológico presencial para crianças em nossa clínica no Tatuapé, SP. Em um ambiente acolhedor, ajudamos os pequenos a expressar emoções, desenvolver habilidades sociais e superar desafios.
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
          <img src={onlineGeral} alt="Atendimento online" />
          <h3>Atendimento online</h3>
          <p>R$ 170</p>
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
