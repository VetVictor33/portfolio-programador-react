import { useQuery } from 'graphql-hooks';
import { useEffect, useState } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms/image';
import { StructuredText } from 'react-datocms/structured-text';
import Form from '../../components/Form/Form';
import SocialNavbar from '../../components/SocialNavbar/SocialNavbar';
import { CONTACT_INFO_QUERY } from '../../services/datoCMS/querys';
import './Contact.sass';
import { ContactInfoQuery, StructuredTextType } from '../../@types/types';

export default function Contact() {
    const { data: contactInfo } = useQuery<ContactInfoQuery>(CONTACT_INFO_QUERY);
    const [contactProfileImage, setContactProfileImage] = useState<ResponsiveImageType>(null!);
    const [contactMessage, setContactMessage] = useState<StructuredTextType>(null!);

    useEffect(() => {
        if (contactInfo) {
            const info = contactInfo.allSiteinfos[0];
            setContactProfileImage(info.contactProfileImage.responsiveImage);
            setContactMessage(info.contactMessage);
        }
    }, [contactInfo])
    return (
        <div className='Contact'>
            <div className='content-box'>
                <div className='presentation'>
                    <div className='profile-img'>
                        {contactProfileImage && <Image data={contactProfileImage} />}
                    </div>
                    <div className='text-box'>
                        {contactMessage && <StructuredText data={contactMessage} />}
                    </div>
                </div>
                <Form />
            </div>
            <SocialNavbar />
        </div>
    )
}