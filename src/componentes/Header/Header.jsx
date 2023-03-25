import './Header.css';
import ProgrammerIcon from '../../assets/icons/header-icon.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

    return (
        <header className="Header">
            <img src={ProgrammerIcon} alt="ícone programador" />
            <nav className="header-navbar">
                <ul>
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