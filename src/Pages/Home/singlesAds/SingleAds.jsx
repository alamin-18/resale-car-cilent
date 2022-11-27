import React from 'react';
import { Link } from 'react-router-dom';

const SingleAds = ({ ads }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
                <figure><img src={ads.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ads.name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p><span>Orginal Price: </span>$ {ads.orginalPrice}</p>
                    <p><span>Sale Price: </span>$ {ads.salePrice}</p>
                    <div className="card-actions justify-end">
                        <Link to={`../details/${ads._id}`}><button className="btn btn-primary">details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAds;