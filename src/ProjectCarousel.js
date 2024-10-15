import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectCarousel.css';
import img from './assets/images/tech@2x.png';
import nt from './assets/images/Captura de tela 2024-09-13 142836.png';
import ntPopup from './assets/images/Captura de tela 2024-08-19 114610.png';
import ntPopup2 from './assets/images/Captura de tela 2024-10-09 102057.png';
import gf from './assets/images/Captura de tela 2024-10-14 202726.png';
import gymfit from './assets/images/Captura de tela 2024-10-14 202747.png';
import gymfit2 from './assets/images/Captura de tela 2024-10-14 202804.png';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Nutritrack',
        description: 'O NutriTrack é um sistema desenvolvido para auxiliar nutricionistas e pacientes no gerenciamento de' +
            ' dietas e informações nutricionais. O projeto inclui funcionalidades como o cadastro de alimentos, criação de dietas personalizadas,' +
            ' e acompanhamento de refeições. Nutricionistas podem criar, editar e monitorar dietas dos pacientes,' +
            ' enquanto os pacientes têm acesso aos seus planos alimentares e podem visualizar suas dietas de forma detalhada.' +
            ' O sistema visa otimizar a interação entre profissionais e pacientes, facilitando o controle e planejamento nutricional de maneira eficiente.',
        image: nt,
        imagePopup: ntPopup,
        imagePopup2: ntPopup2,
        deployLink: 'https://nutri-track-front.vercel.app'
    },
    {
        id: 2,
        title: 'FitTrack',
        description: 'O FitTrack é um sistema de gerenciamento de treinos, voltado para auxiliar usuários na organização e' +
            ' acompanhamento de suas rotinas de exercícios físicos.' +
            ' Com funcionalidades como a criação de treinos personalizados e edição de perfis,' +
            ' o projeto visa oferecer uma plataforma prática e intuitiva para quem deseja otimizar suas atividades físicas.' +
            ' Desenvolvido para web e mobile, o FitTrack busca facilitar o acesso e o controle dos treinos em qualquer lugar.',
        image: gf,
        imagePopup: gymfit,
        imagePopup2: gymfit2,
        deployLink: 'https://gym-prive-front.vercel.app'
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
                            <p>{projects[currentProject].description}</p>
                            <a href={projects[currentProject].deployLink} target="_blank" rel="noopener noreferrer">Ver Deploy</a>
                        </div>
                        <button onClick={closePopup}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCarousel;
