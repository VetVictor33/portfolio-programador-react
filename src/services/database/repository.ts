import { Project } from '../../@types/types';
import { getItem, setItem } from '../../utils/storage';

export function setProjectsInStorage(projects: Project) {
    const dataStringfied = JSON.stringify(projects)
    setItem('projects', dataStringfied)
}

export const getProjectsFromStorage = () => JSON.parse(getItem('projects')!);
