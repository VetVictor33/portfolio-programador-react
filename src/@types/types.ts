export type AllProjectsQuery = {
  allProjects: Project[]
}

type ResponsiveImage = {
  alt?: string,
  base64?: any,
  aspectRatio?: any,
  bgColor?: any,
  height?: any,
  sizes?: any,
  src?: any,
  srcSet?: any,
  title?: any,
  webpSrcSet?: any,
  width?: any
}

type StructuredText = {
  blocks?: any,
  links?: any,
  value?: any,
}

export type Project = {
  id: number,
  title: string,
  mobile: boolean,
  image: ResponsiveImage
  keywords: string,
  mobileImage: ResponsiveImage
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
  description: {
    blocks?: any,
    links?: any,
    value?: any,
  }
}

export type HomeInfoQuery = {
  allSiteinfos: {
    homeProfileImg: ResponsiveImage
  },
  presentation: StructuredText
}

export type ResumeInfoQuery = {
  allSiteinfos: {
    aboutFirstParagraph: StructuredText
    aboutSecondParagraph: StructuredText
  }
}

export type ContatInfoQuery = {
  allSiteinfos: {
    contactProfileImage: ResponsiveImage
  }
  contactMessage: StructuredText
}