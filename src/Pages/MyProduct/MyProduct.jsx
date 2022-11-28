import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import ConfirmationModal from './../Shared/ConfirmationModal/ConfirmationModal';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null)
    }
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });
    const myProduct = products.filter(product => product?.email === user?.email)

    const handleAds = product =>{
       
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`Advertise successfully`);
                // navigate('/dashboard/my-product')
            })
        
    }

    const handleDeleteProduct = product =>{
       
            fetch(`http://localhost:5000/products/${product._id}`, {
                method: 'DELETE', 
                headers: {
                    
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    refetch();
                    toast.success(`product ${product.name} deleted successfully`)
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                {
                    myProduct.length >0 &&<table className="table w-full">
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
                                <td><button  onClick={()=>handleAds(product)} className="btn btn-outline btn-secondary">Ads Now</button></td>
                                <td> <label  onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                }
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    successAction = {handleDeleteProduct}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;