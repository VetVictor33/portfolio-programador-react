export async function requestProjects() {
    const url = `https://sleepy-bull-frock.cyclic.app/projects`;
    const response = await fetch(url);
    const data = await response.json();

    const dataStringfied = JSON.stringify(data.reverse());
    localStorage.setItem('projects', dataStringfied);
    return data;
}

export async function requestComEdu() {
    const url = `https://sleepy-bull-frock.cyclic.app/complementary-education`;
    const response = await fetch(url);
    const data = await response.json();

    const dataStringfied = JSON.stringify(data.reverse());
    localStorage.setItem('compEdu', dataStringfied);
    return data;
}

export const getProjectsFromLocalStorage = () => JSON.parse(localStorage.getItem('projects'));

export const getCompEduFromLocalStorage = () => JSON.parse(localStorage.getItem('compEdu'));

export function getSingleProject(id) {
    const projects = getProjectsFromLocalStorage();
    if (!projects) return
    const projectsLength = projects.length;
    const project = projects.find((project) => project.id === +id);
    return [project, projectsLength]
}

export function getMobileSrc(id) {
    const projects = getProjectsFromLocalStorage();
    if (!projects) return
    const project = projects.find((project) => +project.id === +id);
    let src = project.imgSrc;
    src += `-mobile`;
    return src
}

export function getKeywords(id) {
    const projects = getProjectsFromLocalStorage();
    if (!projects) return
    const project = projects.find(projects => projects.id === +id);
    const keywords = project.keywords;
    return keywords
}