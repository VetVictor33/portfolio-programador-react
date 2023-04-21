import { Link } from 'react-router-dom';
import ImageComponent from '../ImageComponent/ImageComponent';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
    const { id, imgSrc, title } = project;
    const keywords = project.keywords;

    return (
        <div className='ProjectCard'>
            <div>
                <Link to={`/project/${id}`}>
                    <ImageComponent imgSrc={imgSrc} keywords={project.keywords} />
                    <h2>{title}</h2>
                </Link>
            </div>
            <div className='card-keywords'>
                {keywords && keywords.map(keyword => {
                    return (
                        <p className='card-keyword' key={`${keyword}-${id}`}>{keyword}</p>
                    )
                })}
            </div>
        </div>
    )
}