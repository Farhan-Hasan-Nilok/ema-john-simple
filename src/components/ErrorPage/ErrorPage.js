import React from 'react';
import './errorPage.css'
const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1>Oops!</h1>
            <p>sorry, somthing unexpected occured</p>
            <p className='not-found'>Not found 404</p>
        </div>
    );
};

export default ErrorPage;