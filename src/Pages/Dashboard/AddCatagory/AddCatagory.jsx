import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddCatagory = () => {
    const navigate = useNavigate()
    const handleCatagory = event => {
        event.preventDefault()
        const catagory = event.target.catagory.value
        const cat = {
            catagory
        }
        fetch('https://assignment-12-server-three.vercel.app/catagory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cat)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${catagory} is added successfully`);
                navigate('/dashboard/add-product')
            })

    }
    return (
        <div>
            <h1 className='text-4xl mb-4'> Add Catagory</h1>
            <form onSubmit={handleCatagory}>
                <input type="text" name='catagory' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="submit" placeholder="Type here" className="btn btn-secondary" />
            </form>
        </div>
    );
};

export default AddCatagory;