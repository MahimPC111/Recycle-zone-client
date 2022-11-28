import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Blogs from "../../pages/Components/Blogs/Blogs";
import AddProduct from "../../pages/Components/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../../pages/Components/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../pages/Components/DashBoard/AllSellers/AllSellers";
import MyOrders from "../../pages/Components/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../pages/Components/DashBoard/MyProducts/MyProducts";
import Home from "../../pages/Components/Home/Home/Home";
import Products from "../../pages/Components/Home/Products/Products";
import Login from "../../pages/Components/Login/Login";
import Register from "../../pages/Components/Register/Register";
import Route404 from "../../pages/Components/Route404/Route404";
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
                element: <PrivateRoutes> <Products></Products></PrivateRoutes>
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
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
        ]
    },
    {
        path: '*',
        element: <Route404></Route404>
    }
])