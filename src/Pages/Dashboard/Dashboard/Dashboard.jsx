
import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Dashboard = () => {
    const { user } = useContext(AuthContext)

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://assignment-12-server-three.vercel.app/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const dataBaseUser = users?.find(ur => ur.email === user?.email)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                       
                            
                            {
                                dataBaseUser?.role === 'admin' ? <>
                                <li><Link to="/dashboard/all-user">All User</Link></li>
                                <li><Link to="/dashboard/all-seller">All Seller</Link></li>
                                <li><Link to="/dashboard/all-buyer">All Buyer</Link></li>
                                <li><Link to="/dashboard/total-order">Total Order</Link></li>
                                <li><Link to="/dashboard/reported">Report</Link></li>
                                <li><Link to="/dashboard/ads">Total Ads</Link></li>
                                
                                </> : <>
                                
                                {dataBaseUser?.role === "Seller" ?
                            <>
                                <li><Link to="/dashboard/my-product">My Product</Link></li>
                                <li><Link to="/dashboard/add-catagory">Add Catagory</Link></li>
                                <li><Link to="/dashboard/add-product">Add Product</Link></li>
                                <li><Link to="/dashboard/seller-order">Order</Link></li>

                            </>
                            : <>
                                <li><Link to="/dashboard/my-order">My Oder</Link></li>
                                
                            </>
                            }
                                </>
                            }
                        

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;