/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import LogoInPulso from '../../assets/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isHomePage = location.pathname === '/';

    const handleLinkClick = (e: any, id: string) => {
        e.preventDefault();
        if (isHomePage) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/home', { state: { targetId: id } });
        }
        setIsOpen(false);
    };

    return (
        <header className='lp-header'>
            <nav className='lp-container'>
                <div className='lp-header-nav-logo'>
                    <NavLink to={'/home'} >
                        <img src={LogoInPulso} alt="logo InPulso" />
                    </NavLink>
                </div>
                <div className={`lp-header-nav-links ${isOpen ? 'open' : ''}`}>
                    <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Início</a>
                    <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Serviços</a>
                    <a href="#about-us" onClick={(e) => handleLinkClick(e, 'about-us')}>Sobre Nós</a>
                    <a href="#clients" onClick={(e) => handleLinkClick(e, 'clients')}>Cases</a>
                    <a href="#faqs" onClick={(e) => handleLinkClick(e, 'faqs')}>FAQs</a>
                    <a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')}>Depoimentos</a>
                    <NavLink to='/roas' onClick={() => setIsOpen(false)}> Calculadora de ROAS</NavLink>
                    <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contato</a>
                </div>
                <div className='lp-menu-icon' onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
        </header>
    );
}
