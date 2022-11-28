import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Reported = () => {
    //http://localhost:5000/repoted
    const { data: reported = [], } = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/repoted');
            const data = await res.json();
            return data;
        }
    });
    console.log(reported)
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

                            </tr>
                        </thead>
                        <tbody>
                            {
                                reported.map((report, i) => <tr key={report._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={report.image} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{report.name}</td>

                                    <td>{report.email}</td>
                                    <td> </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default Reported;