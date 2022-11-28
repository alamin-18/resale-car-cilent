import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../../contexts/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit,  } = useForm();
    const navigate = useNavigate()
    

    const { data: catagory = [], refetch } = useQuery({
        queryKey: ['catagory'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-three.vercel.app/catagory');
            const data = await res.json();
            return data;
        }
    });
// const imageHostKey = "886466fd5e00ad4c7206d08842e7b55e"
 const imageHostKey = process.env.REACT_APP_imageHostKey

    const handleProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const products = {
                        name: data.name,
                        catagory: data.catagory,
                        orginalPrice: data.orginalPrice,
                        salePrice: data.salePrice,
                        use: data.use,
                        useMils: data.useMils,
                        location: data.location,
                        image: imgData.data.url,
                        email: user.email,
                        phone: data.phone,
                        condition:data.conditon
                    }

                    // save doctor information to the database
                    fetch('https://assignment-12-server-three.vercel.app/products', {
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
            })
    }
    return (
        <div className='lg:w-1/4 md:w-1/4 mx-auto  bg-slate-700 p-14'>
            <form onSubmit={handleSubmit(handleProduct)}>
                <div className=''>
                    <label htmlFor="name">Product name</label>
                    <input {...register("name")} type="text" id='name' placeholder="Product Name" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="phone">Your Phone Number</label>
                    <input {...register("phone")} type="text" id='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs mb-7" />
                    <label>Catagory</label>
                    <select {...register("catagory")} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Your Catagory</option>
                        {
                            catagory.map((cat ,i)=><option key={i}>{cat.catagory}</option>
                           
                            )
                        }
                    </select>
                    <label htmlFor="oprice">Orginal Price</label>
                    <input {...register("orginalPrice")} type="text" id='oprice' placeholder="Orginal Price" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="sprice">Sale Price</label>
                    <input {...register("salePrice")} type="text" id='sprice' placeholder="Sale Price" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="use">Use</label>
                    <input  {...register("use")} type="text" id='use' placeholder="example 1 year" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="usem">Use mils</label>
                    <input {...register("useMils")} type="text" id='usem' placeholder="example 1500 km" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="con">Codition</label>
                    <input {...register("conditon")} type="text" id='con' placeholder="example good" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="location">Your Location</label>
                    <input {...register("location")} type="text mb-7" id='location' placeholder="Your Location" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="image">Product Image</label>
                    <input {...register("image")} type="file" id='image' className="file-input file-input-bordered w-full max-w-xs mb-7" />
                    <input type="submit" id='image' value="Submit" className="btn btn-primary w-full" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;