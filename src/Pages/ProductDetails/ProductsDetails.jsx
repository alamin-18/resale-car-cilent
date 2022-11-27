import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsDetails = () => {
    const product = useLoaderData()
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
                <button className="btn btn-secondary my-10 w-full">Button</button>
            </div>
            </div>
        </div>
    );
};

export default ProductsDetails;