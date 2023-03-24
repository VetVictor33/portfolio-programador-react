import './Header.css'
import ProgrammerIcon from '../../assets/icons/header-icon.png';

export default function Header() {
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