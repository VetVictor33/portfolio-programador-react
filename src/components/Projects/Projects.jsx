import { useEffect, useState } from 'react';
import { getProjectsFromLocalStorage, requestProjects } from '../../services/database/repository';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectImg from './../../assets/icons/project.png';
import './Projects.css';
import Loading from '../Loading/Loading';

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
                <h1 className="main-title">Projetos Desenvolvidos</h1>
                <img className="icon projects-img" src={ProjectImg} />
                <p className="text-description">
                    Aqui estão alguns projetos pessoais e outros propostos em aulas. São projetos <span className='texto-destaque'>Backend, Frontend e FullSatck</span>. Alguns têm responsividade
                    para dar suporte a diversos tamanhos de tela, incluindo dispositivos mobile.
                </p >
                <p className="text-description">Clique em uns dos cards abaixo para  navegar entre os projetos e encontrar mais detalhes,
                    incluindo o link do repositório no GitHub e o link do deploy, quando presente!
                </p>
                <p className="text-description"> As principais tecnologias são <span className='texto-destaque'>JavaScript, React, Node, HTML e CSS</span>.
                </p>
            </article>
            <div className="projects-cards">
                {!!projects ?
                    projects.map((project) => {
                        return (
                            <ProjectCard key={project.id} project={project} />
                        )
                    })
                    :
                    <Loading />
                }
            </div>
        </section>
    )
}