import { FaHome } from "react-icons/fa";
import { FaCalendar, FaCartPlus, FaList, FaRankingStar, FaUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="w-full min-h-screen flex">
            {/* side bar */}
            <div className="w-[220px] min-h-full bg-orange-300">
                <ul className="">
                    <li><NavLink className="btn btn-outline w-full rounded-none" to={"/"}>
                        <FaHome></FaHome>
                        Home</NavLink></li>
                    <li><NavLink className="btn btn-outline w-full rounded-none" to={"/dashboard/user"}> <FaUser></FaUser> User Home</NavLink></li>
                    <li><NavLink className="btn btn-outline w-full rounded-none" to={"/dashboard/cart"}> <FaCartPlus></FaCartPlus> My Cart</NavLink></li>
                    <li><NavLink className="btn btn-outline w-full rounded-none" to={"/dashboard/reservation"}><FaCalendar></FaCalendar>  Reservation</NavLink></li>
                    <li><NavLink className="btn btn-outline w-full rounded-none" to={"/dashboard/review"}> <FaRankingStar></FaRankingStar> Add A Review</NavLink></li>
                    <li><NavLink className="btn btn-outline w-full rounded-none" to={"/dashboard/bookings"}> <FaList></FaList> My Bookings</NavLink></li>
                </ul>
            </div>
            {/* content right side */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;