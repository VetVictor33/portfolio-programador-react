export const ALL_PROJECTS_QUERY = `query AllProjects{
        allProjects {
          id
    title
    mobile
    image {
      responsiveImage(fallbackLocales: en, locale: en, sizes: "") {
        alt
        base64
        aspectRatio
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    keywords
    mobileImage {
      responsiveImage(fallbackLocales: en, locale: en, sizes: "") {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    githubLink
    deployLink
    description {
      blocks
      links
      value
    }
  }
}`
export const COMPLEMENTARY_EDUCATION = `query MyQuery {
  allComplementaryEducations {
    id
    title
    data
    description {
      blocks
      links
      value
    }
  }
}`