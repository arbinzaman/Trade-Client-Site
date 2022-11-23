import './App.css';
import {RouterProvider } from 'react-router-dom';
import router from './Componants/Layouts/Routes/Routes';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* <RouterProvider fallbackElement={<Spiner></Spiner>} router={router}></RouterProvider> */}
      <RouterProvider router={router}></RouterProvider>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
