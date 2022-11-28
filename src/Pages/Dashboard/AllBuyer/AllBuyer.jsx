import { useQuery } from '@tanstack/react-query';
import React, {  useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyer = () => {
    
    const [deletingBuyer,setDeletingBuyer] = useState(null)
    const closeModal = () => {
        setDeletingBuyer(null)
    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-three.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBuyer = buyer =>{
       console.log(buyer._id);
        fetch(`https://assignment-12-server-three.vercel.app/users/${buyer._id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch();
                toast.success(`User ${buyer.name} deleted successfully`)
            }
        })
}

    const allBuyer = users.filter(user => user.role === "Buyer")
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyer.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.role}</td>
                                <td><label  onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyer.name}. It cannot be undone.`}
                    successAction = {handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData = {deletingBuyer}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyer;