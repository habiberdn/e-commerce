import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Login = () => {
    const Navigate = useNavigate()
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const [data, setdata] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setdata(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
        if (name === 'email') {
            dispatch({ type: 'SET_EMAIL', payload: value });
        }
    }
    console.log(data)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:3001/api/v1/seller/login', {
            email: data.email,
            password: data.password
        },
            {
                withCredentials: true
            })
        console.log(response.data.token)

        cookies.set('jwt', response.data.token, {
            path: ['/addProduct']
        })
        cookies.set('jwt', response.data.token, {
            path: '/seller'
        })
        if (response.status === 200) {
            Navigate('/seller', {

            })
        }

    }
    return (
        <div className='flex'>
            <div className='h-screen w-[60%]'>
                <img src={require('../../image/login.webp')} className='h-full w-full' alt='login-img' />
            </div>
            <div className='flex flex-col justify-center items-center w-[40%] gap-4'>
                <h1 className='text-2xl'>
                    Welcome Back !
                </h1>
                <div className='flex flex-col gap-5 mt-[2rem]'>
                    <div className=' flex items-center border rounded-xl p-2'>
                        <svg className='w-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="currentColor"></path></svg>
                        <input type="text" name="email" id="" className='border-none outline-none focus:outline-none focus:ring-0' placeholder='Email' onChange={handleChange} />
                    </div>
                    <div className=' flex items-center border rounded-xl p-2'>
                        <svg className='w-[1.5rem] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.917 13C12.441 15.8377 9.973 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.973 6 12.441 8.16229 12.917 11H23V13H21V17H19V13H17V17H15V13H12.917ZM7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z" fill="currentColor"></path></svg>
                        <input type="password" name="password" className='border-none outline-none focus:outline-none focus:ring-0 ' placeholder='Password' onChange={handleChange} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button className="border p-[1.4rem] flex items-center justify-center bg-[#2962ff] text-white  rounded-full h-[2rem] " onClick={handleSubmit}>Login</button>
                        <h1 className='text-center'>OR</h1>
                        <button className="border p-[1.4rem]  flex items-center justify-center rounded-full h-[2rem] " onClick={handleSubmit}><img src={require('../../image/google.png')} className='w-[1.5rem] h-[1.5rem]' alt="" /></button>
                        <a href="/seller/signup" className='text-sm hover:text-[#2962ff] text-center'>Don't have an account?</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;