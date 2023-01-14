import React from 'react';
import img from '../../../../assets/images/home.jpg'
import Typewriter from 'typewriter-effect';
import "animate.css/animate.min.css";

const TopSection = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-6 md:mx-20 lg:mx-32 my-5'>
            <div className='flex items-center my-5 md:my-10 lg:my-0'>
                <h1 className='font-bold font-mono ml-2 md:ml-5'>
                    <p className='text-2xl md:text-4xl lg:text-5xl text-orange-600 animate__bounceInDown animate__animated'>Hi!</p> <br />
                    <p className='text-2xl md:text-4xl lg:text-5xl text-orange-600 animate__bounceInDown animate__animated'>Welcome to</p>  <br />
                    <div className='text-3xl md:text-5xl lg:text-6xl text-black'>
                        <Typewriter
                            options={{
                                strings: ['Recycle', 'Zone!', 'Recycle Zone!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </h1>
            </div>
            <div className='mx-auto w-full animate__animated animate__flipInX'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default TopSection;