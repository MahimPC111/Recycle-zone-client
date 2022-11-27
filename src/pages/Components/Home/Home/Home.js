import React from 'react';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import Categories from '../Categories/Categories';
import Advertise from '../Advertise/Advertise';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <Section></Section>
        </div>
    );
};

export default Home;