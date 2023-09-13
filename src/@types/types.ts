import { ResponsiveImageType } from "react-datocms/image"

export type AllProjectsQuery = {
  allProjects: Project[]
}

export type StructuredTextType = {
  blocks?: any,
  links?: any,
  value?: any,
}

export type Project = {
  id: number,
  title: string,
  mobile: boolean,
  image: ResponsiveImageType
  keywords: string,
  mobileImage: ResponsiveImageType
  githubLink: string,
  deployLink: string
  description: StructuredTextType
}

export type ComplementaryEducationQuery = {
  allComplementaryEducations: ComplementaryEducation[]
}

export type ComplementaryEducation = {
  id: number,
  title: string,
  data: string,
  description: {
    blocks?: any,
    links?: any,
    value?: any,
  }
}

export type HomeInfoQuery = {
  allSiteinfos: {
    homeProfileImg: ResponsiveImageType
  },
  presentation: StructuredTextType
}

export type ResumeInfoQuery = {
  allSiteinfos: [{
    aboutFirstParagraph: StructuredTextType
    aboutSecondParagraph: StructuredTextType
  }]
}

export type ContactInfoQuery = {
  allSiteinfos: {
    contactProfileImage: ResponsiveImageType
  }
  contactMessage: StructuredTextType
}