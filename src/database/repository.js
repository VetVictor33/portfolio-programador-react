import projects from './projects'
import complementaryEducation from './complementaryEducation'


const reversedProjects = [...projects].reverse();
const reversedCompEdu = [...complementaryEducation].reverse();

export const getAllProjects = () => {
    return reversedProjects;
}

export const getAllCompEdu = () => {
    return reversedCompEdu;
}

export function getMobileSrc(id) {
    const project = getAllProjects().find((project) => project.id === +id);
    let src = project.imgSrc;
    src += `-mobile`;
    return src
}

export function getKeywords(id) {
    const project = getAllProjects().find(projects => projects.id === +id);
    const keywords = project.keywords;
    return keywords
}
