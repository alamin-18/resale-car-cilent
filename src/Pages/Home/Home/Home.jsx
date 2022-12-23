import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import TrustedSeller from '../TrustedSeller/TrustedSeller';
import AdvertiseIrem from './../AdvertiseItrem/AdvertiseIrem';
import ClientInfo from '../ClientInfo/ClientInfo';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <AdvertiseIrem></AdvertiseIrem>
            <TrustedSeller></TrustedSeller>
            <ClientInfo></ClientInfo>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;