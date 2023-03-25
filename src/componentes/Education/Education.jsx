import './Education.css'

export default function Education() {
    return (
        <div className="Education">
            <section className="primary-educaton">
                <div className="title-icon">
                    <div className="icon education-icon"></div>
                    <h2 className="main-title medium-title">Educação</h2>
                </div>
                <article className="course">
                    <p className="text-description course-name">Cubos Academy</p>
                    <p className="text-description course-date">10/2022 - 08/2023</p>
                    <p className="text-description course-description">Desenvolvimento Front-end utilizando HTML, CSS e
                        biblioteca React
                        Js;<br />
                        Desenvolvimento Back-end utilizando Javascript e pacotes npm;<br />
                        Desenvolvimento de APIs Rest;<br />
                        Experiência com projeção de banco de dados utilizando PostgresSQL;<br />
                        Experiência com Git Hub.</p>
                </article>
                <article className="course">
                    <p className="text-description course-name">Medicina Veterinária</p>
                    <p className="text-description course-date">03/2017 - 07/2022</p>
                    <p className="text-description course-description"></p>
                </article>
            </section>
            <section className="complementary education">
                <div className="title-icon">
                    <div className="icon complementary-icon"></div>
                    <h2 className="main-title smaller-title">Cursos Complementares</h2>
                </div>
            </section>
        </div>
    )
}