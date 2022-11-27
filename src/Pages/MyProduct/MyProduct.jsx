import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });
    const myProduct = products.filter(product => product?.email === user?.email)

    const handleAds = id =>{
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} is added successfully`);
                navigate('/dashboard/my-product')
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Unsold/Available</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProduct.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={product.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td><button className="btn btn-secondary">Available</button></td>
                                <td><button onClick={()=>handleAds(product._id)} className="btn btn-outline btn-secondary">Ads Now</button></td>
                                <td><button className="btn btn-secondary">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;