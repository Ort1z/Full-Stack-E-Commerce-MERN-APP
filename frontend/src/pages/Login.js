import React, { useContext, useState } from 'react'
import loginIcons from '../assests/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

/**
 * Login component handles the user login functionality.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered login component.
 * 
 * @example
 * return <Login />
 * 
 * @description
 * This component renders a login form that allows users to enter their email and password to log in.
 * It includes functionality to show/hide the password, handle form submission, and navigate to different pages.
 * 
 * @function
 * @name Login
 * 
 * @property {boolean} showPassword - State to toggle the visibility of the password.
 * @property {Object} data - State to store the email and password entered by the user.
 * @property {string} data.email - The email entered by the user.
 * @property {string} data.password - The password entered by the user.
 * 
 * @method
 * @name handleOnChange
 * @description Updates the state with the values entered in the form fields.
 * @param {Object} e - The event object.
 * 
 * @method
 * @name handleSubmit
 * @description Handles the form submission, sends a login request to the server, and processes the response.
 * @param {Object} e - The event object.
 * 
 * @requires useState
 * @requires useNavigate
 * @requires useContext
 * @requires Context
 * @requires SummaryApi
 * @requires toast
 * @requires FaEye
 * @requires FaEyeSlash
 * @requires Link
 * 
 * @example
 * <form onSubmit={handleSubmit}>
 *   <input type="email" name="email" onChange={handleOnChange} />
 *   <input type="password" name="password" onChange={handleOnChange} />
 *   <button type="submit">Login</button>
 * </form>
 */
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(SummaryApi.signIn.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const responseData = await response.json()

            if (response.ok && responseData.success) {
                // Store the token
                localStorage.setItem('token', responseData.data)
                
                toast.success(responseData.message || 'Login successful!')
                await fetchUserDetails()
                await fetchUserAddToCart()
                navigate('/')
            } else {
                toast.error(responseData.message || 'Login failed')
            }
        } catch (error) {
            console.error('Login error:', error)
            toast.error('Failed to connect to the server')
        }
    }


    console.log("data login", data)

    return (
        <section id='login'>
            <div className='mx-auto container p-4'>

                <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icons' />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    placeholder='enter email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='enter password'
                                    value={data.password}
                                    name='password'
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                    </form>

                    <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
                </div>


            </div>
        </section>
    )
}

export default Login