import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Destination from '../Destination/Destination';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <Team></Team>
            <Contact></Contact>
        </div>
    );
};

export default Home;