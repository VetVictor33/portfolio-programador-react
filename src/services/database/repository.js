import { getItem, setItem } from '../../utils/storage';

export function setProjectosInStorage(projects) {
    const dataStringfied = JSON.stringify(projects)
    setItem('projects', dataStringfied)
}

<<<<<<< HEAD
export async function requestComEdu() {
    try {
        const response = await api.get('/complementary-education');
        const { data } = response;

        const dataStringfied = JSON.stringify(data.reverse());
        setItem('compEdu', dataStringfied);
        return data;
    } catch (error) {
        return null;
    }
}

export const getProjectsFromStorage = () => JSON.parse(getItem('projects'));

export const getCompEduFromStorage = () => JSON.parse(getItem('compEdu'));

export function getSingleProject(id) {
    const projects = getProjectsFromStorage();
    if (!projects) return
    const projectsLength = projects.length;
    const project = projects.find((project) => project.id === +id);
    return [project, projectsLength]
}

export function getMobileSrc(id) {
    const projects = getProjectsFromStorage();
    if (!projects) return
    const project = projects.find((project) => +project.id === +id);
    let src = project.imgSrc;
    src += `-mobile`;
    return src
}

export function getKeywords(id) {
    const projects = getProjectsFromStorage();
    if (!projects) return
    const project = projects.find(projects => projects.id === +id);
    const keywords = project.keywords;
    return keywords
}
=======
export const getProjectsFromStorage = () => JSON.parse(getItem('projects'));
>>>>>>> SettingCMS
