import React, { useState } from "react";
import { Link } from "react-scroll";
import {FaBars, FaTimes} from "react-icons/fa";
import LucasDev from "../assets/images/lucasdev3@4x.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-dark text-white position-sticky top-0 w-100 shadow z-3 py-2" style={{borderBottom: '3px solid #61dafb'}}>
            <div className="container d-flex justify-content-between align-items-center py-3">
                <div className=""><img src={LucasDev} alt="Lucas Dev" className="img-navbar"/> </div>

                <ul className="d-none d-md-flex gap-4 list-unstyled mb-0 align-items-center fs-6">
                    <li>
                        <Link to="home" smooth={true} duration={500} className="icon-inicio d-flex align-items-center gap-2 cursor-pointer">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link to="projetos" smooth={true} duration={500} className="icon d-flex align-items-center gap-2 cursor-pointer">
                            Projetos
                        </Link>
                    </li>
                </ul>

                <div className="d-md-none">
                    <button onClick={toggleMenu} className="btn btn-dark p-1">
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <ul className="navMobile bg-dark">
                    <li>
                        <Link to="home" smooth={true} duration={500} onClick={toggleMenu} className="text-white text-decoration-none d-flex justify-center align-items-center gap-2">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link to="projetos" smooth={true} duration={500} className="icon d-flex align-items-center gap-2 cursor-pointer">
                            Projetos
                        </Link>
                    </li>
                    <li className="navIcons">
                        <a href="https://github.com/lucashss88" target="_blank" rel="noreferrer" >
                            <GitHubIcon className="text-white" fontSize="large"/>
                        </a>

                        <a href="https://www.linkedin.com/in/lucas-henrique-serrano-soares/" target="_blank" rel="noreferrer">
                            <LinkedInIcon className="text-white" fontSize="large"/>
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}
