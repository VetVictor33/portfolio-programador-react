import { getKeywords } from '../../database/repository';
import { arrayImgs } from '../../imports';
import './ImageComponent.css'


export default function ImageComponent({ imgSrc, mobile }) {
    const pathname = window.location.pathname;
    let src = arrayImgs.find(img => img.indexOf('no_image_available') !== -1);

    arrayImgs.forEach((img) => {
        if (mobile) {
            if (img.indexOf(imgSrc) !== -1) {
                src = img;
            }
        } else if (img.indexOf(imgSrc) !== -1 && img.indexOf('mobile') == -1) {
            src = img;
        }
    })

    return (
        <div className='ImageComponent'>
            <img className='card-img' src={src} alt='Projeto' />
            {pathname !== '/' && <p className='tooltip'>GitHub</p>}
        </div>
    )

}