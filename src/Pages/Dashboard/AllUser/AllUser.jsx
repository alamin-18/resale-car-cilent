import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://assignment-12-server-three.vercel.app/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;