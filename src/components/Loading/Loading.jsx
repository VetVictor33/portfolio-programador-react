import { useEffect, useState } from 'react'
import './Loading.css'
import { getProjectsFromStorage, requestProjects } from '../../services/database/repository';

export default function Loading({ setProjects }) {
    const [timeOut, setTimeOut] = useState(false);

    async function getProjectsFromApi() {
        const projects = await requestProjects();
        setProjects(projects);
    }

    setTimeout(() => {
        if (!getProjectsFromStorage()) {
            getProjectsFromApi();
        }
    }, 1500);

    setTimeout(() => {
        setTimeOut(true);
    }, 10000);

    useEffect(() => { }, [])
    return (
        <div className="Loading">
            <div className='bar-container'>
                <div className='bar upper-bar' />
                <div className='bar lower-bar' />
            </div>
        </div>
    )
}
