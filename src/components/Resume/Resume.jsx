import './Resume.css'
import TextImg from '../../assets/icons/coding.png'
import Search from '../../assets/icons/search.png'
import Html from '../../assets/icons/html-5.png'
import Css from '../../assets/icons/css-3.png'
import Js from '../../assets/icons/js.png'
import { RESUME_INFO_QUERY } from '../../services/datoCMS/querys';
import { useQuery } from 'graphql-hooks'
import { useState } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import { useEffect } from 'react'


export default function Resume() {
    const { data: resumeInfo } = useQuery(RESUME_INFO_QUERY);
    const [firstParagraph, setFirstParagraph] = useState(null);
    const [secondParagraph, setSecondParagraph] = useState(null);

    useEffect(() => {
        if (resumeInfo) {
            const info = resumeInfo.allSiteinfos[0];
            setFirstParagraph(info.aboutFirstParagraph);
            setSecondParagraph(info.aboutSecondParagraph);
        }
    }, [resumeInfo])
    return (
        <section className="Resume">
            <h1 className="main-title">Quem sou eu</h1>
            <img className="icons icon icon-glass" src={Search} />
            <div className='first-paragraph-from-cms'>
                {resumeInfo && <StructuredText data={firstParagraph} />}
            </div>
            <div className="icons">
                <img className="icon icon-small" src={Html} />
                <img className="icon icon-small" src={Css} />
                <img className="icon icon-small" src={Js} />
            </div>
            <div className="text-with-icon">
                <div className="about-img"><img src={TextImg} alt="" /></div>
                <div className='second-paragraph-from-cms'>
                    {resumeInfo && <StructuredText data={secondParagraph} />}
                </div>
            </div>
        </section>
    )
}