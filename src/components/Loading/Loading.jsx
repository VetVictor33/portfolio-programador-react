import { useEffect, useState } from 'react'
import './Loading.css'
import { getProjectsFromStorage, requestProjects } from '../../services/database/repository';
import Refresh from '../../assets/icons/refresh.svg'
import { useRef } from 'react';

export default function Loading({ refresh }) {
    const [timeOut, setTimeOut] = useState(false);
    const refreshImg = useRef();

    async function getProjectsFromApi() {
        const projects = await requestProjects();
        if (!projects) return
        refresh(projects);
    }

    setTimeout(() => {
        if (!getProjectsFromStorage()) {
            getProjectsFromApi();
        }
    }, 1500);

    setTimeout(() => {
        setTimeOut(true);
    }, 3000);

    let blocked = false;
    function addRotateEvent() {
        if (blocked) return
        blocked = true;
        refreshImg.current.classList.add('rotate');
    }
    function removeRotateEvent() {
        blocked = false;
        refreshImg.current.classList.remove('rotate');
    }
    useEffect(() => {
        if (refreshImg.current) {
            refreshImg.current.addEventListener('mouseover', function () {
                addRotateEvent();
                setTimeout(function () {
                    if (refreshImg.current) removeRotateEvent();
                }, 6000);
            });

            return () => {
                if (refreshImg.current) {
                    refreshImg.current.removeEventListener('mouseover', addRotateEvent);
                }
            }
        }

    }, [timeOut])
    return (
        <div className="Loading">
            <div className='bar-container'>
                <div className='bar upper-bar'></div>
                {timeOut && <img ref={refreshImg} className='refresh' src={Refresh} onClick={() => { getProjectsFromApi() }} />}
                <div className='bar lower-bar' />
            </div>
        </div>
    )
}
