import { useQuery } from 'graphql-hooks';
import { useEffect, useState } from 'react';
import { StructuredText } from 'react-datocms/structured-text';
import { Project, StructuredTextType } from '../../@types/types';
import { getProjectsFromStorage, setProjectsInStorage } from '../../services/database/repository';
import { ALL_PROJECTS_QUERY } from '../../services/datoCMS/querys';
import Loading from '../Loading/Loading';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectImg from './../../assets/icons/project.png';
import './Projects.sass';

type Props = {
    presentationData: StructuredTextType
}

export default function Projects({ presentationData }: Props) {
    const [projects, setProjects] = useState<Project[]>(null!);
    const [presentation, setPresentation] = useState<StructuredTextType>(null!);
    const { data: projectData } = useQuery(ALL_PROJECTS_QUERY);

    useEffect(() => {
        if (projectData) {
            const projectsData = projectData.allProjects;
            setProjectsInStorage(projectsData);
            setProjects(getProjectsFromStorage());
        }
        setPresentation(presentationData)
    }, [projectData, presentationData])


    return (
        <section className="Projects">
            <article className="projetcs-introduction">
                <h1 className="main-title">Projetos Desenvolvidos</h1>
                <img className="icon projects-img" src={ProjectImg} />
                <div className='presentation-from-cms'>
                    {presentation && <StructuredText data={presentation} />}
                </div>
            </article>
            <div className="projects-cards">
                {!!projects ?
                    projects.map((project) => {
                        return (
                            <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />
                        )
                    })
                    :
                    <Loading />
                }
            </div>
        </section>
    )
}