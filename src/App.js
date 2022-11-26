
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import AddProduct from './Pages/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import MyProduct from './Pages/MyProduct/MyProduct';
import ProductsDetails from './Pages/ProductDetails/ProductsDetails';
import Products from './Pages/Products/Products';
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
          {path:'/dashboard/my-product',element:<MyProduct></MyProduct>},
          {path:'/dashboard/add-product',element:<AddProduct></AddProduct>}
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
