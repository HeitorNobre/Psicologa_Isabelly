import React from 'react';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Method from './components/Method';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="metodo">
          <Method />
        </section>
      </main>
      <footer>
        {/* Informações de contato ou direitos autorais */}
        <Footer />
      </footer>
    </div>
  );
}

export default App;
