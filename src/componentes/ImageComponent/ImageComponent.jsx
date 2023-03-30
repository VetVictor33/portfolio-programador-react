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


export default function ImageComponent({ imgSrc }) {
    switch (imgSrc) {
        case 'curriculo-web':
            return <img className='card-img' src={CurriculoWeb} alt='Projeto' />
        case 'portfolio-escritor':
            return <img className='card-img' src={PortfolioEscritor} alt='Projeto' />
        case 'duolingo-clone':
            return <img className='card-img' src={CloneDuolingo} alt='Projeto' />
        case 'desafio-portfolio':
            return <img className='card-img' src={DesafioPortfolio} alt='Projeto' />
        case 'form-signup':
            return <img className='card-img' src={FormSignup} alt='Projeto' />
        case 'form':
            return <img className='card-img' src={Form} alt='Projeto' />
        case 'tech-store':
            return <img className='card-img' src={TechStore} alt='Projeto' />
        case 'tech-store-mobile':
            return <img className='card-img' src={TechStoreMobile} alt='Projeto' />
        case 'gourmet-burger':
            return <img className='card-img' src={GourmetBurger} alt='Projeto' />
        case 'gourmet-burger-mobile':
            return <img className='card-img' src={GourmetBurgerMobile} alt='Projeto' />
        case 'music-app':
            return <img className='card-img' src={MusicApp} alt='Projeto' />
        case 'music-app-mobile':
            return <img className='card-img' src={MusicAppMobile} alt='Projeto' />
        case 'rick-morty':
            return <img className='card-img' src={RickMorty} alt='Projeto' />
        case 'desafio-modulo3':
            return <img className='card-img' src={DesafioModulo3} alt='Projeto' />
        case 'lets-travel':
            return <img className='card-img' src={LetsTravel} alt='Projeto' />
        case 'lets-travel-mobile':
            return <img className='card-img' src={LetsTravelMobile} alt='Projeto' />
        case 'portfolio-antigo':
            return <img className='card-img' src={PortfolioAntigo} alt='Projeto' />
        case 'portfolio-antigo-mobile':
            return <img className='card-img' src={PortfolioAntigoMobile} alt='Projeto' />
        default:
            return <h2>Imagem ainda não disponível</h2>
    }


}