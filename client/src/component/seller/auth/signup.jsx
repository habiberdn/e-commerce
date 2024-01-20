import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
} from '@chakra-ui/react'

const Signup = () => {
    const Navigate = useNavigate()
    const [isSuccess, setSuccess] = useState()
    const cookies = new Cookies();
    const [data, setdata] = useState({
        email: "",
        password: "",
        name: "",
        error: ""
    })
    console.log(data)
    const handleChange = (e) => {
        const { name, value } = e.target
        setdata(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:3001/api/v1/seller/signup', {
                email: data.email,
                password: data.password,
                name: data.name
            }, {
                withCredentials: true
            })
            console.log(response)
            if (response.status === 201) {
                cookies.set('jwtseller', response.data.token, {
                    path: '/seller'
                });
                cookies.set('jwtseller', response.data.token, {
                    path: '/addProduct'
                });
                setSuccess(true)
                setTimeout(() => {
                    Navigate('/seller/login')
                }, 1500)
            }
            
        } catch (error) {
            console.log(error)
            setdata({
                ...data,
                error: error.response.data.message
            });
        }
    };
    return (
        <div className='flex'>
            <div className='h-screen w-[60%]'>
                <img src={require('../../image/login.webp')} className='h-full w-full' alt='login-img' />
            </div>
            <div className='flex flex-col justify-center items-center w-[40%] gap-4'>
                <h1 className='text-2xl font-dmsans'>
                    Create an Account Here!
                </h1>
                <div className='flex flex-col gap-3 mt-[2rem]'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-dmsans'>Username</p>
                        <div className=' flex items-center border rounded-xl p-1 pl-3'>
                            <svg className='w-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="currentColor"></path></svg>
                            <input type="text" name="name" id="" className='border-none outline-none focus:outline-none focus:ring-0' placeholder='John Doe' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-dmsans'>Email</p>
                        <div className=' flex items-center border rounded-xl p-1 pl-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[1.5rem]' viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                            <input type="text" name="email" id="" className='border-none outline-none focus:outline-none focus:ring-0' placeholder='you@gmail.com' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-dmsans'>Password</p>
                        <div className=' flex items-center border rounded-xl p-1 pl-3'>
                            <svg className='w-[1.5rem] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.917 13C12.441 15.8377 9.973 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.973 6 12.441 8.16229 12.917 11H23V13H21V17H19V13H17V17H15V13H12.917ZM7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z" fill="currentColor"></path></svg>
                            <input type="password" name="password" className='border-none outline-none focus:outline-none focus:ring-0 ' placeholder='*******' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {/* {data.error && <h1 className='text-[#ff0000] text-sm'>{data.error}</h1>} */}
                        {isSuccess ? <ChakraProvider >
                            <Alert status='success'>
                                <AlertIcon />
                                Data uploaded to the server !
                            </Alert>
                        </ChakraProvider> : 
                        <ChakraProvider ><Alert status='error'>
                            <AlertIcon />
                            {data.error}
                        </Alert></ChakraProvider>}
                        <button className="border p-[1.4rem] flex items-center justify-center bg-[#2962ff] text-white rounded-full h-[2rem] " onClick={handleSubmit}>
                            Signup
                        </button>
                        <h1 className='text-center font-dmsans'>OR</h1>
                        <button className="border p-[1.4rem] flex items-center justify-center rounded-full h-[2rem] " onClick={handleSubmit}>
                            <img src={require('../../image/google.png')} className='w-[1.5rem] h-[1.5rem]' alt="" />
                        </button>
                        <a href="/seller/login" className='text-sm hover:text-[#2962ff] font-dmsans text-center'>Already have an account?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;