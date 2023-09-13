import { useNavigate } from 'react-router-dom';
import ImageComponent from '../ImageComponent/ImageComponent';
import './ProjectCard.sass';
import { Project } from '../../@types/types';

type Props = {
    project: Project,
    index: number
}

export default function ProjectCard({ project, index }: Props) {
    const { id, title, image } = project;
    const keywords = (project.keywords).split(',');
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/project/${index}`);
    }

    return (
        <div className='ProjectCard'>
            <div>
                <ImageComponent image={image.responsiveImage} handleNavigate={handleNavigate} />
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