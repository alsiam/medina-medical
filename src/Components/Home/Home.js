import React from 'react';
import Banner from './Banner/Banner';
import Information from './Information/Information';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Information></Information>
        </div>
    );
};

export default Home;