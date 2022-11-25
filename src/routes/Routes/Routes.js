import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddProduct from "../../pages/Components/AddProduct/AddProduct";
import Blogs from "../../pages/Components/Blogs/Blogs";
import Home from "../../pages/Components/Home/Home/Home";
import Login from "../../pages/Components/Login/Login";
import LoginBuyer from "../../pages/Components/Login/LoginBuyer";
import LoginSeller from "../../pages/Components/Login/LoginSeller";
import MyProducts from "../../pages/Components/MyProducts/MyProducts";
import Products from "../../pages/Components/Products/Products";
import Register from "../../pages/Components/Register/Register";

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
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myProducts',
                element: <MyProducts></MyProducts>
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
            {
                path: '/dashboard',
                element: <Blogs></Blogs>
            },
        ]
    }
])