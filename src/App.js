
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blog from './Pages/Blog/Blog';
import CatagoryProduct from './Pages/CatagoryProduct/CatagoryProduct';
import AddCatagory from './Pages/Dashboard/AddCatagory/AddCatagory';
import AllBuyer from './Pages/Dashboard/AllBuyer/AllBuyer';
import AllSller from './Pages/Dashboard/AllSeller/AllSller';
import AllUser from './Pages/Dashboard/AllUser/AllUser';
import Ads from './Pages/Dashboard/Dashboard/Ads/Ads';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Reported from './Pages/Dashboard/Reported/Reported';
import TotalOrder from './Pages/Dashboard/TotalOrder/TotalOrder';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import MyProduct from './Pages/MyProduct/MyProduct';
import ProductsDetails from './Pages/ProductDetails/ProductsDetails';

import SellerOrder from './Pages/SellerOrder/SellerOrder';
import Shop from './Pages/Shop/Shop';
import SingUp from './Pages/SingUp/SingUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/login', element: <LogIn></LogIn> },
        { path: '/singup', element: <SingUp></SingUp> },
        { path: '/shop', element: <Shop></Shop> },
        { path: '/blog', element: <Blog></Blog>},
        { path: '/catagory/:id', element: <PrivateRoute><CatagoryProduct></CatagoryProduct></PrivateRoute>,
        loader:({ params }) => {
          return fetch(`http://localhost:5000/catagory/${params.id}`)}
      },
        { path: '/details/:id', element: <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
        loader:({ params }) => {
          return fetch(`http://localhost:5000/products/${params.id}`)}
      },
        { path: '/dashboard', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, errorElement:<ErrorPage></ErrorPage>,children:[
          {path:'/dashboard',element:<PrivateRoute><MyProduct></MyProduct></PrivateRoute>},
          {path:'/dashboard',element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>},
          {path:'/dashboard/my-order',element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>},
          {path:'/dashboard/my-product',element:<PrivateRoute><MyProduct></MyProduct></PrivateRoute>},
          {path:'/dashboard/add-product',element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>},
          {path:'/dashboard/seller-order',element:<PrivateRoute><SellerOrder></SellerOrder></PrivateRoute>},
          {path:'/dashboard/total-order',element:<PrivateRoute><TotalOrder></TotalOrder></PrivateRoute>},
          {path:'/dashboard/ads',element:<PrivateRoute><Ads></Ads></PrivateRoute>},
          {path:'/dashboard/all-buyer',element:<PrivateRoute><AllBuyer></AllBuyer></PrivateRoute>},
          {path:'/dashboard/all-seller',element:<PrivateRoute><AllSller></AllSller></PrivateRoute>},
          {path:'/dashboard/add-catagory',element:<PrivateRoute><AddCatagory></AddCatagory></PrivateRoute>},
          {path:'/dashboard/all-user',element:<PrivateRoute><AllUser></AllUser></PrivateRoute>},
          {path:'/dashboard/reported',element:<PrivateRoute><Reported></Reported></PrivateRoute>}
        ] }

      ]
    },
    

  ])
  return (
    <div >
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
