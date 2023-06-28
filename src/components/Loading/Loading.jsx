import './Loading.css';

export default function Loading({ setProjects }) {
    return (
        <div className="Loading">
            <h1>Carregando...</h1>
            <div className='bar-container'>
                <div className='bar' />
            </div>
        </div>
    )
}
