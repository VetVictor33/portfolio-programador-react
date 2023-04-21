import LoadingImg from '../../assets/loading.png'
import './Loading.css'

export default function Loading() {
    return (
        <div className="Loading">
            <h1>Carregando...</h1>
            <div className='bar-container'>
                <div className='bar' />
            </div>
        </div>
    )
}