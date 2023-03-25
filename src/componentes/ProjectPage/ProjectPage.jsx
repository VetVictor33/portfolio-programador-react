import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { projectsMock } from '../../mock';
import './ProjectPage.css'

export default function ProjectPage() {
    const params = useParams();
    const projectIndex = params.project;
    const project = projectsMock[projectIndex - 1];

    const nextProject = project.id >= ((projectsMock.length) - 1) ? 1 : (project.id) + 1;
    const preveiusProject = project.id != 1 ? (project.id) - 1 : projectsMock.length;
    return (
        <div className='ProjectPage'>
            <img src={`.${project.imgSrc}`} alt="projeto" />
            <p>{project.title}</p>
            <p>{project.description}</p>
            <div>
                <Link className='bt' to={`/project/${preveiusProject}`}>Anterior</Link>
                <Link className='bt' to={`/project/${nextProject}`}>Proximo</Link>
            </div>
        </div>
    )
}