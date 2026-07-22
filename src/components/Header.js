import React, { useState, useEffect } from 'react';
import './Header.css';
import foto from '../assets/images/foto.JPG';

const words = ['Desenvolvimento', 'GameDev', 'Banco de Dados', 'Mobile'];

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const isTestDom = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('jsdom');
    if (isTestDom) return undefined;

    const currentWord = words[currentWordIndex];
    const isWordComplete = !isDeleting && displayedText === currentWord;
    const speed = isWordComplete ? 1000 : isDeleting ? 90 : 130;
    
    const handleTyping = () => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <header className="header" id="home">
      <div className="hero-shell">
        <div className="hero-copy">
          <span className="hero-kicker">
            <i className="fa-solid fa-code"></i>
            Desenvolvedor full-stack
          </span>
          <h1>Deyvison Amorim</h1>
          <p className="hero-subtitle">
            Crio produtos digitais com interfaces elegantes, arquitetura confiável
            e cuidado visual do primeiro pixel ao deploy.
          </p>
          <div className="typing-pill" aria-live="polite">
            <span>Foco em</span>
            <strong>
              {displayedText}
              <span className="cursor">|</span>
            </strong>
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              <i className="fa-solid fa-cube"></i>
              Ver projetos
            </a>
            <a className="secondary-action" href="#contact">
              <i className="fa-solid fa-paper-plane"></i>
              Falar comigo
            </a>
          </div>
          <dl className="hero-stats" aria-label="Resumo profissional">
            <div>
              <dt>Front-end</dt>
              <dd>React, Angular</dd>
            </div>
            <div>
              <dt>Mobile</dt>
              <dd>Flutter, SwiftUI</dd>
            </div>
            <div>
              <dt>Back-end</dt>
              <dd>Node.js, MySQL</dd>
            </div>
          </dl>
        </div>
        <div className="hero-visual">
          <div className="portrait-glass">
            <img src={foto} alt="Deyvison Amorim" />
          </div>
          <div className="floating-card card-react">
            <i className="fa-brands fa-react"></i>
            <span>React</span>
          </div>
          <div className="floating-card card-mobile">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span>Mobile</span>
          </div>
          <div className="floating-card card-api">
            <i className="fa-solid fa-server"></i>
            <span>APIs</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
