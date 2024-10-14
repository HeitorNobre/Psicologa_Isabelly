import React from 'react';
import '../styles/Footer.css'; // Certifique-se de criar o arquivo CSS e importar corretamente

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contato</h4>
          <p>Email: Isabellynfarias@gmail.com</p>
          <p>Telefone: (11) 96730-0632</p>
        </div>
        <div className="social-media">
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="https://www.instagram.com/psicologa.isa_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://wa.me/5511967300632" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Psicóloga Isabelly Farias. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
