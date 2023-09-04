import './Loading.sass';

export default function Loading() {
    return (
        <div className="Loading">
            <div className='bar-container'>
                <div className='bar upper-bar'></div>
                <div className='bar lower-bar' />
            </div>
        </div>
    )
}
