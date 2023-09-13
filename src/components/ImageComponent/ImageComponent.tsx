import { Image, ResponsiveImageType } from 'react-datocms/image';
import './ImageComponent.sass'


type Props = {
    image: { responsiveImage: ResponsiveImageType },
    handleNavigate: () => void,
    link: string
}

export default function ImageComponent({ image, handleNavigate, link }: Props) {
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