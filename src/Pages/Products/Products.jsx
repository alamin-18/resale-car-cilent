import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcApproval } from "react-icons/fc";
import { toast } from 'react-hot-toast';

const Products = ({ product }) => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://assignment-12-server-three.vercel.app/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const verifiedUser = users?.find(user => user?.email === product?.email)

    const handleReport = product =>{
        console.log(product);
        fetch('https://assignment-12-server-three.vercel.app/repoted', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',   
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`Reported successfully`);
            })
        
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
                <figure><img src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>
                        <div className="badge badge-secondary">{product.condition}</div>
                    </p>
                    <p><span>Orginal Price: </span>$ {product.orginalPrice}</p>
                    <p><span>Sale Price: </span>$ {product.salePrice}</p>
                    <div>
                        {
                                verifiedUser?.verified ? <><h1 className='text-2xl flex items-center'><span>Seller: {verifiedUser?.name}</span><FcApproval></FcApproval></h1></> :<><h1 className='text-2xl'>Seller: {verifiedUser?.name}</h1></>
                            }
                    </div>
                    <div className="card-actions justify-between ">
                        <button onClick={()=>handleReport(product)} className="btn btn-secondary btn-outline">Report</button>
                        <Link to={`../details/${product._id}`}><button className="btn btn-primary">details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;