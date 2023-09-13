
import { useQuery } from "graphql-hooks";
import { useEffect, useState } from "react";
import { ResponsiveImageType } from "react-datocms/image";
import { HomeInfoQuery, StructuredTextType } from "../../@types/types";
import Presentation from "../../components/Presentation/Presentation";
import Projects from "../../components/Projects/Projects";
import SocialNavbar from "../../components/SocialNavbar/SocialNavbar";
import { HOME_INFO_QUERY } from "../../services/datoCMS/querys";

export default function Home() {
    const [profileImg, setProfileImg] = useState<ResponsiveImageType>(null!);
    const [presentation, setPresentation] = useState<StructuredTextType>(null!);
    const { data: homeInfo } = useQuery<HomeInfoQuery>(HOME_INFO_QUERY);

    useEffect(() => {
        if (homeInfo) {
            const info = homeInfo.allSiteinfos[0];
            setProfileImg(info.homeProfileImg.responsiveImage);
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