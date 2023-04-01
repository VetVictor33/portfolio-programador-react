import SocialNavbar from '../SocialNavbar/SocialNavbar'
import './Contact.css'
import ProfileImg from '../../assets/perfil.jpg'
import Gmail from '../../assets/icons/gmail.svg'

export default function Contact() {
    return (
        <div className='Contact'>
            <div className='background'>
                <div className='box'>
                    <img id='profile' src={ProfileImg} alt="" />
                    <div className='text-box'>
                        <p>Viu algo interessante em meu portfólio e gostaria de falar comigo?</p>

                        <a href="mailto:victorjfeliciano@gmail.com">
                            <img id='gmail' src={Gmail} alt="gmail" />
                        </a>
                        <p>Estou sempre de olho no meu email e no LinkedIn, fique a vontade para me enviar uma mensagem!</p>
                    </div>
                </div>
            </div>

            <SocialNavbar />

        </div>
    )
}