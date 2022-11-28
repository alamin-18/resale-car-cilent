import { useQuery } from '@tanstack/react-query';
import React, {  useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSller = () => {
    const [deletingSeller,setDeletingSeller] = useState(null)
    const closeModal = () => {
        setDeletingSeller(null)
    }
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-three.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSeller = seller =>{
       
        fetch(`https://assignment-12-server-three.vercel.app/users/${seller._id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch();
                toast.success(`User ${seller.name} deleted successfully`)
            }
        })
}
const handleVerified = (id)=>{
        fetch(`https://assignment-12-server-three.vercel.app/users/${id}`, {
            method: 'PUT', 
            headers: {
                
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('verified successful.')
                refetch();
            }
        })
    
}

    const allSeller = users.filter(user => user.role === "Seller")
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verified</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSeller.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                                <td>{seller?.verified !== 'virefied' && <button className="btn btn-active btn-accent" onClick={()=>handleVerified(seller._id)}>Verified Now</button>}
                                </td>
                                <td><label  onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                    successAction = {handleDeleteSeller}
                    successButtonName="Delete"
                    modalData = {deletingSeller}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSller;