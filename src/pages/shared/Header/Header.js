import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/Logo/logo.png'
import { AuthContext } from '../../../context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        logOutUser()
            .then(() => {
                localStorage.removeItem('eatWellToken')
            })
            .catch(e => console.error(e))
    }

    const menuBar =
        <>
            <Link className='font-semibold my-2 lg:my-0 mx-2' to='/'>Home</Link>
            <Link className='font-semibold my-2 lg:my-0 mx-2 whitespace-nowrap' to='/addProduct'>Add Product</Link>
            <Link className='font-semibold my-2 lg:my-0 mx-2 whitespace-nowrap' to='/myProducts'>My Products</Link>
            <Link className='font-semibold my-2 lg:my-0 mx-2' to='/dashboard'>Dashboard</Link>
            <Link className='font-semibold my-2 lg:my-0 mx-2' to='/blogs'>Blogs</Link>
            {
                user?.uid ?
                    <>
                        <button onClick={handleSignOut} className='mx-2 btn btn-warning btn-sm'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='font-semibold my-2 lg:my-0 mx-2' to='/login'>Login</Link>
                        <Link className='font-semibold my-2 lg:my-0 mx-2' to='/register'>Register</Link>
                    </>
            }
        </>
    return (
        <div className="navbar py-2 lg:py-4 lg:px-6 bg-accent">
            <div className="navbar-start">
                <img className="w-10 lg:w-14 rounded-full" src={img} alt="" />
                <Link to='/'><h2 className="font-bold normal-case pl-4 text-2xl lg:text-3xl whitespace-nowrap">Recycle Zone</h2></Link>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    {menuBar}
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL ?
                                    <img style={{ width: '40px', height: '40px' }} className='rounded-circle' title={user.displayName} src={user.photoURL} alt='' />
                                    :
                                    <FontAwesomeIcon className='pt-2 text-2xl' icon={faUser} />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="lg:hidden menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;