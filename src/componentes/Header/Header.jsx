import './Header.css';
import ProgrammerIcon from '../../assets/icons/header-icon.png';
import { useEffect } from 'react';

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
                    <li><a href="./index.html">Apresentação</a></li>
                    <li><a href="./pages/about/index.html">Sobre</a></li>
                    <li><a href="./pages/contact/index.html">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}