import GitHubLight from '../../assets/icons/github-ffff.png'
import GitHubDark from '../../assets/icons/github.png'
import LinkedInLight from '../../assets/icons/linkedin-ffff.png'
import LinkedInDark from '../../assets/icons/linkedin.png'
import './SocialNavbar.sass'

export default function SocialNavbar() {
    const { pathname } = window.location;

    const GitHubImg = pathname === '/contact' ? GitHubDark : GitHubLight;
    const LinkedInImg = pathname === '/contact' ? LinkedInDark : LinkedInLight;

    return (
        <nav className="SocialNavbar">
            <ul>
                <a href="https://github.com/VetVictor33" target="_blank">
                    <li>
                        <img className="icon-link" src={GitHubImg} alt="GitHub icon" />
                        GitHub
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/victorjfeliciano/" target="_blank">
                    <li>
                        <img className="icon-link" src={LinkedInImg} alt="LinkedIn icon" />
                        LinkedIn
                    </li>
                </a>
            </ul>
        </nav>
    )
}