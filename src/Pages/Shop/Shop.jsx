import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const { data: products = [],  } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4  lg:w-3/4 mx-auto my-4'>
            {
                products.map(product => <Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default Shop;