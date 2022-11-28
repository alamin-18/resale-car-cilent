import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const Catagory = () => {
    const [loading,setloading] = useState(true)
    const { data: catagory = [], } = useQuery({
        queryKey: ['catagory'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-three.vercel.app/catagory');
            const data = await res.json();
            if(data){
                setloading(false)
            }
            return data;
        }
    });
   
    if(loading){
        <Loader></Loader>
    }
    return (
        
        <div className='my-10'>
           <h1 className='text-4xl font-bold mb-10 text-center'>Catagory</h1>
           <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 w-2/4 gap-6 mx-auto">
           {

            catagory.map((cat)=><>
            <Link to={`catagory/${cat._id}`}><button className="btn btn-wide">{cat.catagory}</button></Link>
            
            </>)
            
           }
           </div>
           
        </div>
    );
    
};

export default Catagory;