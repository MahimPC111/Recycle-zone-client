import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Blogs from "../../pages/Components/Blogs/Blogs";
import AddProduct from "../../pages/Components/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../../pages/Components/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../pages/Components/DashBoard/AllSellers/AllSellers";
import MyBuyers from "../../pages/Components/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../pages/Components/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../pages/Components/DashBoard/MyProducts/MyProducts";
import Payment from "../../pages/Components/DashBoard/Payment/Payment";
import ReportedItems from "../../pages/Components/DashBoard/ReportedItems/ReportedItems";
import Home from "../../pages/Components/Home/Home/Home";
import Products from "../../pages/Components/Home/Products/Products";
import Login from "../../pages/Components/Login/Login";
import Register from "../../pages/Components/Register/Register";
import Route404 from "../../pages/Components/Route404/Route404";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

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
                loader: ({ params }) => fetch(`https://recycle-zone-server-ten.vercel.app/category/${params.id}`),
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
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoutes><MyBuyers></MyBuyers></SellerRoutes>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoutes><ReportedItems></ReportedItems></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`https://recycle-zone-server-ten.vercel.app/orders/${params.id}`),
                element: <Payment></Payment>
            },
        ]
    },
    {
        path: '*',
        element: <Route404></Route404>
    }
])