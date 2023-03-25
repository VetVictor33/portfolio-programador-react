import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { projectsMock } from '../../mock';
import './ProjectPage.css'

export default function ProjectPage() {
    const params = useParams();
    const projectIndex = params.project;
    const project = projectsMock[projectIndex - 1];

    const nextProject = project.id >= (projectsMock.length) ? 1 : (project.id) + 1;
    const preveiusProject = project.id != 1 ? (project.id) - 1 : projectsMock.length;
    return (
        <div className='ProjectPage'>
            <a href={project.link} >
                <img src={`.${project.imgSrc}`} alt="projeto" />
            </a>
            <div className='bts'>
                <Link className='bt bt-left' to={`/project/${preveiusProject}`}></Link>
                <Link className='bt bt-right' to={`/project/${nextProject}`}></Link>
            </div>
            <p className='main-title'>{project.title}</p>
            <p className='text-description'>{project.description}</p>
        </div>
    )
}