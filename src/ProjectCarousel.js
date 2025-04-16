import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectCarousel.css';
import img from './assets/images/tech@2x.png';
import nt from './assets/images/Captura de tela 2024-09-13 142836.png';
import ntPopup from './assets/images/Captura de tela 2024-08-19 114610.png';
import ntPopup2 from './assets/images/Captura de tela 2024-10-09 102057.png';
import gf from './assets/images/Captura de tela 2025-04-01 152504.png';
import gymfit from './assets/images/Captura de tela 2024-10-14 202747.png';
import gymfit2 from './assets/images/Captura de tela 2024-10-14 202804.png';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Nutritrack',
        description: 'O NutriTrack é um sistema desenvolvido para auxiliar nutricionistas e pacientes no gerenciamento de' +
            ' dietas e informações nutricionais. Permite o cadastro de alimentos, criação de dietas personalizadas, substituição de refeições e visualização detalhada por parte dos pacientes.\n' +
            '\n' +
            'Tecnologias utilizadas:\n' +
            'Tecnologias: React (Router, Hooks), Tailwind, Node.js, Express, JWT, PostgreSQL (Sequelize).\n' +
            '\n' +
            'Repositórios:\n' +
            '- Frontend:\n' +
            '- Backend:',
        image: nt,
        imagePopup: ntPopup,
        imagePopup2: ntPopup2,
        // deployLink: 'https://nutri-track-front.vercel.app'
    },
    {
        id: 2,
        title: 'FitTrack',
        description: 'O FitTrack é uma plataforma web/mobile para organização de treinos e atividades físicas, com criação de treinos personalizados e edição de perfil.\n' +
            'Tecnologias: React (Router, Hooks), Tailwind CSS, Node.js, Express, JWT, PostgreSQL (Sequelize).\n'+
            '\n' +
            'Repositórios:\n' +
            '- Frontend:\n' +
            '- Backend:',
        image: gf,
        imagePopup: gymfit,
        imagePopup2: gymfit2,
        // deployLink: 'https://gym-prive-front.vercel.app'
    },
];

const ProjectCarousel = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const handleNextProject = () => {
        setCurrentProject((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevProject = () => {
        setCurrentProject((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const openPopup = (index) => {
        setCurrentProject(index);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="carousel-container">
            <motion.div
                className="carousel"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={currentProject} // Isso garante que o card atualize quando o índice mudar
            >
                <motion.div
                    className="project-card active"
                    onClick={() => openPopup(currentProject)}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={projects[currentProject].image} alt={projects[currentProject].title} />
                    <h3>{projects[currentProject].title}</h3>
                </motion.div>
            </motion.div>

            <div className="carousel-controls">
                <a onClick={handlePrevProject}><FaAngleLeft /></a>
                <a onClick={handleNextProject}><FaAngleRight /></a>
            </div>

            <div className="carousel-indicators">
                {projects.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentProject ? 'active' : ''}
                        onClick={() => setCurrentProject(index)}
                    />
                ))}
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>{projects[currentProject].title}</h3>
                        <div className="div_project">
                            <div className="div_project_img">
                                <img src={projects[currentProject].imagePopup} alt="Imagem do Projeto" />
                                <img src={projects[currentProject].imagePopup2} alt="Imagem do Projeto" />
                            </div>
                            <div className="project-description" style={{
                                maxHeight: '160px',
                                overflowY: 'auto',
                                fontSize: '0.85rem',
                                lineHeight: '1.3',
                                paddingRight: '0.5rem',
                                textAlign: 'center',
                                whiteSpace: 'pre-line'
                            }}>
                                {projects[currentProject].description}
                            </div>
                            {/*<a href={projects[currentProject].deployLink} target="_blank" rel="noopener noreferrer">Ver Deploy</a>*/}
                        </div>
                        <button onClick={closePopup}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCarousel;
