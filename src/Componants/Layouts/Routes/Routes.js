import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Main from '../Main/Main';
import ErrorPage from './ErrorPage';


const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[
        
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/*',
                element:<ErrorPage></ErrorPage>,
    
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>,
    
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
        ]
    }
  ]);
  export default router;