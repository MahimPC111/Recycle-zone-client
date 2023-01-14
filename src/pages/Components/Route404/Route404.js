import React from 'react';
import './Route404.css'
import img from '../../../assets/route404/error.gif'
import { Link } from 'react-router-dom';

const Route404 = () => {
    return (
        <div className='error-page'>
            <div class="container">
                <img src={img} alt="Error" />
                <h2>Oppss...</h2>
                <p>It looks like you're lost!</p>
                <p>That's a trouble?</p>
                <button type="button" class="btn btn-outline btn-info mt-4"><Link to='/'>Go Back</Link></button>
            </div>
        </div>
    );
};

export default Route404;