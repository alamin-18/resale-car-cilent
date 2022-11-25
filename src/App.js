
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import SingUp from './Pages/SingUp/SingUp';


function App() {
  const routes = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
     {path:'/',element:<Home></Home>},
     {path:'/login',element:<LogIn></LogIn>},
     {path:'/singup',element:<SingUp></SingUp>},
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
