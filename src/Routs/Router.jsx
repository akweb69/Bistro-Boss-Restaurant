import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Common/HomePage";
import OurMenu from "../Pages/OurMenu";
import OrderPage from "../Pages/OrderPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Dashboard/MyCart";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/our-menu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "our-shop",
                element: <OrderPage></OrderPage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }

        ]

    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard/user",
                element: <h1 className="text-5xl">User Home</h1>
            },
            {
                path: "/dashboard/cart",
                element: <MyCart></MyCart>
            }
        ]
    }
])

export default router