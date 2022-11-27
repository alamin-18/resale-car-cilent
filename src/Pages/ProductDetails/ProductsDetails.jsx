import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../bookingModal/BookingModal';


const ProductsDetails = () => {
    const product = useLoaderData()
    const [order,setOrder] =useState()
    return (
        <div className='lg:w-2/4 mx-auto my-40'>
            <div  className='border w-96'>
            <figure><img className='w-96' src={product.image} alt="Shoes" /></figure>
            <div className='px-10 py-5'>
                <h1 className='text-4xl'>{product.name}</h1>
                <p>Orginal Price: {product.orginalPrice}</p>
                <p>Sale Price: {product.salePrice}</p>
                <p>Location: {product.location}</p>
                <p> Use: {product.use}</p>
                <p>Use Mils:  {product.useMils}</p>
                
                <label
                        htmlFor="bookModal"
                        className="btn btn-primary text-white"
                        onClick={() => setOrder(product)}
                    >Book Now</label>
            </div>
            </div>
            
            {
                order && <BookingModal
            
                order={order}
                setOrder={setOrder}
                >
    
                </BookingModal>
            }
        </div>
    );
};

export default ProductsDetails;