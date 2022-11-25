import React from 'react';
import img from '../../../../assets/section img/section.jpg'

const Section = () => {
    return (
        <div className="hero my-16 lg:my-20">
            <div className="hero-content grid lg:grid-cols-2">
                <div>
                    <img src={img} alt="" className="w-9/12 mx-auto rounded-lg shadow-2xl" />
                </div>
                <div className='mt-4 lg:mt-0 px-5 lg:px-0 text-center lg:text-start'>
                    <h1 className="text-2xl lg:text-4xl font-bold">Benefits of buying secondhand products</h1>
                    <p className="pt-8 text-justify">One of the most obvious and well-known benefits of buying secondhand is the cost savings. You can often find secondhand goods up to 50% cheaper than you could if you were buying new. Buying secondhand goods means that the energy and natural resources that went into creating those goods have already been used. So, you’re not creating a demand for new items that require additional energy or deplete even more natural resources.</p>
                </div>
            </div>
        </div>
    );
};

export default Section;