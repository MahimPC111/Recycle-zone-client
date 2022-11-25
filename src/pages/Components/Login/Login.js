import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {

    return (
        <div className='bgImg flex items-center'>
            <div className='w-60 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 lg:ml-36 mx-auto rounded-2xl flex flex-col justify-center items-center' style={{ backgroundColor: '#00292D' }}>
                <Link to='/login/loginBuyer'><button className='btn mb-4'>Login as Buyer</button></Link>
                <Link to='/login/loginSeller'><button className='btn'>Login as Seller</button></Link>
            </div>
        </div>
    );
};

export default Login;