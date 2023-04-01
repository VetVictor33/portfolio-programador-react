import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ImageComponent from '../ImageComponent/ImageComponent';
import './ProjectPage.css'
import { getAllProjects, getMobileSrc } from '../../database/repository'
import { animateScroll } from 'react-scroll';

export default function ProjectPage() {

    animateScroll.scrollToTop();

    const { projectId } = useParams();
    const projects = getAllProjects();
    const project = projects.find((project) => project.id === +projectId)

    const hasMobile = project.mobile;
    const mobileSrc = getMobileSrc(project.id);

    const preveiusProject = project.id >= (projects.length) ? 1 : (project.id) + 1;
    const nextProject = project.id > 1 ? (project.id) - 1 : projects.length;

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