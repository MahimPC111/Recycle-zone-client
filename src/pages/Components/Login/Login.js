import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import loginImg from '../../../assets/images/login.jpg';
import icon from '../../../assets/Logo/google.png';
import { GoogleAuthProvider } from 'firebase/auth';
import { useTitle } from '../../../shortComponents/Title';
import { useEffect } from 'react';
import Loader from '../../../shortComponents/Loader';


const Login = () => {
    useTitle('Login');
    const { logInUser, signInWithGoogle, loading, setLoading } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [setLoading])

    if (loading) {
        return <Loader></Loader>
    }

    const handleLogin = data => {
        logInUser(data.email, data.password)
            .then(() => {
                toast.success('User Logged in successfully!')
                navigate(from, { replace: true })
                setLoading(false);
            })
            .catch(e => {
                setLoading(false);
                toast.error(e.message)
            })

    }

    const handleGoogleLogin = (provider) => {
        signInWithGoogle(provider)
            .then((result) => {
                const user = result.user;
                saveUser(user.displayName, user.email)
            })
            .catch(e => {
                setLoading(false);
                toast.error(e.message)
            })
    }

    const saveUser = (name, email) => {
        const user = {
            name,
            email
        }
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(() => {
                toast.success('User Logged in successfully!')
                navigate(from, { replace: true });
                setLoading(false);
            })
    }

    return (
        <div className=" bg-sky-200 py-16 md:py-20 lg:p-20">
            <div className="p-0 hero-content grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-32 rounded-md">
                <div className='w-3/4 lg:w-full mx-auto'>
                    <img src={loginImg} alt='' className="rounded-2xl" />
                </div>
                <div className='w-3/4 lg:w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center bg-base-100'>
                    <form onSubmit={handleSubmit(handleLogin)} className="w-full mx-auto">
                        <h1 className="text-3xl font-bold text-center">LogIn now!</h1>
                        <div className="form-control w-full">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input {...register("email", { required: "Email Address is required" })} type="email" className="input input-bordered w-full" />

                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 8, message: 'Password should be at least six or more characters' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/, message: 'Password must be strong' }
                                }
                            )} type="password" className="input input-bordered w-full" />

                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        </div>
                        <input value='Log In' className='btn w-full mt-4' type="submit" />
                    </form>
                    <p className='text-xs text-center mt-4'>Don't have account? <Link to='/register' className='text-blue-500'>Register</Link></p>
                    <div className='mt-4 w-full'>
                        <button onClick={() => handleGoogleLogin(provider)} className='btn btn-outline btn-primary w-full'><img className='w-6 mr-2' src={icon} alt='' /> Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;