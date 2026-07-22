// src/components/Biography.js
import React from 'react';
import './Biography.css';
import foto from '../assets/images/foto.JPG';

const Biography = () => {
  return (
    <section className='about-me' id="biography">
      <div className='about-container'>
        <div className='about-image'>
          <img src={foto} alt='Deyvison Amorim - Desenvolvedor' />
        </div>
        <div className='about-text'>
          <h3 className="section-heading">
            <i className="fa-solid fa-user-astronaut"></i>
            Sobre mim
          </h3>
          <p className="about-lede">
            Saudações! Meu nome é Deyvison Amorim, e sou um desenvolvedor web versátil,
            especializado tanto em front-end quanto em back-end. Minha expertise
            abrange uma ampla gama de tecnologias, incluindo React, Angular, Flutter,
            MySQL, Node.js e muito mais. Sou dedicado a conceber soluções inovadoras que não apenas
            atendam às necessidades funcionais, mas também encantem visualmente.
          </p>
          <p>
            Com um olhar atento para os detalhes e um compromisso com a excelência,
            estou sempre em busca de superar os desafios técnicos e elevar a experiência
            do usuário a novos patamares.
          </p>
          <div className="about-highlights">
            <div>
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              <span>Interfaces polidas</span>
            </div>
            <div>
              <i className="fa-solid fa-code-branch"></i>
              <span>Código organizado</span>
            </div>
            <div>
              <i className="fa-solid fa-rocket"></i>
              <span>Entrega ponta a ponta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Biography;
