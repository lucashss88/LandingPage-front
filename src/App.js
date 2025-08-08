import React from 'react';
import {motion} from 'framer-motion';
import './styles/App.css';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './assets/images/KAB_53782.jpg';
import ProjectCarousel from './components/ProjectCarousel';
import Navbar from "./components/Navbar";
import useIsDesktop from "./components/useIsDesktop";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

function App() {

    const isDesktop = useIsDesktop();
    return (
        <div className="App">
            <Navbar/>
            <div className="home container-fluid d-flex flex-column justify-content-center align-items-center"
                 id="home">
                <div className="text-center text-container text-white">
                    <div className="d-flex justify-content-center gap-2">
                        <h1>Oi, Eu me chamo</h1>
                        <div className="title-name">
                            <h1>Lucas</h1>
                        </div>


                    </div>
                    <h5>Desenvolvedor full stack transformando ideias em projetos.</h5>
                </div>
                <div className="d-flex justify-content-center gap-4 w-100" style={{marginTop: '20px'}}>
                    <button className="btn-home">Projetos</button>
                    <button className="btn-home">Baixar CV</button>
                </div>
            </div>
            <div id="header" className="text-center p-5 mb-2 div-img-banner" style={{borderBottom: '3px solid #61dafb'}}>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
                <img className="img_banner" alt="Banner"/>
            </div>
            <div className="main text-white" id="sobre-mim-section">
                <motion.section
                    className="about animate-scale-in"
                    id="sobre-mim"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.3}}
                >
                    <motion.div
                        variants={isDesktop ? {
                            hidden: {opacity: 0, x: -100},
                            visible: {opacity: 1, x: 0}
                        } : false}
                        className="animate-scale-in"
                    >
                        <h2>Sobre Mim</h2>
                        <img src={profile} className="img_profile rounded-5 mb-3 ms-4" alt={profile}/>
                    </motion.div>
                    <p>
                        Sou formado em Tecnologia em Sistemas para Internet pelo IFPB e atualmente curso pós-graduação
                        com foco em desenvolvimento de software.
                        Tenho me capacitado como desenvolvedor full stack, com forte experiência em back-end utilizando
                        Node.js, Express e Sequelize, além de habilidades consolidadas em React para o front-end.
                        Durante minhas experiências profissionais, participei do desenvolvimento de sistemas com foco em
                        usabilidade, performance e boas práticas ágeis, sempre colaborando em equipe.
                        Busco oportunidades para aplicar meu conhecimento em projetos inovadores, tanto no
                        desenvolvimento web quanto mobile, e continuar evoluindo como profissional da área de
                        tecnologia.

                    </p>
                    <motion.div
                        variants={isDesktop ? {
                            hidden: {opacity: 0, x: -100},
                            visible: {opacity: 1, x: 0}
                        } : false}
                        className="animate-fade-in-up"
                    >
                        <h2>Experiências</h2>
                    </motion.div>
                    <div className="row justify-content-center mt-2">
                        <div className="col-md-6 mb-4 animate-fade-in-up delay-100">
                            <div className="shadow-lg h-100 transition-300 hover-scale-105">
                                <div className="p-4">
                                    <WorkIcon className="mb-3" style={{fontSize: 50}}/>
                                    <h3 className="h4 fw-bold mb-3">Estagiário Front-end na Assert IFPB</h3>
                                    <p className="card-text text-center">
                                        Atuei como desenvolvedor front-end no projeto de um armário inteligente,
                                        construindo interfaces web com React, TypeScript, HTML e CSS.
                                        Utilizei hooks do React, como useState e useEffect, e trabalhei com React Router
                                        para navegação entre componentes.
                                        A experiência foi realizada em um ambiente ágil, com uso de Scrum, organização
                                        via Trello e versionamento com Git.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 animate-fade-in-up delay-100">
                            <div className="shadow-lg h-100 transition-300 hover-scale-105">
                                <div className="p-4">
                                    <WorkIcon className="mb-3" style={{fontSize: 50}}/>
                                    <h3 className="h4 fw-bold mb-3">Estagiário Full Stack na Sibit Soluções
                                        Digitais</h3>
                                    <p className="card-text text-center">
                                        Participei como estagiário full stack, contribuindo para o desenvolvimento de
                                        uma API voltada ao gerenciamento de planos alimentares, utilizando Node.js com
                                        JavaScript no back-end. Também desenvolvi uma aplicação web com React,
                                        priorizando uma interface limpa e funcional. Essa experiência consolidou meu
                                        domínio do ecossistema JavaScript e fortaleceu minha base em arquitetura
                                        back-end.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        variants={isDesktop ? {
                            hidden: {opacity: 0, x: -50},
                            visible: {opacity: 1, x: 0}
                        } : false}
                        className="animate-fade-in-up"
                    >
                        <h2>Habilidades e tecnologias</h2>
                    </motion.div>
                    <section id="technologies" className="tech bg-card rounded-3">
                        <div className="text-center">
                            <div className="row justify-content-center g-4">
                                <div className="col-md-6 col-lg-4 animate-fade-in-up delay-100">
                                    <div
                                        className="bg-dark transition-300 hover-scale-105 shadow-sm border-0 rounded-3 h-100">
                                        <div className="p-4">
                                            <CodeIcon className="text-info mb-3" style={{fontSize: 40}}/>
                                            <h3 className="h5 fw-bold text-gray-800 mb-3">Linguagens de Programação</h3>
                                            <ul className="list-unstyled text-gray-600 text-start ps-3">
                                                <li>- JavaScript e TypeScript: Utilizados amplamente em projetos com
                                                    React e Node.js.
                                                </li>
                                                <li>- Java: Utilizando Spring Boot em projetos e aulas da
                                                    pós-graduação.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 animate-fade-in-up delay-200">
                                    <div
                                        className="bg-dark transition-300 hover-scale-105 shadow-sm border-0 rounded-3 h-100">
                                        <div className="card-body p-4">
                                            <CodeIcon className="text-info mb-3" style={{fontSize: 40}}/>
                                            <h3 className="h5 fw-bold text-gray-800 mb-3">Front-end</h3>
                                            <ul className="list-unstyled text-gray-600 text-start ps-3">
                                                <li>- ReactJS: Utilizado no estágio e em projetos pessoais, com uso de
                                                    hooks e React Router.
                                                </li>
                                                <li>- HTML, CSS, Tailwind e Bootstrap: Aplicados no desenvolvimento de
                                                    interfaces modernas e responsivas.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 animate-fade-in-up delay-300">
                                    <div
                                        className="bg-dark transition-300 hover-scale-105 shadow-sm border-0 rounded-3 h-100">
                                        <div className="card-body p-4">
                                            <CodeIcon className="text-info mb-3" style={{fontSize: 40}}/>
                                            <h3 className="h5 fw-bold text-gray-800 mb-3">Back-end</h3>
                                            <ul className="list-unstyled text-gray-600 text-start ps-3">
                                                <li>- Node.js e Express: Experiência prática no desenvolvimento de APIs
                                                    REST com autenticação e middlewares.
                                                </li>
                                                <li>- Sequelize ORM: Utilizado para manipulação de banco de dados com
                                                    PostgreSQL e MySQL.
                                                </li>
                                                <li>- Spring Boot: Utilizado para desenvolvimento de APIs REST com
                                                    Java.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 animate-fade-in-up delay-400">
                                    <div
                                        className="bg-dark transition-300 hover-scale-105 shadow-sm border-0 rounded-3 h-100">
                                        <div className="card-body p-4">
                                            <CodeIcon className="text-info mb-3" style={{fontSize: 40}}/>
                                            <h3 className="h5 fw-bold text-gray-800 mb-3">Bancos de Dados</h3>
                                            <ul className="list-unstyled text-gray-600 text-start ps-3">
                                                <li>- PostgreSQL e MySQL: Utilizados em sistemas acadêmicos e projetos
                                                    pessoais.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 animate-fade-in-up delay-500">
                                    <div
                                        className="bg-dark transition-300 hover-scale-105 shadow-sm border-0 rounded-3 h-100">
                                        <div className="card-body p-4">
                                            <CodeIcon className="text-info mb-3" style={{fontSize: 40}}/>
                                            <h3 className="h5 fw-bold text-gray-800 mb-3">Versionamento</h3>
                                            <ul className="list-unstyled text-gray-600 text-start ps-3">
                                                <li>- Git, GitHub e GitLab: Controle de versão e colaboração em todos os
                                                    projetos realizados.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 animate-fade-in-up delay-600">
                                    <div
                                        className="bg-dark transition-300 hover-scale-105 shadow-sm border-0 rounded-3 h-100">
                                        <div className="card-body p-4">
                                            <CodeIcon className="text-info mb-3" style={{fontSize: 40}}/>
                                            <h3 className="h5 fw-bold text-gray-800 mb-3">Metodologias Ágeis</h3>
                                            <ul className="list-unstyled text-gray-600 text-start ps-3">
                                                <li>- Scrum e Kanban: Práticas aplicadas durante os estágios e em
                                                    projetos de equipe com Trello.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.section>

                <section className="projects" id="projetos">
                    <h2>Projetos</h2>
                    <ProjectCarousel/>
                </section>

                <motion.section
                    className="contact"
                    id="contate-me"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    <h2>Contate-me</h2>
                    <p className="email">Email: lucashss88@gmail.com</p>
                    <p className="email">Email secundário: serrano.lucas@academico.ifpb.edu.br</p>
                    <p className="fs-5">
                        <a href="https://www.linkedin.com/in/lucas-henrique-serrano-soares/" target="_blank"
                           rel="noopener noreferrer"
                           className="link-footer d-flex align-items-center justify-content-center">
                            <LinkedInIcon className="me-2"/> Meu LinkedIn
                        </a>
                    </p>
                    <p className="fs-5">
                        <a href="https://github.com/lucashss88" target="_blank" rel="noopener noreferrer"
                           className="link-footer d-flex align-items-center justify-content-center">
                            <GitHubIcon className="me-2"/> Meu Github
                        </a>
                    </p>
                </motion.section>
            </div>
            <footer className="text-center p-3 bg-dark text-white mb-0 position-relative">
                <p>&copy; 2025 - LUCAS HENRIQUE SERRANO SOARES. Todos os direitos preservados.</p>
            </footer>
        </div>
    );
}

export default App;
