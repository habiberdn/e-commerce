import React, { useState } from 'react'
import Navbar from '../home /navbar'
import Sidebar from '../utils/sidebarSeller'
import Dropdown from '../../buyer/utils/dropdownCategory'
import { useNavigate } from "react-router-dom";



const MyProduct = () => {
    const [isTrue, setTrue] = useState(true)
    const [isClick, setClick] = useState(false)
    const [value, setValue] = useState()

    const Navigate = useNavigate()
    const handleInput = () => {
        setClick(true)
    }

    const handleBlur = () => {
        setClick(false)
    }
    const handleProduct = () => {

    }

    const handleAddProduct =()=>{
        Navigate('/addProduct')
    }

    function addFlag(productCategory) {
        setValue((prev) => {
            return { ...prev, productCategory }
        })
    }
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex bg-[#f1f2f2] '>
                <Sidebar />
                <div className='p-6 w-full flex flex-col gap-6 '>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-dmsans text-xl'>List Product</h1>
                        <button className='text-white bg-[#2962ff] p-2 rounded-xl' onClick={handleAddProduct}>+ Add Product</button>
                    </div>
                    <div className='bg-[#ffff] p-4 gap-4   flex flex-col '>
                        <div className='flex border-b-2 '>
                            <button className='focus:text-[#2962ff] p-2  focus:border-[#2962ff]' onClick={handleProduct}>All Product
                            </button>
                        </div>
                        <div className='flex gap-4 z-10'>
                            <div className={`w-[30%] flex items-center border ${isClick ? 'border-[#2962ff]' : 'border-[#8E8E8E]'} pl-2 rounded-lg`}>
                                <span className='text-[#8E8E8E] font-dmsans w-[20px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="currentColor"></path></svg>
                                </span>
                                <input type="text" className='rounded-lg  w-full focus:ring-0 border-none' onClick={handleInput} onBlur={handleBlur} placeholder='Search Product Name' />
                            </div>
                            <div className='w-[25%] z-20  '>
                                <Dropdown setValue={addFlag} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProduct