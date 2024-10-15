// src/App.js
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import './App.css';
import './index.css';
import img from './assets/images/lhss_33333.jpg';
import tech from './assets/images/tech@2x.png';
import tech_inv from './assets/images/tech_inv@2x.png';
import { FaHome } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import ProjectCarousel from './ProjectCarousel';

function App() {
  return (
    <div className="App">
    {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="header" smooth={true} duration={500}>
              <FaHome className="icons"/>
                HOME 
            </Link>
          </li>
          <li>
            <Link to="sobre-mim" smooth={true} duration={500}>
                <FaUser className="icons"/>
                SOBRE MIM
            </Link>
          </li>
          <li>
            <Link to="projetos" smooth={true} duration={500}>
                <FaDesktop className="icons"/>
                PROJETOS
            </Link>
          </li>
          <li>
            <Link to="contate-me" smooth={true} duration={500}>
                <FaAddressBook className="icons"/>
                CONTATE-ME
            </Link>
          </li>
        </ul>
      </nav>

      <header className="header" id="header">
        <h1>Bem-vindo à Minha Landing Page</h1>
        {/*<img src={tech_inv} className="img_banner" />*/}
      </header>
        
      <div>
        <img src={tech} className="img_banner"/>
      </div>
        
      {/* Seção Sobre Mim com animação */}
      <motion.section
        className="about"
        id="sobre-mim"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Sobre Mim</h2>
        <p>
              Sou estudante de Sistemas para Internet (6º período) no Instituto Federal da Paraíba (IFPB) com experiência em desenvolvimento front-end,
              e estou em busca de oportunidades de estágio na área de Desenvolvimento Front-End,
              tanto para web quanto para mobile, para aplicar e expandir minhas habilidades em projetos inovadores.
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
                    Linguagens de Programação: JavaScript, TypeScript, Kotlin, Java.
                </li>
                <li>
                    Frameworks e Bibliotecas: Angular, ReactJS, VueJS.
                </li>
                <li>
                    Desenvolvimento Mobile: Android Studio, React Native.
                </li>
                <li>
                    Web Design: HTML, CSS, Tailwind, Bootstrap.
                </li>
                <li>
                    Bancos de Dados: MySQL, PostgreSQL.
                </li>
                <li>
                    Controle de Versão: Git (GitHub, GitLab).
                </li>
                <li>
                    Metodologias Ágeis: Scrum.
                </li>
            </ul>
        </div>
        
      </motion.section>

      {/* Seção Projetos com animação para cada projeto */}
      <section className="projects" id="projetos">
        <h2>Projetos</h2>

        <ProjectCarousel />
      </section>
        
      {/* Seção Contate-me com animação */}
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
        
      <footer className="footer">
        <p>&copy; 2024 - Lucas Henrique</p>
      </footer>
    </div>
  );
}

export default App;
