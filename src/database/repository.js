import projects from './projects'
import complementaryEducation from './complementaryEducation'

export function getAllProjects() {
    return projects.reverse()
}

export function getAllCompEdu() {
    return complementaryEducation.reverse()
}

export function getMobileSrc(id) {
    const project = getAllProjects().find((project) => project.id === +id);
    let src = project.imgSrc;
    src += `-mobile`;
    return src
}