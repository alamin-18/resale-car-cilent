import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const SellerOrder = () => {
    const {user} = useContext(AuthContext)
     const [order,setOrder] = useState([])
    useEffect(()=>{
        axios.get("https://assignment-12-server-three.vercel.app/orders")
      .then(res => {
        const data = res.data;
        setOrder(data)
      })
    },[])
    const sellerOrder = order.filter(or => or?.sellerEmail === user?.email)
    return (
        <div>
            <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Payment stats</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellerOrder.map((or, i) => <tr key={or._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={or.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{or.product}</td>
                                
                                <td><button  className="btn btn-outline btn-secondary">Un paid</button></td>
                                <td> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default SellerOrder;