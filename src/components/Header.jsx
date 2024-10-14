import React, { useState } from "react";
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <h1 className="logo">Psicóloga Isabelly Farias</h1>
      
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        ☰
      </button>

      <nav className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Menu de navegação">
        <ul>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
          <li><a href="#metodo" onClick={() => setIsMenuOpen(false)}>Nosso método</a></li>
        </ul>
      </nav>

      <div className="button-container">
        <a 
          href="https://wa.me/5511967300632" 
          target="_blank" 
          rel="noopener noreferrer"
          className="schedule-button"
          aria-label="Agende uma sessão"
        >
          Agende agora
        </a>
      </div>
    </header>
  );
};

export default Header;
