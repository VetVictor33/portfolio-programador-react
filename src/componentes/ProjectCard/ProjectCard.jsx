import { Link } from 'react-router-dom';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import './ProjectCard.css'

export default function ProjectCard({ project }) {
    const { id, imgSrc, title } = project;

    const handleScrollToTop = () => {
        animateScroll.scrollToTop()
    }
    return (
        <div className='ProjectCard'>
            <div>

                <Link to={`/project/${id}`} onClick={handleScrollToTop}>
                    <img className='card-img' src={imgSrc} />
                    <h2>{title}</h2>
                </Link>
            </div>
        </div>
    )
}