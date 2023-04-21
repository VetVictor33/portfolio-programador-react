
export async function requestProjects() {
    const url = `https://sleepy-bull-frock.cyclic.app/projects`;
    const response = await fetch(url);
    const data = await response.json();

    const dataStringfied = JSON.stringify(data.reverse());
    localStorage.setItem('projects', dataStringfied);
    return data.reverse();
}

export async function requestComEdu() {
    const url = `https://sleepy-bull-frock.cyclic.app/compelmentary-education`;
    const response = await fetch(url);
    const data = await response.json();

    const dataStringfied = JSON.stringify(data.reverse());
    localStorage.setItem('compEdu', dataStringfied);
    return data.reverse();
}

export const getProjectsFromLocalStorage = () => JSON.parse(localStorage.getItem('projects'));

export const getCompEduFromLocalStorage = () => JSON.parse(localStorage.getItem('compEdu'));

export async function getMobileSrc(id) {
    let projects = getProjectsFromLocalStorage();
    if (!projects) {
        projects = await requestProjects();
    }
    const project = projects().find((project) => project.id === +id);
    let src = project.imgSrc;
    src += `-mobile`;
    return src
}

export async function getKeywords(id) {
    let projects = getProjectsFromLocalStorage();
    if (!projects) {
        projects = await requestProjects();
    }
    const project = projects.find(projects => projects.id === +id);
    const keywords = project.keywords;
    return keywords
}