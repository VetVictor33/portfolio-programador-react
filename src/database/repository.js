import projects from './projects'
import complementaryEducation from './complementaryEducation'

export const getAllProjects = () => {
    const reversed = projects.reverse()
    return reversed
}

export const getAllCompEdu = () => {
    const reversed = complementaryEducation.reverse()
    return reversed
}

export function getMobileSrc(id) {
    const project = getAllProjects().find((project) => project.id === +id);
    let src = project.imgSrc;
    src += `-mobile`;
    return src
}