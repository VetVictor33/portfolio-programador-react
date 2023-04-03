import CurriculoWeb from '../../assets/projects/curriculo-web.png'
import PortfolioEscritor from '../../assets/projects/portfolio-escritor.png'
import CloneDuolingo from '../../assets/projects/duolingo-clone.png'
import DesafioPortfolio from '../../assets/projects/desafio-portfolio.png'
import FormSignup from '../../assets/projects/form-signup.png'
import Form from '../../assets/projects/form.png'
import TechStore from '../../assets/projects/tech-store.png'
import TechStoreMobile from '../../assets/projects/tech-store-mobile.png'
import GourmetBurger from '../../assets/projects/gourmet-burger.png'
import GourmetBurgerMobile from '../../assets/projects/gourmet-burger-mobile.png'
import MusicApp from '../../assets/projects/music-app.png'
import MusicAppMobile from '../../assets/projects/music-app-mobile.png'
import RickMorty from '../../assets/projects/rick-morty.png'
import DesafioModulo3 from '../../assets/projects/desafio-modulo3.png'
import LetsTravel from '../../assets/projects/lets-travel.png'
import LetsTravelMobile from '../../assets/projects/lets-travel-mobile.png'
import PortfolioAntigo from '../../assets/projects/portfolio-antigo.png'
import PortfolioAntigoMobile from '../../assets/projects/portfolio-antigo-mobile.png'
import NoImageAvailable from '../../assets/no_image_available.svg'
import MatchingGame from '../../assets/projects/matching-game.png'
import MatchingGameMobile from '../../assets/projects/matching-game-mobile.png'

import './ImageComponent.css'


export default function ImageComponent({ imgSrc }) {
    let src = undefined;
    const pathname = window.location.pathname;
    switch (imgSrc) {
        case 'curriculo-web':
            src = CurriculoWeb
            break;
        case 'portfolio-escritor':
            src = PortfolioEscritor
            break;
        case 'duolingo-clone':
            src = CloneDuolingo
            break;
        case 'desafio-portfolio':
            src = DesafioPortfolio
            break;
        case 'form-signup':
            src = FormSignup
            break;
        case 'form':
            src = Form
            break;
        case 'tech-store':
            src = TechStore
            break;
        case 'tech-store-mobile':
            src = TechStoreMobile
            break;
        case 'gourmet-burger':
            src = GourmetBurger
            break;
        case 'gourmet-burger-mobile':
            src = GourmetBurgerMobile
            break;
        case 'music-app':
            src = MusicApp
            break;
        case 'music-app-mobile':
            src = MusicAppMobile
            break;
        case 'rick-morty':
            src = RickMorty
            break;
        case 'desafio-modulo3':
            src = DesafioModulo3
            break;
        case 'lets-travel':
            src = LetsTravel
            break;
        case 'lets-travel-mobile':
            src = LetsTravelMobile
            break;
        case 'portfolio-antigo':
            src = PortfolioAntigo
            break;
        case 'portfolio-antigo-mobile':
            src = PortfolioAntigoMobile
            break
        case 'matching-game':
            src = MatchingGame
            break
        case 'matching-game-mobile':
            src = MatchingGameMobile
            break
        default:
            src = NoImageAvailable
    }

    return (
        <div className='ImageComponent'>
            <img className='card-img' src={src} alt='Projeto' />
            {pathname !== '/' && <p className='tooltip'>GitHub</p>}
        </div>
    )

}