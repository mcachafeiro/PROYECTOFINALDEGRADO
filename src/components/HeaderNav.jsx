import burgerIcon from '../imgs/burguer.svg';
import closeIcon from '../imgs/close.svg';
import homeIcon from '../imgs/botonHeader.svg';
import React, { useState, useEffect } from 'react';
import { Link , useLocation } from 'react-router-dom';
import { Desplegable } from './Desplegable';
import { BotonesCartaReservar } from './BotonesCartaReservar';
import '../styles/HeaderNav.css';
import Puntero from './Puntero';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setIsScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const location = useLocation();
    const className = location.pathname === '/' ? 'header-nav in-index' : 'header-nav';
    const scrolledClass = isScrolled && location.pathname === '/' ? 'scrolled' : '';
    
    return (
        <nav className={`${className} ${scrolledClass} ${isOpen ? 'nav-open' : ''}`}>
            <div className='header__container'>
                <button className="burguer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <img src={closeIcon} alt="Close menu" /> : <img src={burgerIcon} alt="Open menu" />}
                </button>
                <Link to="/">
                    <img src={homeIcon} alt="Home" />
                </Link>
                <ul className='traducir'>
                    <li className='traducir__ES'>
                        <Link to="/en" >ES</Link>
                    </li>
                    <li className='traducir__EN'>
                        <Link to="/es">EN</Link>
                    </li>
                </ul>
            </div>
            <BotonesCartaReservar />
            <Desplegable isOpen={isOpen} />
            <Puntero />
        </nav>
    );
}