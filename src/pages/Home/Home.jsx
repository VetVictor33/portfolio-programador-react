import Presentation from "../../components/Presentation/Presentation";
import SocialNavbar from "../../components/SocialNavbar/SocialNavbar";
import Projects from "../../components/Projects/Projects";
import { useQuery } from "graphql-hooks";
import { useState } from "react";
import { HOME_INFO_QUERY } from "../../services/datoCMS/querys";
import { useEffect } from "react";

export default function Home() {
    const [profileImg, setProfileImg] = useState(null);
    const [presentation, setPresentation] = useState(null);
    const { data: homeInfo } = useQuery(HOME_INFO_QUERY);

    useEffect(() => {
        if (homeInfo) {
            const info = homeInfo.allSiteinfos[0];
            setProfileImg(info.homeProfileImg);
            setPresentation(info.presentation);
        }
    }, [homeInfo])

    return (
        <>
            <Presentation profileImg={profileImg} />
            <SocialNavbar />
            <Projects presentationData={presentation} />
        </>
    )
}