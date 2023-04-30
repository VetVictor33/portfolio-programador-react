import { useNavigate } from 'react-router-dom';
import ImageComponent from '../ImageComponent/ImageComponent';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
    const { id, imgSrc, title } = project;
    const keywords = project.keywords;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/project/${id}`);
    }

    return (
        <div className='ProjectCard'>
            <div>
                <ImageComponent imgSrc={imgSrc} keywords={project.keywords} handleNavigate={handleNavigate} />
                <h2 onClick={handleNavigate}>{title}</h2>
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