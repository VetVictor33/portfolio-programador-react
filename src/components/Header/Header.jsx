import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProgrammerIcon from '../../assets/icons/header-icon.png';
import Menu from '../../assets/icons/menu.svg';
import './Header.css';

export default function Header() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const headerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const handeScroll = () => {
            if (window.scrollY > 0) {
                headerRef.current.style.backgroundImage = 'linear-gradient(to bottom right, #001848, #301860)';
            } else {
                headerRef.current.style.backgroundImage = 'none';
            }
        }

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
            if (windowSize.width < 1200) handleRemoveMenu()
        }

        window.addEventListener('scroll', handeScroll)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('scroll', handeScroll);
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    const handleToggleShown = () => linksRef.current.classList.toggle('shown');
    const handleRemoveMenu = () => linksRef.current.classList.remove('shown');



    return (
        <header className="Header" ref={headerRef}>
            <Link to={`/`} >
                <img src={ProgrammerIcon} alt="ícone programador" style={{ cursor: 'pointer' }} />
            </Link>
            <nav className="header-navbar">
                <img className='menu' src={Menu} style={{ cursor: 'pointer' }} onClick={handleToggleShown} />
                <ul onClick={handleRemoveMenu} ref={linksRef}>
                    <li>
                        <Link to={`/`} >Home</Link>
                    </li>
                    <li>
                        <Link to={`/about`} >Sobre</Link>
                    </li>
                    <li>
                        <Link to={`/contact`} >Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}