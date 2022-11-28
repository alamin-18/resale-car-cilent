import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import TrustedSeller from '../TrustedSeller/TrustedSeller';
import AdvertiseIrem from './../AdvertiseItrem/AdvertiseIrem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <AdvertiseIrem></AdvertiseIrem>
            <TrustedSeller></TrustedSeller>
        </div>
    );
};

export default Home;