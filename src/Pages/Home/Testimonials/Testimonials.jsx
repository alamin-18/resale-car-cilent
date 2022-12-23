import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-10'>CLIENT’S TESTIMONIALS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto mb-10'>
            <div className='w-96'>
                <div className='flex justify-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://numbat.modeltheme.com/wp-content/uploads/2015/02/theme_testimonial_client2.jpg" alt=''/>
                    </div>
                </div>
                </div>
                <div className='text-center'>
                <h1 className='text-2xl font-bold'>Martin jone</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ab excepturi nobis dolore soluta, obcaecati voluptatum harum sequi pariatur. Eum?</p>
                </div>
            </div>
            <div className='w-96'>
                <div className='flex justify-center'>
                <div className="avatar ">
                    <div className="w-24 rounded-full">
                        <img src="https://numbat.modeltheme.com/wp-content/uploads/2015/02/theme_testimonial_client1.jpg" alt=''/>
                    </div>
                </div>
                </div>
                <div className='text-center'>
                <h1 className='text-2xl font-bold'>Jonny Dev</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ab excepturi nobis dolore soluta, obcaecati voluptatum harum sequi pariatur. Eum?</p>
                </div>
            </div>
            <div className='w-96'>
                <div className='flex justify-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://numbat.modeltheme.com/wp-content/uploads/2015/02/theme_testimonial_client3.jpg" alt=''/>
                    </div>
                </div>
                </div>
                <div className='text-center'>
                <h1 className='text-2xl font-bold'>Loice Doe</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ab excepturi nobis dolore soluta, obcaecati voluptatum harum sequi pariatur. Eum?</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonials;