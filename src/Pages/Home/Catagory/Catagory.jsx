import React from 'react';

const Catagory = () => {
    return (
        <div className='my-10'>
           <h1 className='text-4xl font-bold mb-10'>Catagory</h1>
           <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 w-2/4 gap-6 mx-auto">
           <button className="btn btn-wide">Microbus</button>
           <button className="btn btn-wide">Luxury car</button>
           <button className="btn btn-wide">Electic car</button>
           </div>
        </div>
    );
};

export default Catagory;