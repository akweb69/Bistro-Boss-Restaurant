import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Common/HomePage";
import OurMenu from "../Pages/OurMenu";
import OrderPage from "../Pages/OrderPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



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

    }
])

export default router