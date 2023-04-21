import { useEffect, useState } from 'react'
import ComplEdu from '../../assets/icons/puzzle.png'
import PrimaryEdu from '../../assets/icons/scholarship.png'
import { getCompEduFromLocalStorage, requestComEdu } from '../../database/repository'
import CompEdu from '../CompEdu/CompEdu'
import './Education.css'

export default function Education() {
    const [complementaryEducation, setComplementaryEducation] = useState(null)

    async function getCompEduFromApi() {
        const compEdu = await requestComEdu();
        setComplementaryEducation(compEdu);
    }

    useEffect(() => {
        const compEduFromLocalStorage = getCompEduFromLocalStorage();
        if (!compEduFromLocalStorage) {
            getCompEduFromApi();
        } else {
            setProjects(compEduFromLocalStorage);
        }
    }, []);

    return (
        <div className="Education">
            <section className="primary-educaton">
                <div className="title-icon">
                    <img className="icon education-icon" src={PrimaryEdu} />
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
                    <img className="icon education-icon" src={ComplEdu} />
                    <h2 className="main-title smaller-title">Cursos Complementares</h2>
                </div>
                <div className="CompEdu">
                    {complementaryEducation && complementaryEducation.map((compEdu) => {
                        return (
                            <CompEdu key={compEdu.id} props={compEdu} />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}