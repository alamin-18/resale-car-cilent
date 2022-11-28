import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrder = () => {
    const {user} = useContext(AuthContext)
     const [order,setOrder] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/orders")
      .then(res => {
        const data = res.data;
        setOrder(data)
      })
    },[])
    const myOrder = order.filter(or => or?.email === user?.email)
   
    console.log(user)
    console.log(myOrder)
    return (
        <div>
            <div className="overflow-x-auto">
                {
                    myOrder.length >0 &&<table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Payment</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map((or, i) => <tr key={or._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={or.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{or.product}</td>
                                
                                <td><button  className="btn btn-outline btn-secondary">Pay now</button></td>
                                <td> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                }
            </div>
        </div>
    );
};

export default MyOrder;