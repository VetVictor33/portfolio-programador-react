import { Image } from 'react-datocms/image';
import './ImageComponent.css'


export default function ImageComponent({ image, handleNavigate, link }) {
    const pathname = window.location.pathname;

    return (
        <div className='ImageComponent' onClick={handleNavigate}>
            <a href={link} target='_blank'>
                <Image className="card-img" data={image.responsiveImage} />
                {pathname !== '/' && <p className='tooltip'>GitHub</p>}
            </a>
        </div>
    )

}