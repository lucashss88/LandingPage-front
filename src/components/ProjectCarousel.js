import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectCarousel.css';
import {projects} from './Projects';

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
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                <a onClick={handlePrevProject} className="btn btn-dark carousel-control-prev-icon p-3 rounded-2 me-3" />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
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
                                {projects[currentProject].popupImages && projects[currentProject].popupImages.map((imagem, index) => (
                                    <img
                                        key={index}
                                        src={imagem}
                                        alt={`${projects[currentProject].title} - Imagem ${index + 1}`}
                                    />
                                ))}
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
                                {/*<a href={projects[currentProject].simulacao}>Link</a>*/}
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
