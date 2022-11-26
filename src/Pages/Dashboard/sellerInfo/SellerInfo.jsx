import React, { useEffect, useState } from 'react';

const SellerInfo = () => {
    const [seller,setSeller] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/users/Seller")
        .then(res => Response.json())
        .then(data=>setSeller(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default SellerInfo;