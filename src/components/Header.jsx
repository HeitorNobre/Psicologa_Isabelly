import React, { useState } from "react";
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        Psicóloga Isabelly Farias
      </div>

      {/* Botão de Menu "Hambúrguer" para dispositivos móveis */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Ícone de menu */}
      </div>

      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#metodo">Nosso método</a></li>
          <li><a href="#relato">Relato</a></li>
        </ul>
      </nav>

      <div className="button-container">
      <a 
          href="https://wa.me/5511967300632" 
          target="_blank" 
          rel="noopener noreferrer"
          className="schedule-button">Agende agora</a>
      </div>
    </header>
  );
};

export default Header;
