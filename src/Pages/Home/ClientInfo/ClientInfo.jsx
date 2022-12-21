import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const ClientInfo = () => {
    const { data: products = [],  } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-three.vercel.app/products');
            const data = await res.json();
            return data;
        }
    });
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://assignment-12-server-three.vercel.app/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100 mb-4">
                <h1 className='text-4xl font-bold text-center'>Info</h1>
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">{users.length}</p>
                        <p className="text-sm sm:text-base">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">{products.length}</p>
                        <p className="text-sm sm:text-base">Published Product</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">{users.length}</p>
                        <p className="text-sm sm:text-base">User</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientInfo;