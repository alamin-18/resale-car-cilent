import React from 'react';

const AddProduct = () => {
    return (
        <div className='w-1/4 mx-auto mt-32 bg-slate-700 p-14'>
            <form>
                <div className=''>
                    <label htmlFor="name">Product name</label>
                    <input type="text" id='name' placeholder="Product Name" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="name">Information</label>
                    <input type="text" placeholder="Information" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="location">Your Location</label>
                    <input type="text mb-7" id='location' placeholder="Your Location" className="input input-bordered w-full max-w-xs mb-7" />
                    <label htmlFor="image">Product Image</label>
                    <input type="file" id='image' className="file-input file-input-bordered w-full max-w-xs mb-7" />
                    <input type="submit" id='image' value="Submit" className="btn btn-primary w-full" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;