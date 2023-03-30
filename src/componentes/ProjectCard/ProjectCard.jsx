import { Link } from 'react-router-dom';
import ImageComponent from '../ImageComponent/ImageComponent';
import './ProjectCard.css'

export default function ProjectCard({ project }) {
    const { id, imgSrc, title } = project;
    return (
        <div className='ProjectCard'>
            <div>
                <Link to={`/project/${id}`}>
                    <ImageComponent imgSrc={imgSrc} />
                    <h2>{title}</h2>
                </Link>
            </div>
        </div>
    )
}