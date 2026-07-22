import React from 'react';
import './Contact.css';

const contacts = [
    {
        name: 'Email',
        icon: 'fa-solid fa-envelope',
        link: 'mailto:deyvisondnl@gmail.com',
        color: '#007aff',
    },
    {
        name: 'GitHub',
        icon: 'fa-brands fa-github',
        link: 'https://github.com/deloam',
        color: '#24292f',
    },
    {
        name: 'LinkedIn',
        icon: 'fa-brands fa-linkedin',
        link: 'https://www.linkedin.com/in/deyvison-amorim-607929187/',
        color: '#0a66c2',
    },
    {
        name: 'Discord',
        icon: 'fa-brands fa-discord',
        link: 'https://discordapp.com/users/411559822471987200',
        color: '#5865f2',
    },
    {
      name: 'Whatsapp',
      icon: 'fa-brands fa-whatsapp',
      link: 'https://api.whatsapp.com/send?phone=5591983382407&text=Ol%C3%A1%2C%20vim%20do%20seu%20portfolio!',
      color: '#25d366',
    }
];

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h3 className="section-heading">
                <i className="fa-solid fa-paper-plane"></i>
                Contatos
            </h3>
            <p className="contact-intro">
                Tem uma ideia, vaga ou projeto em mente? Me chama pelo canal que for mais prático.
            </p>
            <div className="contact-container">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.link}
                        className="contact-card"
                        style={{ '--accent': contact.color }}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir ${contact.name}`}
                    >
                        <div className="contact-icon">
                            <i className={contact.icon}></i>
                        </div>
                        <h4 className="contact-name">{contact.name}</h4>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
