import { StructuredText } from 'react-datocms/structured-text';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import { getProjectsFromStorage } from '../../services/database/repository';
import './ProjectPage.css';

export default function ProjectPage() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const projects = getProjectsFromStorage();
    if (!projects) navigate('/');

    const lastProjectId = projects.length - 1;
    const project = projects[+projectId];
    const keywords = project.keywords.split(', ')

    const nextProject = +projectId < lastProjectId ? (+projectId) + 1 : 0;
    const preveiusProject = +projectId > 0 ? (+projectId) - 1 : lastProjectId;

    return (
        <div className='ProjectPage'>
            {project && <>
                <ImageComponent image={project.image} link={project.githubLink} />
                <div className='bts'>
                    <Link className='bt bt-left' to={`/project/${preveiusProject}`} preventScrollReset={true}></Link>
                    <p className='main-title'>{project.title}</p>
                    <Link className='bt bt-right' to={`/project/${nextProject}`} preventScrollReset={true}></Link>
                </div>
                <div className='project-keywords'>
                    {keywords.map(keyword => {
                        return (
                            <p className='project-keyword' key={`${keyword}-${project.id}`}>{keyword}</p>
                        )
                    })}
                </div>
                <StructuredText data={project.description} />
                {!!project.deployLink && <a href={deployLink} className='main-title' target='_blank'> Visitar o site </a>}
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