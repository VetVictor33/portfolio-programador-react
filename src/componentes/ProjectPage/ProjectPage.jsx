import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ImageComponent from '../ImageComponent/ImageComponent';
import './ProjectPage.css'
import { getAllProjects, getKeywords, getMobileSrc } from '../../database/repository'
import { animateScroll } from 'react-scroll';

export default function ProjectPage() {

    animateScroll.scrollToTop();

    const { projectId } = useParams();
    const projects = getAllProjects();
    const project = projects.find((project) => project.id === +projectId)

    const hasMobile = project.mobile;
    const mobileSrc = getMobileSrc(project.id);

    const hasDebloy = project.deploy;

    const keywords = getKeywords(project.id)

    const preveiusProject = project.id >= (projects.length) ? 1 : (project.id) + 1;
    const nextProject = project.id > 1 ? (project.id) - 1 : projects.length;

    return (
        <div className='ProjectPage'>
            <a href={project.link} target="_blank">
                <ImageComponent imgSrc={project.imgSrc} keywords={project.keywords} />
            </a>
            <div className='bts'>
                <Link className='bt bt-left' to={`/project/${preveiusProject}`}></Link>
                <p className='main-title'>{project.title}</p>
                <Link className='bt bt-right' to={`/project/${nextProject}`}></Link>
            </div>
            <div className='project-keywords'>
                {keywords && keywords.map(keyword => {
                    return (
                        <p className='project-keyword' key={`${keyword}-${project.id}`}>{keyword}</p>
                    )
                })}
            </div>
            <p className='text-description'>{project.description}</p>
            {!!hasDebloy && <a href={hasDebloy} className='main-title' target='_blank'> Visitar o site </a>}
            {hasMobile &&
                <div className='mobile'>
                    <h2>Idealizado para mobile:</h2>
                    <a href={project.link} target="_blank">
                        <ImageComponent imgSrc={mobileSrc} mobile={true} />
                    </a>
                </div>
            }
        </div>
    )
}