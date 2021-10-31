import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div style={{ height: '90vh' }} className='d-flex flex-column justify-content-center align-items-center'>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <h6>Go back to <Link to='/home'>Home</Link></h6>
        </div>
    );
};

export default NoPage;