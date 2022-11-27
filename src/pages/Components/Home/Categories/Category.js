import React from 'react';
import { Link } from 'react-router-dom';


const Category = ({ category }) => {
    const { category_id, category_name } = category;
    return (
        <div className="card w-96 bg-primary text-primary-content mx-auto">
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/category/${category_id}`}><button className="btn btn-sm">View Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;