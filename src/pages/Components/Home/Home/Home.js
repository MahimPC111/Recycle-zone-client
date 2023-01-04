import React from 'react';
import Section from '../Section/Section';
import Categories from '../Categories/Categories';
import Advertise from '../Advertise/Advertise';
import TopSection from '../TopSection/TopSection';
import Slider from '../Banner/Slider';
import { useTitle } from '../../../../shortComponents/Title';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../../../../shortComponents/Loader';

const Home = () => {
    useTitle('Home')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <TopSection></TopSection>
            <Slider></Slider>
            <Advertise></Advertise>
            <Categories></Categories>
            <Section></Section>
        </div>
    );
};

export default Home;