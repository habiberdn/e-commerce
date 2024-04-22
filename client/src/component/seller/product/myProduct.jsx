import React, { useState, useEffect } from 'react'
import Navbar from '../home/navbar'
import Sidebar from '../utils/sidebarSeller'
import Dropdown from '../../buyer/utils/dropdownCategory'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Switch from '@mui/material/Switch';
import ActionDropdown from '../utils/dropdownAction';

const MyProduct = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [product, setProduct] = useState()
    const [isClick, setClick] = useState(false)
    const [value, setValue] = useState()
    const [valCheckBox, setCheckBox] = useState()

    const Navigate = useNavigate()
    const handleInput = () => {
        setClick(true)
    }

    useEffect( () => {
         axios.get(`http://127.0.0.1:3001/api/v1/product/${localStorage.getItem('username')}`).then((response) => {
            setProduct(response)
        })
    }, [])

    const handleBlur = () => {
        setClick(false)
    }

    const handleAddProduct = () => {
        Navigate('/addProduct')
    }

    const handleProduct = ()=>{}

    const handleCheckbox = (e) => {
        const { name, checked } = e.target

        setCheckBox((prev) => {
            return {
                ...prev,
                [name]: checked && 'Checked'
            }
        })
    }

    function addFlag(productCategory) {
        setValue((prev) => {
            return { ...prev, productCategory }
        })
    }

    return (
        <div className='flex flex-col overflow-hidden h-screen '>
            <Navbar />
            <div className='flex bg-[#f1f2f2]    '>
                <Sidebar />
                <div className='p-6 w-full flex flex-col  gap-6 pt-[5rem] '>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-dmsans text-xl'>List Product</h1>
                        <button className='text-white bg-[#2962ff] px-3 p-2 rounded-xl ' onClick={handleAddProduct}>+ Add Product</button>
                    </div>
                    <div className='bg-[#ffff] p-4 gap-4  flex flex-col'>
                        <div className='flex border-b-2 '>
                            <button className='focus:text-[#2962ff] p-2 focus:border-[#2962ff] font-dmsans' onClick={handleProduct}>
                                All Product
                            </button>
                        </div>
                        <div className='flex gap-4 h-[2.7rem] '>
                            <div className={`w-[30%] flex items-center border ${isClick ? 'border-[#2962ff]' : 'border-[#8E8E8E]'} pl-2 rounded-lg`}>
                                <span className='text-[#8E8E8E] font-dmsans w-[20px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="currentColor"></path></svg>
                                </span>
                                <input type="text" className='rounded-lg  w-full focus:ring-0 border-none' onClick={handleInput} onBlur={handleBlur} placeholder='Search Product Name' />
                            </div>
                            <div className='w-[25%] z-10 '>
                                <Dropdown setValue={addFlag} />
                            </div>
                        </div>
                        <div>
                            <div className='flex w-full border-t border-b p-2 pl-3  '>
                                <div className='w-[4rem]'>

                                </div>
                                <div className='w-[23rem] flex items-center '>
                                    <h1 className='font-dmsans'>Product</h1>
                                </div>
                                <div className='w-[12rem] flex items-center '>
                                    <h1 className='font-dmsans'>Price</h1>
                                </div>
                                <div className='w-[10rem] flex  items-center '>
                                    <h1 className='font-dmsans'>Stock</h1>
                                </div>
                                <div className='w-[10rem] flex  items-center '>
                                    <h1 className='font-dmsans'>Active</h1>
                                </div>
                            </div>
                            {product && product.data.sellerProduct.map((value, index) => {
                                return (
                                    <div className='flex p-2 items-center  h-[5rem] border-b pl-3' key={index}>
                                        <div className='w-[4rem] flex flex-col justify-start '>
                                            <input type="checkbox" name={value.name} checked={valCheckBox && valCheckBox[value.name] === 'Checked'} onChange={handleCheckbox} className='rounded-sm' />
                                        </div>
                                        <div className='flex  w-[23rem] gap-2 items-center'>
                                            <img className='w-[4rem] rounded-lg' src={require(`../../../../../backend/img/product/${value.image}`)} alt="" />
                                            <h1 className='font-dmsans'>{value.name}</h1>
                                        </div>
                                        <div className='flex  w-[12rem] items-center'>
                                            <p className='font-dmsans'>{value.price}</p>
                                        </div>
                                        <div className='flex w-[10rem] items-center pl-[13px]'>
                                            <p className='font-dmsans'>{value.stock}</p>
                                        </div>
                                        <div className='flex  w-[7rem] items-center  '>
                                            <Switch {...label} defaultChecked name='status' />
                                        </div>
                                        <div className='flex items-center'>
                                            <ActionDropdown id={value.id} value={value} />
                                        </div>
                                    </div>
                                )

                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProduct
