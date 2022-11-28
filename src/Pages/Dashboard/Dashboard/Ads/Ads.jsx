import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const Ads = () => {
    const [deletingAds, setDeletingAds] = useState(null);
    const closeModal = () => {
        setDeletingAds(null)
    }
    const { data: advertise = [], refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-three.vercel.app/advertise');
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteAds = async (ads) =>{
       console.log(ads._id);
        try{
            const {data} = await axios.delete(`https://assignment-12-server-three.vercel.app/advertise/${ads._id}`)
            if(data.msg){
                refetch();
                toast.success(`product ${ads.name} deleted successfully`)
            }
        }
        catch(err){
            console.log(err)
        }
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

                                    <td><label onClick={() => setDeletingAds(ads)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                                    
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
            </div>
            {
                deletingAds && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingAds.name}. It cannot be undone.`}
                    successAction = {handleDeleteAds}
                    successButtonName="Delete"
                    modalData = {deletingAds}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default Ads;