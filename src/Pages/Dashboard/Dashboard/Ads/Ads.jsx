import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const Ads = () => {
    const { data: advertise = [], refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteAds = product =>{
       
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE', 
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${product.name} deleted successfully`)
            }
        })
}
    return (
        <div>
             <div className="overflow-x-auto">
                {
                     <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                advertise.map((ads, i) => <tr key={ads._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={ads.image} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{ads.name}</td>
                                    <td>{ads.email}</td>

                                    <td><button className="btn btn-outline btn-secondary">delete</button></td>
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

export default Ads;