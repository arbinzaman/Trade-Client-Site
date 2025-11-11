import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Pages/Blogs/Blogs";
import CatagoriesOfPhones from "../../Pages/Home/CatagoriesOfPhones/CatagoriesOfPhones";
import Catagory from "../../Pages/Home/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Main from "../Main/Main";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "../../PrivateRoutes/PrivateRoutes";
import DashBoradLayout from "../DashBorad/DashBoardLayout";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import SelectedItems from "../../Pages/SelectedItems/SelectedItems";
import CatagoriesCard from "../../Pages/Home/CatagoriesCard/CatagoriesCard";
import SingleCategoryCard from "../../Pages/Home/Catagory/SingleCategoryCard";
import AllUser from "../../Pages/DashBoard/AllUsers/AllUser";
import AddAProduct from "../../Pages/DashBoard/AddAProduct/AddAProduct";
import AdminRoute from "./AdminRoute/AdminRoute";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import SellerRoute from "./SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/catagories",
        element: <CatagoriesOfPhones></CatagoriesOfPhones>,
      },
      {
        path: "/catagories/:id",
        element: (
          <PrivateRoutes>
            <Catagory></Catagory>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://trade-buy-sell.vercel.app//catagories/${params.id}`
          ),
      },
      {
        path: "/catagories/:id",
        element: <SingleCategoryCard></SingleCategoryCard>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoradLayout></DashBoradLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <SelectedItems></SelectedItems>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addaproduct",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProducts></MyProducts>,
      },

      {
        path: "/dashboard/addaproduct",
        element: <AddAProduct></AddAProduct>,
      },

      {
        path: "/dashboard/myproduct",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
export default router;
