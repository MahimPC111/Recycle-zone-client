import React from 'react';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Section></Section>
        </div>
    );
};

export default Home;