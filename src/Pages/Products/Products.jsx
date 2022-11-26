import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
                <figure><img src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
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