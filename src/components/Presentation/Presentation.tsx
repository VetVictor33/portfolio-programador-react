import { Image, ResponsiveImageType } from 'react-datocms/image'
import './Presentation.sass'
import { useEffect, useState } from 'react'

type Props = {
    profileImg: { responsiveImage: ResponsiveImageType }
}

export default function Presentation({ profileImg }: Props) {
    const [profileImage, setProfileImage] = useState(null)
    useEffect(() => {
        setProfileImage(profileImg)
    }, [profileImg])

    return (
        <section className="Presentation">
            <article className="presentation-text">
                <h1>Victor Feliciano</h1>
                <h2>programador full stack</h2>
                <p>enxergando o mundo pelo código fonte</p>
            </article>
            <div className="presentation-img">
                {!!profileImage &&
                    <Image data={profileImg?.responsiveImage} />}
            </div>
        </section>
    )
}