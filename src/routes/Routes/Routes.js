import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Blogs from "../../pages/Components/Blogs/Blogs";
import AddProduct from "../../pages/Components/DashBoard/AddProduct/AddProduct";
import MyOrders from "../../pages/Components/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../pages/Components/DashBoard/MyProducts/MyProducts";
import Home from "../../pages/Components/Home/Home/Home";
import Products from "../../pages/Components/Home/Products/Products";
import Login from "../../pages/Components/Login/Login";
import LoginBuyer from "../../pages/Components/Login/LoginBuyer";
import LoginSeller from "../../pages/Components/Login/LoginSeller";
import Register from "../../pages/Components/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Products></Products>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/login/loginBuyer',
                element: <LoginBuyer></LoginBuyer>
            },
            {
                path: '/login/loginSeller',
                element: <LoginSeller></LoginSeller>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
        ]
    }
])