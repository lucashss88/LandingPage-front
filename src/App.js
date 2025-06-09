// src/App.js
import React from 'react';
import {motion} from 'framer-motion';
import './styles/App.css';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './assets/images/profile2.jpg';
import ProjectCarousel from './components/ProjectCarousel';
import Navbar from "./components/Navbar";
import useIsDesktop from "./components/useIsDesktop";

function App() {

    const isDesktop = useIsDesktop();
    return (
        <div className="App">
            <Navbar />
            <header id="header" className="text-center p-5 mb-2">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="img_banner" alt="Banner"/>
            </header>
            <div className="px-3 px-md-5 text-white">
                <motion.section
                    className="about"
                    id="sobre-mim"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 1}}
                >
                    <motion.div
                        variants={isDesktop ? {
                            hidden: {opacity: 0, x: -100},
                            visible: {opacity: 1, x: 0}
                        } : false}
                        transition={{duration: 2}}
                    >
                        <h2>Sobre Mim</h2>
                        <img src={profile} className="img_profile rounded-5 mb-3 ms-4" alt={profile}/>
                    </motion.div>
                    <p>
                        Sou formado em Tecnologia em Sistemas para Internet pelo IFPB e atualmente curso pós-graduação com foco em desenvolvimento de software.
                        Tenho me capacitado como desenvolvedor full stack, com forte experiência em back-end utilizando Node.js, Express e Sequelize, além de habilidades consolidadas em React para o front-end.
                        Durante minhas experiências profissionais, participei do desenvolvimento de sistemas com foco em usabilidade, performance e boas práticas ágeis, sempre colaborando em equipe.
                        Busco oportunidades para aplicar meu conhecimento em projetos inovadores, tanto no desenvolvimento web quanto mobile, e continuar evoluindo como profissional da área de tecnologia.

                    </p>
                    <motion.div
                        variants={isDesktop ? {
                            hidden: {opacity: 0, x: -100},
                            visible: {opacity: 1, x: 0}
                        } : false}
                        transition={{duration: 2}}
                    >
                        <h2>Experiências</h2>
                    </motion.div>
                    <p>
                        Durante meu estágio na Assert IFPB, atuei como desenvolvedor front-end no projeto de um armário inteligente, construindo interfaces web com React, TypeScript, HTML e CSS.
                        Utilizei hooks do React, como useState e useEffect, e trabalhei com React Router para navegação entre componentes. A experiência foi realizada em um ambiente ágil, com uso de Scrum, organização via Trello e versionamento com Git.
                        <br></br><br></br>Mais recentemente, participei como estagiário full stack na Sibit Soluções Digitais, contribuindo para o desenvolvimento de uma API voltada ao gerenciamento de planos alimentares,
                        utilizando Node.js com JavaScript no back-end. Também desenvolvi uma aplicação web com React, priorizando uma interface limpa e funcional.
                        Essa experiência consolidou meu domínio do ecossistema JavaScript e fortaleceu minha base em arquitetura back-end.

                    </p>
                    <motion.div
                        variants={isDesktop ? {
                            hidden: {opacity: 0, x: -50},
                            visible: {opacity: 1, x: 0}
                        } : false}
                        transition={{duration: 2}}
                    >
                        <h2>Habilidades e tecnologias</h2>
                    </motion.div>
                    <div className="list_tec">
                        <ul>
                            <li>
                                <strong>Linguagens de Programação</strong><br/>
                                - JavaScript e TypeScript: Utilizados amplamente em projetos com React e Node.js.<br/>
                                - Java: Utilizando Spring boot em projetos e aulas da pós graduação.
                            </li>
                            <li>
                                <strong>Front-end</strong><br/>
                                - ReactJS: Utilizado no estágio e em projetos pessoais, com uso de hooks e React Router.<br/>
                                - HTML, CSS, Tailwind e Bootstrap: Aplicados no desenvolvimento de interfaces modernas e responsivas.
                            </li>
                            <li>
                                <strong>Back-end</strong><br/>
                                - Node.js e Express: Experiência prática no desenvolvimento de APIs REST com autenticação e middlewares.<br/>
                                - Sequelize ORM: Utilizado para manipulação de banco de dados com PostgreSQL e MySQL.<br/>
                                - Spring Boot: Utilizado para desenvolvimento de APIs REST com Java.
                            </li>
                            <li>
                                <strong>Bancos de Dados</strong><br/>
                                - PostgreSQL e MySQL: Utilizados em sistemas acadêmicos e projetos pessoais.
                            </li>
                            <li>
                                <strong>Versionamento</strong><br/>
                                - Git, GitHub e GitLab: Controle de versão e colaboração em todos os projetos realizados.
                            </li>
                            <li>
                                <strong>Metodologias Ágeis</strong><br/>
                                - Scrum e Kanban: Práticas aplicadas durante os estágios e em projetos de equipe com Trello.
                            </li>
                        </ul>
                    </div>
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
                    <p>Email: serrano.lucas@academico.ifpb.edu.br</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/lucas-henrique-serrano-soares-382339248/">Meu
                        LinkedIn</a></p>
                    <p>Github: <a href="https://github.com/lucashss88">Meu Github</a></p>
                </motion.section>
            </div>
            <footer className="text-center p-3 bg-dark text-white mb-0 position-relative">
                <p>&copy; 2025 - LUCAS HENRIQUE SERRANO SOARES</p>
            </footer>
        </div>
    );
}

export default App;
