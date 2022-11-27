
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import AddProduct from './Pages/AddProduct/AddProduct';
import AllUser from './Pages/Dashboard/AllUser/AllUser';
import Ads from './Pages/Dashboard/Dashboard/Ads/Ads';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import TotalOrder from './Pages/Dashboard/TotalOrder/TotalOrder';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import MyProduct from './Pages/MyProduct/MyProduct';
import ProductsDetails from './Pages/ProductDetails/ProductsDetails';

import SellerOrder from './Pages/SellerOrder/SellerOrder';
import Shop from './Pages/Shop/Shop';
import SingUp from './Pages/SingUp/SingUp';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/login', element: <LogIn></LogIn> },
        { path: '/singup', element: <SingUp></SingUp> },
        { path: '/shop', element: <Shop></Shop> },
        { path: '/details/:id', element: <ProductsDetails></ProductsDetails>,
        loader:({ params }) => {
          return fetch(`http://localhost:5000/products/${params.id}`)}
      },
        { path: '/dashboard', element: <Dashboard></Dashboard>,children:[
          {path:'/dashboard',element:<MyProduct></MyProduct>},
          {path:'/dashboard',element:<MyOrder></MyOrder>},
          {path:'/dashboard/my-order',element:<MyOrder></MyOrder>},
          {path:'/dashboard/my-product',element:<MyProduct></MyProduct>},
          {path:'/dashboard/add-product',element:<AddProduct></AddProduct>},
          {path:'/dashboard/seller-order',element:<SellerOrder></SellerOrder>},
          {path:'/dashboard/total-order',element:<TotalOrder></TotalOrder>},
          {path:'/dashboard/ads',element:<Ads></Ads>},
          {path:'/dashboard/all-user',element:<AllUser></AllUser>}
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
