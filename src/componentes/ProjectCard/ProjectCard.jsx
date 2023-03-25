import { Link } from 'react-router-dom';
import './ProjectCard.css'

export default function ProjectCard(prop) {
    const { id, imgSrc, title } = prop.value;
    return (
        <div className='ProjectCard'>
            <div className='card-img' style={{ backgroundImage: `url('${imgSrc}')` }}></div>
            <Link to={`/project/${id}`}><h2>{title}</h2></Link>
        </div>
    )
}