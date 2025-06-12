import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectCarousel.css';
import nt from '../assets/images/Captura de tela 2024-09-13 142836.png';
import ntPopup from '../assets/images/Captura de tela 2024-08-19 114610.png';
import ntPopup2 from '../assets/images/Captura de tela 2024-10-09 102057.png';
import gf from '../assets/images/Captura de tela 2025-04-01 152504.png';
import gymfit from '../assets/images/Captura de tela 2024-10-14 202747.png';
import gymfit2 from '../assets/images/Captura de tela 2024-10-14 202804.png';
import sf from '../assets/images/Captura de tela 2025-04-29 114635.png';
import studyflow from '../assets/images/Captura de tela 2025-04-29 114729.png';
import studyflow2 from '../assets/images/Captura de tela 2025-04-29 114754.png';

const projects = [
    {
        id: 1,
        title: 'Nutritrack',
        description: 'O NutriTrack é um sistema desenvolvido para auxiliar nutricionistas e pacientes no gerenciamento de' +
            ' dietas e informações nutricionais. Permite o cadastro de alimentos, criação de dietas personalizadas, substituição de refeições e visualização detalhada por parte dos pacientes.\n' +
            '\n' +
            'Tecnologias: React (Router, Hooks), Tailwind, Node.js, Express, JWT, PostgreSQL (Sequelize).\n' +
            '\n' +
            'Repositórios:\n' +
            '- Frontend:\n' +
            '- Backend:\n' +
            '- Vídeo com simulacão: ',
        image: nt,
        imagePopup: ntPopup,
        imagePopup2: ntPopup2,
        simulacao: 'https://www.loom.com/share/fc900a72af774674bcccf63eb80867fb?sid=4fcf993f-7505-42cd-8d86-559f1d3cc75e',
        // deployLink: 'https://nutri-track-front.vercel.app'
    },
    {
        id: 2,
        title: 'FitTrack',
        description: 'O FitTrack é uma plataforma web/mobile para organização de treinos e atividades físicas, com criação de treinos personalizados e edição de perfil.\n' +
            '\n' +
            'Tecnologias: React (Router, Hooks), Tailwind CSS, Node.js, Express, JWT, PostgreSQL (Sequelize).\n'+
            '\n' +
            'Repositórios:\n' +
            '- Frontend:\n' +
            '- Backend:\n' +
            '- Vídeo com simulacão: ',
        image: gf,
        imagePopup: gymfit,
        imagePopup2: gymfit2,
        simulacao: 'https://www.loom.com/share/a875df19bae04ad8a7ea37159a76c68a',
        // deployLink: 'https://gym-prive-front.vercel.app'
    },
    {
        id: 3,
        title: 'StudyFlow',
        description: 'O StudyFlow é uma aplicação web para organização de estudos, com foco em produtividade e acompanhamento de atividades.\n' +
            'Permite cadastro de disciplinas, controle de tempo por atividade (cronômetro), visualização gráfica do desempenho, e autenticação de usuários.\n' +
            '\n' +
            'Tecnologias: React (Router, Hooks), Bootstrap 5.3, Node.js, Express, JWT, Sequelize (SQLite).\n' +
            '\n' +
            'Repositórios:\n' +
            '- Frontend:\n' +
            '- Backend:\n' +
            '- Vídeo com simulacão: ',
        image: sf,
        imagePopup: studyflow,
        imagePopup2: studyflow2,
        simulacao: ' https://www.loom.com/share/9429088703f246308c1618b4763fc694?sid=176aeba1-0db9-44fb-bde3-c61835bf08d2',
        // deployLink: 'https://studyflow.vercel.app'
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
                key={currentProject}
            >
                <motion.div
                    className="project-card active transition-300"
                    onClick={() => openPopup(currentProject)}
                    whileHover={{ scale: 1.02 }}
                >
                    <img src={projects[currentProject].image} alt={projects[currentProject].title} />
                    <h3>{projects[currentProject].title}</h3>
                </motion.div>
            </motion.div>

            <div className="carousel-controls mt-2 d-flex justify-content-between">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a onClick={handlePrevProject} className="btn btn-dark carousel-control-prev-icon p-3 rounded-2 me-3" />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a onClick={handleNextProject} className="btn btn-dark carousel-control-next-icon p-3 rounded-2 ms-3" />
            </div>

            <div className="carousel-indicators d-flex justify-content-center mt-3">
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
                                {projects[currentProject].description}<a href={projects[currentProject].simulacao}>Link</a>
                            </div>
                        </div>
                        <button className="btn btn-danger" onClick={closePopup}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCarousel;
