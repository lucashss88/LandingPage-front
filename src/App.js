// src/App.js
import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tech_inv from './assets/images/tech_inv@2x.png';
import profile from './assets/images/profile2.jpg';
import { FaHome } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import ProjectCarousel from './ProjectCarousel';

function App() {
  return (
     <div className="App">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3 py-lg-3 w-100">
         <div className="container-fluid d-flex justify-content-center">
           <ul className="navbar-nav d-flex gap-5 cursor-pointer">
             <li className="nav-item nav-link text-white">
               <Link to="header" smooth={true} duration={500}>
                 <FaHome className="icons"/>
                   HOME
               </Link>
             </li>
             <li className="nav-item nav-link text-white">
               <Link to="sobre-mim" smooth={true} duration={500}>
                 <FaUser className="icons"/>
                 SOBRE MIM
               </Link>
             </li>
             <li className="nav-item nav-link text-white">
               <Link to="projetos" smooth={true} duration={500}>
                 <FaDesktop className="icons"/>
                 PROJETOS
               </Link>
             </li>
             <li className="nav-item nav-link text-white">
               <Link to="contate-me" smooth={true} duration={500}>
                 <FaAddressBook className="icons"/>
                 CONTATE-ME
               </Link>
             </li>
           </ul>
         </div>
       </nav>
       <header id="header" className="bg-dark text-white text-center p-5 mt-5 mb-2">
           {/* eslint-disable-next-line jsx-a11y/alt-text */}
         <img src={tech_inv} className="img_banner" />
       </header>
       <motion.section
          className="about"
          id="sobre-mim"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
       >
          <h2>Sobre Mim</h2>
          <img src={profile} className="img_profile rounded-5 mb-3"  alt={profile}/>
          <p>
              Sou estudante do último período de Tecnologia em Sistemas para Internet (IFPB), com experiência prática em desenvolvimento front-end e projetos fullstack.
              Tenho interesse em atuar com tecnologias como React, Node.js e PostgreSQL. Durante meu estágio, desenvolvi interfaces e sistemas com foco em usabilidade,
              colaboração em equipe e boas práticas ágeis. Busco oportunidades para continuar aprendendo e contribuindo com soluções inovadoras, tanto no desenvolvimento web quanto mobile.
          </p>
          <h2>Experiências</h2>
          <p>
            Durante meu estágio na Assert IFPB, desenvolvi interfaces de usuário para aplicações web utilizando TypeScript,
            HTML, CSS e React. Participei do desenvolvimento de um armário inteligente, contribuindo com soluções criativas
            para otimizar a experiência do usuário. Trabalhei em uma equipe ágil,
            utilizando Git para controle de versão e Scrum para organização e monitoramento das atividades no Trello,
            aprimorando minhas habilidades de colaboração e trabalho em equipe.
          </p>
          <h2>Habilidades e tecnologias</h2>
          <div className="list_tec">
            <ul>
              <li>
                Linguagens de Programação<br />
                  - JavaScript e TypeScript: Usados em projetos com React e Node.js.<br />
                  - Kotlin: Utilizado em projeto mobile (disciplinar) com Android Studio.<br />
                  - Java: Conhecimento básico obtido em disciplinas da graduação.<br />
              </li>
              <li>
                Frameworks e Bibliotecas<br />
                  - ReactJS: Aplicado no estágio (armário inteligente) e em projetos pessoais.<br />
                  - VueJS: Utilizado em parte do sistema desenvolvido no estágio.<br />
                  - Angular: Conhecimento obtido em projetos acadêmicos e cursos.<br />
              </li>
              <li>
                Desenvolvimento Mobile<br />
                  - Android Studio e Kotlin: Projeto final de disciplina de Programação Mobile.<br />
                  - React Native: Em fase de estudo, com base na experiência com React.<br />
              </li>
              <li>
                Web Design<br />
                  - HTML, CSS, Tailwind, Bootstrap: Utilizados em interfaces de diversos projetos.
              </li>
              <li>
                Bancos de Dados<br />
                  - MySQL e PostgreSQL: Usados em projetos acadêmicos e pessoais (NutriTrack/FitTrack).
              </li>
              <li>
                Controle de Versão<br />
                  - Git, GitHub, GitLab: Versionamento e colaboração em todos os projetos.
              </li>
              <li>
                Metodologias Ágeis<br />
                  - Scrum e Kanban: Aplicados no estágio (Trello) e em projetos da graduação.
              </li>
            </ul>
          </div>
       </motion.section>


       <section className="projects" id="projetos">
         <h2>Projetos</h2>
         <ProjectCarousel />
       </section>
        
       <motion.section
          className="contact"
          id="contate-me"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
       >
         <h2>Contate-me</h2>
         <p>Email: serrano.lucas@academico.ifpb.edu.br</p>
         <p>LinkedIn: <a href="https://www.linkedin.com/in/lucas-henrique-serrano-soares-382339248/">Meu LinkedIn</a></p>
         <p>Github: <a href="https://github.com/lucashss88">Meu Github</a></p>
       </motion.section>
        
       <footer className="text-center p-3 bg-dark text-white mb-0 position-relative">
         <p>&copy; 2025 - LUCAS HENRIQUE SERRANO SOARES</p>
       </footer>
     </div>
  );
}

export default App;
