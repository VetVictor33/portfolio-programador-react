import { getItem, setItem } from '../../utils/storage';
import api from '../api/axios'

export async function requestProjects() {
    try {
        const response = await api.get('/projects');
        const { data } = response;

        const dataStringfied = JSON.stringify(data.reverse());
        setItem('projects', dataStringfied);
        return data;
    } catch (error) {
        return null;
    }
}

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