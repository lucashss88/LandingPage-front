import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaDesktop, FaAddressBook, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-dark text-white fixed top-0 w-100 shadow z-3">
            <div className="container d-flex justify-content-between align-items-center py-3">
                <div className="fw-bold fs-4">Lucas Henrique Serrano Soares</div>

                {/* Menu desktop */}
                <ul className="d-none d-md-flex gap-4 list-unstyled mb-0 align-items-center">
                    <li>
                        <Link to="header" smooth={true} duration={500} className="text-white d-flex align-items-center gap-2 cursor-pointer icon">
                            <FaHome className="icons" />
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="sobre-mim" smooth={true} duration={500} className="text-white d-flex align-items-center gap-2 cursor-pointer icon">
                            <FaUser className="icons" />
                            SOBRE MIM
                        </Link>
                    </li>
                    <li>
                        <Link to="projetos" smooth={true} duration={500} className="text-white icon d-flex align-items-center gap-2 cursor-pointer">
                            <FaDesktop className="icons" />
                            PROJETOS
                        </Link>
                    </li>
                    <li>
                        <Link to="contate-me" smooth={true} duration={500} className="text-white icon d-flex align-items-center gap-2 cursor-pointer">
                            <FaAddressBook className="icons" />
                            CONTATE-ME
                        </Link>
                    </li>
                </ul>

                {/* Botão do menu mobile */}
                <div className="d-md-none">
                    <button onClick={toggleMenu} className="btn btn-dark p-1">
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Menu mobile dropdown */}
            {menuOpen && (
                <ul className="d-flex flex-column text-center gap-4 py-3 bg-dark d-md-none list-unstyled ms-2 m-0">
                    <li>
                        <Link to="header" smooth={true} duration={500} onClick={toggleMenu} className="text-white text-decoration-none d-flex justify-center align-items-center gap-2">
                            <FaHome className="icons" />
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="sobre-mim" smooth={true} duration={500} onClick={toggleMenu} className="text-white text-decoration-none d-flex justify-center align-items-center gap-2">
                            <FaUser className="icons" />
                            SOBRE MIM
                        </Link>
                    </li>
                    <li>
                        <Link to="projetos" smooth={true} duration={500} onClick={toggleMenu} className="text-white text-decoration-none d-flex justify-center align-items-center gap-2">
                            <FaDesktop className="icons" />
                            PROJETOS
                        </Link>
                    </li>
                    <li>
                        <Link to="contate-me" smooth={true} duration={500} onClick={toggleMenu} className="text-white text-decoration-none d-flex justify-center align-items-center gap-2">
                            <FaAddressBook className="icons" />
                            CONTATE-ME
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
