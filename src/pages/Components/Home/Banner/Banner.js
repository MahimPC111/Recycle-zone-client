import React from 'react';
import banner1 from '../../../../assets/banner/banner1.jpg'
import banner2 from '../../../../assets/banner/banner2.jpg'
import banner3 from '../../../../assets/banner/banner3.jpg'
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image: banner1,
            prev: 3,
            id: 1,
            next: 2,
            headline: 'Order today to become our family member and enjoy our services.'
        },
        {
            image: banner2,
            prev: 1,
            id: 2,
            next: 3,
            headline: 'Recycle products reduces your costs.'
        },
        {
            image: banner3,
            prev: 2,
            id: 3,
            next: 1,
            headline: 'Second hand phones save your money.'
        }
    ]
    return (
        <div className="carousel w-full">
            {
                bannerData.map(data => <BannerItem key={data.id} data={data}></BannerItem>)
            }
        </div>
    );
};

export default Banner;