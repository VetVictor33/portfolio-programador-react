import { StructuredText } from 'react-datocms/structured-text';
import { Navigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import { getProjectsFromStorage } from '../../services/database/repository';
import './ProjectPage.sass';

import Arrow from '../../assets/icons/arrow.svg';

export default function ProjectPage() {
    const { projectId } = useParams();

    const projects = getProjectsFromStorage();
    if (!projects || !projectId) {
        return <Navigate to={'/'} />
    }

    const lastProjectId = projects.length - 1;
    const project = projects[+projectId];
    const keywords = project.keywords.split(', ')

    const nextProject = +projectId < lastProjectId ? (+projectId) + 1 : 0;
    const previousProject = +projectId > 0 ? (+projectId) - 1 : lastProjectId;

    return (
        <div className='ProjectPage'>
            {project && <>
                <ImageComponent image={project.image} link={project.githubLink} />
                <div className='bts'>
                    <Link className='bt bt-left' to={`/project/${previousProject}`} preventScrollReset={true}
                        style={{ backgroundImage: `url(${Arrow})` }}
                    ></Link>
                    <p className='main-title'>{project.title}</p>
                    <Link className='bt bt-right' to={`/project/${nextProject}`} preventScrollReset={true}
                        style={{ backgroundImage: `url(${Arrow})` }}
                    ></Link>
                </div>
                <div className='project-keywords'>
                    {keywords.map(keyword => {
                        return (
                            <p className='project-keyword' key={`${keyword}-${project.id}`}>{keyword}</p>
                        )
                    })}
                </div>
                <div className='description-from-cms'>
                    <StructuredText data={project.description} />
                </div>
                {!!project?.deployLink && <a href={project.deployLink} className='main-title' target='_blank'> Visitar o site </a>}
                {project.mobile &&
                    <div className='mobile'>
                        <h2>Idealizado para mobile:</h2>
                        <ImageComponent image={project.mobileImage} link={project.githubLink} mobile={true} />
                    </div>
                }
            </>}
        </div>
    )
}