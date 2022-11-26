import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4  lg:w-3/4 mx-auto my-4'>
            {
                products.map(product => <Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default Shop;