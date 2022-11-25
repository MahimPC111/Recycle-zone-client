import React from 'react';
import MoonLoader from "react-spinners/ClipLoader";

const Loader = () => {
    return (
        <div className='text-center my-8'>
            <MoonLoader color="#36d7b7" size={80} />
        </div>
    );
};

export default Loader;