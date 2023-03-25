import './Resume.css'
import TextImg from '../../assets/icons/coding.png'

export default function Resume() {
    return (
        <section className="Resume">
            <h1 className="main-title">Quem sou eu</h1>
            <div className="icons icon icon-glass"></div>
            <p className="text-description">Apaixonado por literatura, política e ciência. Adoro uma boa
                conversa
                com
                pessoas com visões e experiências diferentes das minhas. Sou viciado em aprender idiomas e um dia
                quero
                saber falar todas as línguas. </p>

            <div className="icons">
                <div className="icon icon1"></div>
                <div className="icon icon2"></div>
                <div className="icon icon3"></div>
            </div>
            <div className="text-with-icon">
                <div className="about-img"><img src={TextImg} alt="" /></div>
                <div>
                    <p className="text-description"> Atualmente estou em transição de carreira para a
                        programação
                        com
                        a
                        ajuda do curso de Desenvolvedor de
                        Software Full-Stack da Cubos Academy. Já fiz cursos básicos de <span className="text-destaque">
                            JavaScript,
                            Java, CSS, HTML</span> e Python na
                        Alura. Além disso, possuo <span className="text-destaque"> inglês C2</span>, já estudei francês
                        e
                        sei o
                        básico, mas hoje estou focando no
                        espanhol.</p>

                    <p className="text-description"> Tenho como área de origem a medicina veterinária,
                        profissão
                        na
                        qual
                        tive a oportunidade de desenvolver
                        meus soft skills ao lidar com colegas e tutores de cães e gatos em diversas situações.<br />

                        Meu <span className="text-destaque"> objetivo atual</span> é migrar para a área da tecnologia
                        trabalhando com desenvolvimento de
                        software
                        <span className="text-destaque"> front-end, back-end ou full-stack</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}