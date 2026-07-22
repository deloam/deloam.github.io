// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !overlayRef.current.contains(event.target) &&
      !toggleButtonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  // Fechar o menu quando um item for clicado
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <nav className="navbar">
      <button className="navbar-logo" onClick={scrollToTop} aria-label="Voltar ao topo">
        <Logo className='logo-svg' />
      </button>
      <button
        className={`menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        ref={toggleButtonRef}
        aria-label="Abrir menu"
        aria-expanded={isOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`overlay ${isOpen ? 'active' : ''}`} ref={overlayRef}></div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`} ref={menuRef}>
        <li><a href="#biography" onClick={handleMenuItemClick}><i className="fa-solid fa-user"></i>Biografia</a></li>
        <li><a href="#skills" onClick={handleMenuItemClick}><i className="fa-solid fa-layer-group"></i>Habilidades</a></li>
        <li><a href="#projects" onClick={handleMenuItemClick}><i className="fa-solid fa-cube"></i>Projetos</a></li>
        <li><a href="#contact" onClick={handleMenuItemClick}><i className="fa-solid fa-paper-plane"></i>Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
