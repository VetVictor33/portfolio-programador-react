import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import { getKeywords, getMobileSrc, getSingleProject, requestProjects } from '../../database/repository';
import './ProjectPage.css';

export default function ProjectPage() {
    animateScroll.scrollToTop();
    let { projectId } = useParams();
    const [request, setRequest] = useState(null);

    let response = getSingleProject(+projectId);

    useEffect(() => { }, [request])

    if (!response) {
        async function sendRequest() {
            await requestProjects();
            setRequest(true);
        }
        sendRequest();
        return (
            <> Waiting request ...</>
        )
    }


    if (!response[0]) {
        projectId = 16;
        response = getSingleProject(projectId);
    }

    const project = response[0];
    const projectsLength = response[1];


    const hasMobile = project.mobile;
    const mobileSrc = getMobileSrc(+projectId);
    const hasDebloy = project.deploy;
    const keywords = getKeywords(+projectId);

    const preveiusProject = project.id >= (projectsLength) ? 1 : (project.id) + 1;
    const nextProject = project.id > 1 ? (project.id) - 1 : projectsLength;
    return (
        <div className='ProjectPage'>
            {project && <>
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
            </>}
        </div>
    )
}