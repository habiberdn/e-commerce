import React, { useState } from 'react'
import Navbar from '../home /navbar';
import Dropdown from '../../buyer/utils/dropdownCategory'

const AddProduct = () => {
    const [digit, setDigit] = useState(0)
    const [flag, setFlag] = useState()
    const handleChange = (e) => {
        console.log(e.target)
        const { value } = e.target
        setDigit(value.length)
    }
    function addFlag(newFlag) {
        setFlag(() => {
            return [newFlag]
        })
    }
    return (
        <div>
            <Navbar />
            <div className='pl-[3rem] pt-[3rem] pr-[8rem] gap-3 flex flex-col'>
                <p className='font-dmsans text-lg'><b className='text-xl font-semibold'>Add Product</b> </p>
                <div className="border border-gray-300 p-4 pl-[2rem] pr-[3rem] pt-[1.5rem] rounded-lg flex flex-col gap-6">
                    <p className=' font-semibold'>Informasi Produk </p>
                    <div className='flex items-center w-[full] gap-10 pr-[2rem]  justify-between'>
                        <div className='w-[30%] '>
                            <label className=''>Product Name </label>
                        </div>
                        <div className='w-[70%] flex flex-col'>
                            <input type="text" className='w-full h-[2.5rem] rounded-lg border-[#8E8E8E] pl-3 placeholder:pb-4 ' placeholder='Example : Man Shoes (Type/Category) + Store' minLength={20} maxLength={80} onChange={handleChange} />
                            <div className='flex justify-between'>
                                <p className='text-xs text-[#8E8E8E]'>Tips: Product name only can contain maximum 80 character</p>
                                <p className='text-xs text-[#8E8E8E]'>{digit}/80</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center w-[full]   gap-10 pr-[2rem]  justify-between'>
                        <div className='w-[30%]    '>
                            <span className=''>Category</span>
                        </div>
                        <div className='w-[70%]  h-[4rem] '>
                            <Dropdown flag={addFlag} />
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 p-4 pl-[2rem] pr-[3rem] pt-[1.5rem] rounded-lg flex flex-col gap-6">
                <p className=' font-semibold'>Detail Product </p>

                </div>
            </div>

        </div>
    )
}

export default AddProduct;