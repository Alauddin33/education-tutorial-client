import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {


    return (
        <div className='text-center'>
            <h1 className='display-1 text-danger fw-bold'>404</h1>
            <h1 className='text-danger'>This page is not found</h1>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>

        </div>
    );
};

export default Errorpage;