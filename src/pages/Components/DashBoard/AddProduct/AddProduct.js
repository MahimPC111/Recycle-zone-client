import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const date = format(new Date(), 'PPP');
    const imgHostingKey = process.env.REACT_APP_imgbb_key;

    const handleAddDoctor = data => {
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

                    const product = {
                        name: data.name,
                        category_id: data.categoryId,
                        condition: data.condition,
                        original_price: data.original,
                        resale_price: data.resale,
                        description: data.description,
                        published_date: date,
                        used_time: data.usedTime,
                        location: data.location,
                        status: 'unsold',
                        mobile: data.number,
                        seller_email: user?.email,
                        seller_name: user?.displayName,
                        img: imgData.data.url,
                        isAdvertised: false,
                    }

                    fetch(`https://recycle-zone-server-ten.vercel.app/products`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success('New product added successfully')
                                navigate('/dashboard/myProducts')
                            }
                        })
                }
            })
    }
    return (
        <div>
            <div className='w-full lg:w-3/4 mx-auto py-10'>
                <h3 className='text-xl md:text-2xl lg:text-4xl font-bold text-center'>Add a new product</h3>
                <form onSubmit={handleSubmit(handleAddDoctor)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select {...register("categoryId")} className="input input-bordered w-full" required>
                            <option value="01">Feature phones</option>
                            <option value="02">Smartphones</option>
                            <option value="03">Tablet</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product condition</span>
                        </label>
                        <select {...register("condition")} className="input input-bordered w-full" required>
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input {...register("img", { required: "Image is required" })} type="file" className="input input-bordered w-full" />
                        {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Mobile number</span>
                        </label>
                        <input {...register("number", { required: "Mobile number is required" })} type="number" className="input input-bordered w-full" />
                        {errors.number && <p className='text-red-600'>{errors.number?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", { required: "Location is required" })} type="text" className="input input-bordered w-full" />
                        {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input {...register("description", { required: "Description is required" })} type="text" className="input input-bordered w-full" />
                        {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Year of use</span>
                        </label>
                        <input {...register("usedTime", { required: "Year of use is required" })} type="text" className="input input-bordered w-full" />
                        {errors.usedTime && <p className='text-red-600'>{errors.usedTime?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register("original", { required: "Original price is required" })} type="text" className="input input-bordered w-full" />
                        {errors.original && <p className='text-red-600'>{errors.original?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input {...register("resale", { required: "Resale price is required" })} type="text" className="input input-bordered w-full" />
                        {errors.resale && <p className='text-red-600'>{errors.resale?.message}</p>}
                    </div>

                    <input value='Add Product' className='btn w-full mt-4' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
