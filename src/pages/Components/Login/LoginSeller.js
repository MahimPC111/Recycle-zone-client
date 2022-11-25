import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import img from '../../../assets/images/image.jpg';

const LoginSeller = () => {
    const { logInUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleLogin = data => {
        logInUser(data.email, data.password)
            .then(() => {
                toast.success('User created successfully!')
                navigate('/')
            })
            .catch(e => toast.error(e.message))
    }

    return (
        <div className=" bg-sky-200 p-8 lg:p-20 ">
            <div className="p-0 hero-content flex flex-col lg:flex-row justify-center items-center rounded-md">
                <div className='w-full lg:w-3/5'>
                    <img src={img} alt='' className="rounded-2xl" />
                </div>
                <div className='w-full p-10 lg:w-2/5 h-[420px] flex flex-col justify-center items-center bg-base-100'>
                    <form onSubmit={handleSubmit(handleLogin)} className="w-full mx-auto">
                        <h1 className="text-3xl font-bold text-center">Login now!</h1>
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
                        <input value='SignUp' className='btn w-full mt-4' type="submit" />
                    </form>
                    <p className='text-xs text-center mt-4'>Don't have account? <Link to='/register' className='text-blue-500'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginSeller;