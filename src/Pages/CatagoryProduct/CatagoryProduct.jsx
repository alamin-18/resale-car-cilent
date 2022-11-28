import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from './../Products/Products';

const CatagoryProduct = () => {
    const products = useLoaderData()
    console.log(products.product)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4  lg:w-3/4 mx-auto my-4'>
            {
                products.product?.map(product => <Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default CatagoryProduct;