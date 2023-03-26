import './Header.css';
import ProgrammerIcon from '../../assets/icons/header-icon.png';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../assets/icons/menu.svg'

export default function Header() {
    useEffect(() => {
        const header = document.querySelector('.Header');
        const headerBborder = header.style.borderBottom;

        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.style.backgroundImage = 'linear-gradient(to bottom right, #001848, #301860)';
                //header.style.borderBottom = 'none';
            } else {
                header.style.backgroundImage = 'none';
                header.style.borderBottom = headerBborder;
            }
        });

        return () => {
            document.removeEventListener('scroll');
        };
    }, []);

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(() => {
            const menu = document.querySelector('.menu');
            const links = document.querySelector('.Header ul')
            menu.addEventListener('click', () => {
                links.classList.remove('hidden')
            })
            links.addEventListener('mouseleave', () => {
                links.classList.add('hidden')
            })
        });
    };

    return (
        <header className="Header">
            <Link to={`/`}>
                <img src={ProgrammerIcon} alt="ícone programador" style={{ cursor: 'pointer' }} />
            </Link>
            <nav className="header-navbar">
                <img className='menu' src={Menu} style={{ cursor: 'pointer' }} onClick={toggleMenu} />
                <ul className='hidden'>
                    <li>
                        <Link to={`/`}>Apresentação</Link>
                    </li>
                    <li>
                        <Link to={`/about`}>Sobre</Link>
                    </li>
                    <li>
                        <Link to={`/contact`}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}