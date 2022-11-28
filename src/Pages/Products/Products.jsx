import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    
    

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
                    <div className="card-actions justify-end">
                        <Link to={`../details/${product._id}`}><button className="btn btn-primary">details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;