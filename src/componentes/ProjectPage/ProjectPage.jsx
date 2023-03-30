import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { projectsMock, getMobileSrc } from '../../mock'
import ImageComponent from '../ImageComponent/ImageComponent';
import './ProjectPage.css'

export default function ProjectPage() {

    const projectId = useParams();
    const projectIndex = projectId.projectId;
    const project = projectsMock.find((project) => project.id == projectIndex)

    const hasMobile = project.mobile;
    const mobileSrc = getMobileSrc(project.id);

    const preveiusProject = project.id >= (projectsMock.length) ? 1 : (project.id) + 1;
    const nextProject = project.id > 1 ? (project.id) - 1 : projectsMock.length;

    return (
        <div className='ProjectPage'>
            <div className='bts'>
                <Link className='bt bt-left' to={`/project/${preveiusProject}`}></Link>
                <a href={project.link} target="_blank">
                    <ImageComponent imgSrc={project.imgSrc} />
                </a>
                <Link className='bt bt-right' to={`/project/${nextProject}`}></Link>
            </div>
            <p className='main-title'>{project.title}</p>
            <p className='text-description'>{project.description}</p>
            {hasMobile &&
                <div className='mobile'>
                    <h2>Esse projeto também foi pensado para mobile!</h2>
                    <h2> Dá uma olhada em como ficou: </h2>
                    <a href={project.link} target="_blank">
                        <ImageComponent imgSrc={mobileSrc} />
                    </a>
                </div>
            }
        </div>
    )
}