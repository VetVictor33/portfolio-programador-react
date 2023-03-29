import './Projects.css'
import { projectsMock } from '../../mock'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectImg from './../../assets/icons/project.png'


export default function Projects() {
    return (
        <section className="Projects">
            <article className="projetcs-introduction">
                <h1 className="main-title">Projetos Pessoais</h1>
                <img className="icon projects-img" src={ProjectImg} />
                <p className="text-description">Esses são alguns dos projetos que desenvolvi para praticar meus
                    conhecimentos em programação.
                    Fiz questão de deixar os projetos mais simples, de quando iniciei o aprendizado, para enfatizar a
                    <span className="texto-destaque">evolução</span>
                </p>
            </article>
            <div className="projects-cards">
                {projectsMock.map((project) => {
                    return (
                        <ProjectCard key={project.id} project={project} />
                    )
                })}
            </div>
        </section>
    )
}