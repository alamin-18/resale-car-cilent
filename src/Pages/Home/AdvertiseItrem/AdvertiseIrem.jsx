import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Products from '../../Products/Products';

const AdvertiseIrem = () => {
    //https://assignment-12-server-three.vercel.app/advertise
    const { data: advertise = [], } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-three.vercel.app/advertise');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            {
                advertise.length && <>
                    <h1 className="text-4xl text-center">Advertise Item</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4  lg:w-3/4 mx-auto my-4'>

                        {/* {
                            advertise.map(ads => <SingleAds key={ads._id} ads={ads}></SingleAds>)
                        } */}
                        {
                            advertise.map(ads =><Products key={ads._id} product={ads}></Products>)
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default AdvertiseIrem;