import { useEffect, useState } from 'react'
import './Loading.css'

export default function Loading() {
    const [timeOut, setTimeOut] = useState(false);

    setTimeout(() => setTimeOut(true), 13000);
    return (
        <div className="Loading">
            <h1>Carregando...</h1>
            <div className='bar-container'>
                <div className='bar' />
            </div>
            {timeOut && <strong className='apologies'>Sinto muito... parece que houve um erro ao conectar com o banco de dados. Aguarde um pouco ou volte mais tarde</strong>}
        </div>
    )
}