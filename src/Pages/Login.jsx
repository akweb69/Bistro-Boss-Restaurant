import React, { useContext, useEffect, useState } from 'react';
import img from "../assets/home/slide4.jpg"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
    const [captcha_value, setPaptcha_value] = useState("")
    const [disabled, setDisabled] = useState(true)
    const { user, setLoading, EmailPassLogin, setUser, gmailLogin } = useContext(AuthContext);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    // ! check a vallid captcha
    const handleValidCaptch = () => {
        if (validateCaptcha(captcha_value) === true) {
            setDisabled(false)
        }
        else {

            return alert("Captcha is not correct")
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        EmailPassLogin(email, password)
            .then(res => {
                const user = res.user
                setUser(user)
                toast.success("Login Success!")
                setLoading(false)
            })
            .catch(err => {
                console.log("error from login ---> ", err)
                toast.error("Invalid user email or password")
            })

    }

    const handleGoogleLogin = () => {
        gmailLogin()
            .then(res => {
                const user = res.user;
                setUser(user)
                toast.success("Google login success!")
            })
            .catch(err => {
                console.log("error from login ---> ", err)
                toast.error("Something went wrong!")
            })

    }

    return (
        <div className='w-full min-h-[50vh] py-10'>
            <div className="w-10/12 mx-auto flex justify-center items-center py-10 md:py-16">
                <div className="w-full lg:grid grid-cols-2  bg-[rgb(0,0,55)] bg-opacity-55" >
                    <div className="w-full max-h-[600px] overflow-hidden object-cover"><img className='w-full h-full object-cover' src={img} alt="" />
                    </div>
                    <div className="p-10 space-y-4">
                        <div
                            onClick={handleGoogleLogin}
                            className=" w-full text-center btn btn-primary flex items-center justify-center "> <FaGoogle />
                            Login With Google</div>

                        <form
                            onSubmit={handleSubmit}
                            className='flex space-y-4 w-full  flex-col'>
                            <input placeholder='Enter Your Email' name='email' className='w-full py-2 px-4 input input-primary bg-transparent  ' type="email" />

                            <input placeholder='Enter Password' name='password' className='w-full py-2 px-4 input input-primary bg-transparent ' type="password" />
                            {/* captcha */}
                            <div className="border border-indigo-600 rounded-lg p-4">
                                <LoadCanvasTemplate />
                            </div>
                            <div className="relative">
                                <input
                                    onChange={(e) => setPaptcha_value(e.target.value)}
                                    className='w-full py-2 px-4 input input-primary bg-transparent' placeholder='Enter the captch value' type="text" />
                                <span
                                    onClick={handleValidCaptch}
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 bg-indigo-700  cursor-pointer h-full rounded-r-lg flex justify-center items-center hover:bg-opacity-80">Submit</span>

                            </div>


                            <button
                                disabled={disabled}
                                className={`w-full py-2 px-4 btn text-white btn-primary`}>Login</button>
                            <div className="text-sm">
                                Don't Have An Account , <Link to={"/register"} className='text-blue-500 hover:text-blue-700 hover:underline'>Register</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;