import React, { useEffect, useRef } from 'react';
import './Skills.css';

// for reuse
const Icon = (nome, cor) => {
    return <i className={nome} style={{ color: cor }}></i>;
}

const skillsData = [
    { name: 'React', percentage: 90, icon: Icon('fa-brands fa-react', '#5fd3f7'), colors: ['#61DBFB', '#4CAF50'] },
    { name: 'Angular', percentage: 80, icon: Icon('fa-brands fa-angular', '#d80130'), colors: ['#DD0031', '#C3002F'] },
    { name: 'SwiftUI', percentage: 75, icon: Icon('fa-brands fa-swift', '#ea6b0a'), colors: ['#FA7343', '#FD9343'] },
    { name: 'Flutter', percentage: 75, icon: Icon('fa-brands fa-flutter', '#019cf6'), colors: ['#02569B', '#039BE5'] },
    
];

const Skills = () => {
    const skillsRef = useRef([]);

    useEffect(() => {
        const getCanvasContext = (canvas) => {
            const isTestDom = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('jsdom');
            if (isTestDom || !canvas || typeof canvas.getContext !== 'function') return null;
            return canvas.getContext('2d');
        };

        const drawSkillCircle = (canvas, currentPercentage, colors) => {
            const ctx = getCanvasContext(canvas);
            if (!ctx) return;

            const radius = canvas.width / 2;
            const startAngle = -0.5 * Math.PI;
            const endAngle = (currentPercentage / 100) * 2 * Math.PI + startAngle;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // background color circle
            ctx.beginPath();
            ctx.arc(radius, radius, radius - 5, 0, 2 * Math.PI);
            ctx.strokeStyle = "#e4e4e4";
            ctx.lineWidth = 10;
            ctx.stroke();

            // Create gradient for the outline
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, colors[0]); // First gradient color
            gradient.addColorStop(1, colors[1]); // Second gradient color

            // Outline animation
            ctx.beginPath();
            ctx.arc(radius, radius, radius - 5, startAngle, endAngle);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 10;
            ctx.stroke();
        };

        const animateSkillCircle = (canvas, percentage, colors, duration = 1500) => {
            const startTime = performance.now();
            const startPercentage = 0;

            const updateAnimation = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentPercentage = startPercentage + (percentage - startPercentage) * progress;

                drawSkillCircle(canvas, currentPercentage, colors);

                if (progress < 1) {
                    requestAnimationFrame(updateAnimation);
                }
            };

            requestAnimationFrame(updateAnimation);
        };

        const animateSkills = () => {
            skillsRef.current.forEach((skill, index) => {
                if (!skill.classList.contains('animated')) {
                    const canvas = skill.querySelector('canvas');
                    const percentage = skillsData[index].percentage;
                    const colors = skillsData[index].colors;

                    if (getCanvasContext(canvas) && colors && colors.length >= 2) {
                        animateSkillCircle(canvas, percentage, colors);
                        skill.classList.add('animated');
                    }
                }
            });
        };

        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 5 * 4;

            skillsRef.current.forEach(skill => {
                const skillTop = skill.getBoundingClientRect().top;

                if (skillTop < triggerBottom && !skill.classList.contains('animated')) {
                    animateSkills();
                }
            });
        };

        skillsRef.current.forEach(skill => {
            if (!skill) return;
            const canvas = skill.querySelector('canvas');
            if (!canvas) return;

            canvas.width = 120;
            canvas.height = 120;

            drawSkillCircle(canvas, 0, ['#e4e4e4', '#000000']);
        });

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Inicializar animação no carregamento

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="skills">
            <h3 className="section-heading">
                <i className="fa-solid fa-layer-group"></i>
                Habilidades
            </h3>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div
                        className="skill-wrapper"
                        ref={el => (skillsRef.current[index] = el)}
                        key={index}
                    >
                        <div className="skill-circle" data-skill={skill.percentage}>
                            <canvas></canvas>
                            {skill.icon}
                            <div className="tooltip">
                                {skill.name}: {skill.percentage}%
                            </div>
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percentage}%</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
