import React from 'react';

const BannerItem = ({ data }) => {
    const { image, prev, id, next, headline } = data;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full banner-img">
            <img src={image} alt='' className="w-full h-60 md:h-96 lg:h-[600px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle my-auto">❮</a>
                <div className="flex flex-col">
                    <h3 className='text-yellow-300 font-bold text-xl md:text-3xl lg:text-5xl text-center px-8 drop-shadow-xl'>{headline}</h3>
                </div>
                <a href={`#slide${next}`} className="btn btn-circle my-auto">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;