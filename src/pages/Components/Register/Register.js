import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/image.jpg';
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import Loader from '../../../shortComponents/Loader';

const Register = () => {
    const { createUser, updateUser, setLoading, loading } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imgHostingKey = process.env.REACT_APP_imgbb_key;

    if (loading) {
        return <Loader></Loader>
    }

    const handleRegister = data => {

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imgHostingKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    createUser(data.email, data.password)
                        .then(() => {
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url,
                            }
                            updateUser(userInfo)
                                .then(() => {
                                    saveUser(data.name, data.email, data.role)
                                })
                                .catch(e => toast.error(e.message))
                        })
                        .catch(e => {
                            toast.error(e.message)
                            navigate('/register')
                        })
                }
            })
    }

    const saveUser = (name, email, role) => {
        const user = {
            name,
            email,
            role
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(() => {
                setLoading(false);
                toast.success('User created successfully!')
                navigate('/');
            })
    }


    return (
        <div className=" bg-sky-200 p-8 lg:p-20 ">
            <div className="p-0 hero-content flex flex-col lg:flex-row justify-center items-center">
                <div className='w-full lg:w-3/5'>
                    <img src={img} alt='' className="rounded-2xl" />
                </div>
                <div className='w-full p-10 lg:w-2/5 flex flex-col justify-center items-center bg-base-100'>
                    <form onSubmit={handleSubmit(handleRegister)} className="w-full mx-auto">
                        <h1 className="text-3xl font-bold text-center">Register now!</h1>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>

                            <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input {...register("img", { required: "Image is required" })} type="file" className="input input-bordered w-full" />
                            {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                        </div>

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

                        <div className="form-control w-full py-3">
                            <select {...register("role")} className="input input-bordered w-full" required>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>

                        <input value='Register' className='btn w-full mt-2' type="submit" />
                    </form>
                    <p className='text-xs text-center mt-4'>Already have account? <Link to='/login' className='text-blue-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;