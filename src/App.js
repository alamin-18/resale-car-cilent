
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import Home from './Pages/Home/Home/Home';


function App() {
  const routes = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
     {path:'/',element:<Home></Home>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
