import React, { useState, useEffect } from 'react'
import Navbar from '../home /navbar';
import Dropdown from '../../buyer/utils/dropdownCategory'
import Switch from '@mui/material/Switch';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ChakraProvider } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const cookies = new Cookies();
    const [digit, setDigit] = useState(0)
    const [isClick, setClick] = useState(false)
    const [isSuccess, setSuccess] = useState("")
    const [value, setValue] = useState({
        name: "",
        description: "",
        price: "",
        image: null,
        productCategory: "",
        stock: ""
    })
    const Navigate = useNavigate()
    const handleChange = (e) => {
        const { value, name, files } = e.target
        if (name === "image" && files && files[0]) {
            setValue((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        } else {
            setValue((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
        setDigit(value.length)

    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let form = new FormData();
            form.append('name', value.name);
            form.append('description', value.description);
            form.append('price', value.price);
            form.append('image', value.image);
            form.append('productCategory', value.productCategory);
            form.append('stock', value.stock);
            form.append('sellerName', localStorage.getItem('username'))
            const response = await axios.post('http://127.0.0.1:3001/api/v1/product',
                form
                , {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${cookies.get('jwtseller')}`,
                    }
                })
            response.status === 201 ?
                setSuccess(true) : setSuccess(false)

            response.status === 201 && setTimeout(()=>{
                Navigate('addProduct')
            },1200)
            
            console.log(response)
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(()=>{
        isSuccess && setTimeout(    
            Navigate('/addProduct')
            , 1000)
    },[isSuccess])
    
    function addFlag(productCategory) {
        setValue((prev) => {
            return { ...prev, productCategory }
        })
    }

    const handleInput = () => {
        setClick(true)
    }

    const handleBlur = () => {
        setClick(false)
    }
    return (
        <div>
            <Navbar />
            <form className='pl-[3rem] pt-[3rem] pr-[8rem] gap-3 flex flex-col mb-[3rem]' onSubmit={handleSubmit}>
                <p className='font-dmsans text-lg'><b className='text-xl font-semibold'>Add Product</b> </p>
                <div className="border border-gray-300 p-4 pl-[2rem] pr-[3rem] pt-[1.5rem] rounded-lg flex flex-col gap-6">
                    <p className=' font-semibold font-dmsans'>Informasi Produk </p>
                    <div className='flex items-center w-[full] gap-10 pr-[2rem]  justify-between'>
                        <div className='w-[30%] '>
                            <label className='font-dmsans'>Product Name </label>
                        </div>
                        <div className='w-[70%] flex flex-col'>
                            <input type="text" className='w-full h-[2.6rem] rounded-lg border-[#8E8E8E] pl-3  placeholder:font-dmsans ' placeholder='Example : Man Shoes (Type/Category) + Store' minLength={5} maxLength={80} onChange={handleChange} required name='name' />
                            <div className='flex justify-between'>
                                <p className='text-xs text-[#8E8E8E] font-dmsans'>Tips: Product name only can contain maximum 80 character</p>
                                <p className='text-xs text-[#8E8E8E] font-dmsans'>{digit}/80</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center w-[full]   gap-10 pr-[2rem]  justify-between'>
                        <div className='w-[30%]'>
                            <span className='font-dmsans'>Category</span>
                        </div>
                        <div className='w-[70%] z-20  h-[4rem]'>
                            <Dropdown setValue={addFlag} />
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 p-4 pl-[2rem] pr-[3rem] pt-[1.5rem] rounded-lg flex flex-col gap-6">
                    <p className=' font-semibold font-dmsans'>Detail Product </p>
                    <div className='flex items-center w-[full] gap-10 pr-[2rem]  justify-between'>
                        <div className='w-[30%] '>
                            <label className='font-dmsans'>Photo </label>
                        </div>
                        <div className='w-[70%]'>
                            <input type="file" required name='image' id='image' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex items-center w-[full] gap-10 pr-[2rem]  justify-between'>
                        <div className='w-[30%] flex justify-start top-0     '>
                            <label className='font-dmsans'>Description Product </label>
                        </div>
                        <div className='w-[70%]'>
                            <input type="text" className=' w-full rounded-lg border-[#8E8E8E] palceholder:font-dmsans' required placeholder='Description' name='description' onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 p-4 pl-[2rem] pr-[3rem] pt-[1.5rem] rounded-lg flex flex-col gap-6">
                    <p className=' font-semibold font-dmsans'>Price Product </p>
                    <div className='flex items-center w-[full] gap-10 pr-[2rem]  justify-between'>
                        <div className='w-[30%]'>
                            <label htmlFor="" className='font-dmsans'>Price</label>
                        </div>
                        <div className={`w-[70%] flex items-center border ${isClick ? 'border-[#2962ff]' : 'border-[#8E8E8E]'} pl-2 rounded-lg`}>
                            <span className='text-[#8E8E8E] font-dmsans'>$</span>
                            <input type="text" className='rounded-lg  w-full focus:ring-0 border-none' onClick={handleInput} onBlur={handleBlur} required name='price' onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 p-4 pl-[2rem] pr-[3rem] pt-[1.5rem] rounded-lg flex flex-col gap-6">
                    <p className='font-dmsans'>Management Product</p>
                    <div className='flex items-center w-[full] gap-10 pr-[2rem]  justify-between'>
                        <div className='w-[30%]'>
                            <label htmlFor="" className='font-dmsans'>Stock </label>
                        </div>
                        <div className='w-[70%]'>
                            <input type="text" className=' w-full rounded-lg border-[#8E8E8E]' placeholder='0' name='stock' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex items-center w-[full] gap-7 pr-[2rem]  justify-between'>
                        <div className='w-[30%]'>
                            <label htmlFor="" className='font-dmsans'>Status </label>
                        </div>
                        <div className='w-[70%] '>
                            <Switch {...label} defaultChecked disabled name='status' />
                        </div>
                    </div>

                </div>
                {isSuccess ? <ChakraProvider >
                    <Alert status='success'>
                        <AlertIcon />
                        Data uploaded to the server !
                    </Alert>
                </ChakraProvider> : isSuccess === 'error' &&
                <ChakraProvider ><Alert status='error'>
                    <AlertIcon />
                    There was an error processing your request
                </Alert></ChakraProvider>}

                <div className='flex justify-end p-1  gap-2'>
                    <button className='border border-gray-300 rounded-xl w-[5rem] p-2 font-dmsans'>Cancel</button>
                    <button className='bg-[#2962ff] text-white rounded-xl w-[5rem] p-2 font-dmsans' type='submit'>Save</button>
                </div>
            </form>

        </div>
    )
}

export default AddProduct;