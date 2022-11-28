import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i0.wp.com/www.toyotamotorscebu.com/wp-content/uploads/2019/12/Toyota-Vehicle-Camry.png?fit=1023%2C465&ssl=1")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Re Sale Your Product</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;