import { Link, useRouteError } from "react-router-dom"
import './ErrorPage.css'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="ErrorPage">
            <h1>Oops! {'=('}</h1>
            {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
            <p>Parece que ocorreu um erro. Que tal retornar para a <Link id='link' to={`/`}>página inicial? </Link></p>
        </div>
    );
}