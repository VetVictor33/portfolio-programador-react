import './SocialNavbar.css'
import GitHubImg from '../../assets/icons/github.png'
import LinkedInImg from '../../assets/icons/linkedin.png'

export default function SocialNavbar() {
    return (
        <nav className="SocialNavbar">
            <ul>
                <a href="https://github.com/VetVictor33">
                    <li>
                        <img className="icon-link" src={GitHubImg} alt="GitHub icon" />
                        GitHub
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/victorjfeliciano/">
                    <li>
                        <img className="icon-link" src={LinkedInImg} alt="LinkedIn icon" />
                        LinkedIn
                    </li>
                </a>
            </ul>
        </nav>
    )
}