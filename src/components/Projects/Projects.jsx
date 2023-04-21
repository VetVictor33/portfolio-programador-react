import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectImg from './../../assets/icons/project.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { getProjectsFromLocalStorage, requestProjects } from '../../database/repository';

export default function Projects() {
    const [projects, setProjects] = useState(null)


    async function getProjectsFromApi() {
        const projects = await requestProjects();
        setProjects(projects);
    }

    useEffect(() => {
        const projectsFromLocalStorage = getProjectsFromLocalStorage();
        if (!projectsFromLocalStorage) {
            getProjectsFromApi();
        } else {
            setProjects(projectsFromLocalStorage)
        }
    }, []);

    return (
        <section className="Projects">
            <article className="projetcs-introduction">
                <h1 className="main-title">Projetos Pessoais</h1>
                <img className="icon projects-img" src={ProjectImg} />
                <p className="text-description">Esses são alguns dos projetos que desenvolvi para praticar meus
                    conhecimentos em programação.
                    Fiz questão de deixar os projetos mais simples, de quando iniciei o aprendizado, para enfatizar a
                    <span className="texto-destaque"> evolução</span>.
                </p>
                <p className="text-description"> A principais tecnologias são JavaScript, React, Node, HTML e CSS.
                </p>
            </article>
            <div className="projects-cards">
                {projects && projects.map((project) => {
                    return (
                        <ProjectCard key={project.id} project={project} />
                    )
                })}
            </div>
        </section>
    )
}