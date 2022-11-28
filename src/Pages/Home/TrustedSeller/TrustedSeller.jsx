import React from 'react';
import { SiToyota } from "react-icons/bs";

const TrustedSeller = () => {
    return (
        <div className='my-8'>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold">Trusted by the industry leaders</h2>
                </div>
                <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src="https://cdn-ds.com/blogs-media/sites/264/2016/10/09090408/Toyota-Logo-Feature_o.jpg" alt="" />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                       <img src="https://cdn.mos.cms.futurecdn.net/xz4NVQhHaHShErxar7YLn.jpg" alt="" />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src="https://www.pngitem.com/pimgs/m/45-457945_tata-logo-tata-food-logo-png-transparent-png.png" alt="" />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Hyundai_brand_logo.jpg" alt="" />
                    </div>
                    
                   
                </div>
            </section>
        </div>
    );
};

export default TrustedSeller;