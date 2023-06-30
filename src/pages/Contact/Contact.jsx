import { useQuery } from 'graphql-hooks';
import { useEffect, useState } from 'react';
import { Image } from 'react-datocms/image';
import { StructuredText } from 'react-datocms/structured-text';
import Form from '../../components/Form/Form';
import SocialNavbar from '../../components/SocialNavbar/SocialNavbar';
import { CONTACT_INFO_QUERY } from '../../services/datoCMS/querys';
import './Contact.css';
import axios from '../../services/axios/axios';

export default function Contact() {
    const { data: contactInfo } = useQuery(CONTACT_INFO_QUERY);
    const [contactProfileImage, setContactProfileImage] = useState(null);
    const [contactMessage, setContactMessage] = useState(null);

    async function wakeUpSMTPServer() {
        await axios.get('/');
    }

    useEffect(() => {
        wakeUpSMTPServer();
        if (contactInfo) {
            const info = contactInfo.allSiteinfos[0];
            setContactProfileImage(info.contactProfileImage);
            setContactMessage(info.contactMessage);
        }
    }, [contactInfo])
    return (
        <div className='Contact'>
            <div className='content-box'>
                <div className='presentation'>
                    <div className='profile-img'>
                        {contactProfileImage && <Image data={contactProfileImage?.responsiveImage} />}
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