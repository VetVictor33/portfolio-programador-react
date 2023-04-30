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
            <h1>Carregando...</h1>
            <div className='bar-container'>
                <div className='bar' />
            </div>
            {timeOut && <strong className='apologies'>Sinto muito... parece que houve um erro ao conectar com o banco de dados. <a href='/'>Recarregue a página</a> ou volte mais tarde</strong>}
        </div>
    )
}
