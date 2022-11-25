import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://doctors-portal-server-rust.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            
        </div>
    );
};

export default Dashboard;