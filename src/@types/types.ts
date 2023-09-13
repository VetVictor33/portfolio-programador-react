import { StructuredText } from "datocms-structured-text-utils"
import { ResponsiveImageType } from "react-datocms/image"

export type AllProjectsQuery = {
  allProjects: Project[]
}

export type StructuredTextType = StructuredText

export type Project = {
  id: number,
  title: string,
  mobile: boolean,
  image: { responsiveImage: ResponsiveImageType }
  keywords: string,
  mobileImage: { responsiveImage: ResponsiveImageType }
  githubLink: string,
  deployLink: string
  description: StructuredText
}

export type ComplementaryEducationQuery = {
  allComplementaryEducations: ComplementaryEducation[]
}

export type ComplementaryEducation = {
  id: number,
  title: string,
  data: string,
  description: StructuredText
}

export type HomeInfoQuery = {
  allSiteinfos: [{
    homeProfileImg: { responsiveImage: ResponsiveImageType }
    presentation: StructuredText,
  }]
}

export type ResumeInfoQuery = {
  allSiteinfos: [{
    aboutFirstParagraph: StructuredText
    aboutSecondParagraph: StructuredText
  }]
}

export type ContactInfoQuery = {
  allSiteinfos: [{
    contactProfileImage: { responsiveImage: ResponsiveImageType },
    contactMessage: StructuredText
  }]
}