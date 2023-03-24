import './ProjectCard.css'

export default function ProjectCard(prop) {
    const { imgSrc, title, description } = prop.value
    return (
        <div className='ProjectCard'>
            <div className='card-img' style={{ backgroundImage: `url('${imgSrc}')` }}></div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}