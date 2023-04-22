import './Presentation.css'
import Profile from './../../assets/perfil/perfil4.jpg'

export default function Presentation() {
    return (
        <section className="Presentation">
            <article className="preseentation-text">
                <h1>Victor Feliciano</h1>
                <h2>programador full stack</h2>
                <p>enxergando o mundo pelo código fonte</p>
            </article>
            <div className="presentation-img">
                <img src={Profile} alt="" />
            </div>
        </section>
    )
}