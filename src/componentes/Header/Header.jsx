import './Header.css';
import ProgrammerIcon from '../../assets/icons/header-icon.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../assets/icons/menu.svg'

export default function Header() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const header = document.querySelector('.Header');
        const headerBborder = header.style.borderBottom;
        const menu = document.querySelector('.menu');
        const links = document.querySelector('.Header ul');
        const handeScroll = () => {
            if (window.scrollY > 0) {
                header.style.backgroundImage = 'linear-gradient(to bottom right, #001848, #301860)';
            } else {
                header.style.backgroundImage = 'none';
                header.style.borderBottom = headerBborder;
            }
        }
        const handleClick = () => {
            links.classList.toggle('shown');
            const top = links.style.top != '40px' ? '40px' : '0px'
            setTimeout(() => {
                links.style.top = top
            }, 100);
        }
        const handleClickLinks = () => {
            links.classList.remove('shown');
            links.style.top = '0'
        }
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
            if (windowSize.width < 1200) {
                links.classList.remove('shown');
                links.style.top = '0'
            }
        }

        window.addEventListener('scroll', handeScroll)
        menu.addEventListener('click', handleClick);
        links.addEventListener('click', handleClickLinks);
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('scroll', handeScroll);
            menu.removeEventListener('click', handleClick);
            links.removeEventListener('click', handleClickLinks);
            window.removeEventListener('resize', handleResize)
        };
    });



    return (
        <header className="Header">
            <Link to={`/`}>
                <img src={ProgrammerIcon} alt="ícone programador" style={{ cursor: 'pointer' }} />
            </Link>
            <nav className="header-navbar">
                <img className='menu' src={Menu} style={{ cursor: 'pointer' }} />
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