import { getItem, setItem } from '../../utils/storage';

export function setProjectosInStorage(projects) {
    const dataStringfied = JSON.stringify(projects)
    setItem('projects', dataStringfied)
}

export const getProjectsFromStorage = () => JSON.parse(getItem('projects'));