import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Página não encontrada!</h1>
            <Link to="/" >Voltar para a Home </Link>
        </div>
    )
}

export default ErrorPage;