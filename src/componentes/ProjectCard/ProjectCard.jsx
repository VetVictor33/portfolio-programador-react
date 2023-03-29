import { Link } from 'react-router-dom';
import './ProjectCard.css'

export default function ProjectCard(prop) {
    const { id, imgSrc, title } = prop.value;
    return (
        <div className='ProjectCard'>
            <div>

                <Link to={`/project/${id}`}>
                    <img className='card-img' src={imgSrc} />
                    <h2>{title}</h2>
                </Link>
            </div>
        </div>
    )
}