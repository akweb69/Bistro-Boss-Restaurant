import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import { AuthContext } from '../AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <div>
            <div className="navbar w-full fixed top-0 z-50 backdrop-blur-sm bg-[rgba(0,0,0,0.3)]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                            <li><NavLink to={"/dashboard"}>DashBoard</NavLink></li>
                            <li><NavLink to={"/our-menu"}>Our Menu</NavLink></li>
                            <li><NavLink to={"/our-shop"}>Our Shop</NavLink></li>
                            <li><button className="btn">
                                Inbox
                                <div className="badge badge-secondary">+99</div>
                            </button></li>



                        </ul>
                    </div>
                    {/* logo */}
                    <div className="flex items-center gap-1">
                        <img className='size-12' src={logo} alt="" />
                        <div className="">
                            <h1 className="text-2xl md:text-4xl font-bold">Salman </h1>
                            <p className="text-xs md:text-sm text-center text-orange-400 font-semibold">Food & Resturant</p>
                        </div>
                    </div>
                    {/* logo end */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                        <li><NavLink to={"/dashboard"}>DashBoard</NavLink></li>
                        <li><NavLink to={"/our-menu"}>Our Menu</NavLink></li>
                        <li><NavLink to={"/our-shop"}>Our Shop</NavLink></li>
                        <li><button className="btn btn-sm rounded-full">
                            Cart
                            <div className="badge badge-secondary">0</div>
                        </button></li>

                    </ul>
                </div>
                <div className="navbar-end space-x-1 items-center">
                    {
                        user && user?.email ? <div className="flex items-center gap-3">
                            <img className='rounded-full w-[36px] h-[36px] ' referrerPolicy='no-referrer' src={user?.photoURL} alt="" />
                            <div
                                onClick={() => logOut()}
                                className="btn btn-primary">LogOut</div>
                        </div> :
                            <div className="">
                                <Link to={"/login"} className="btn btn-accent btn-outline btn-sm">Login</Link>
                                <Link to={"/register"} className="btn btn-error btn-outline btn-sm">Register</Link>

                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;