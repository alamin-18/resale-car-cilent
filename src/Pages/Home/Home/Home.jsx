import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import AdvertiseIrem from './../AdvertiseItrem/AdvertiseIrem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <AdvertiseIrem></AdvertiseIrem>
        </div>
    );
};

export default Home;