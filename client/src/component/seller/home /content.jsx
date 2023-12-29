import React, { useState} from "react";

const Content = () => {
  
    const [isOpen, setOpen] = useState(false)
    const handleDropdown = () => {
        setOpen(!isOpen)
    }
  
    return (
        <div className="flex flex-col bg-[#f1f2f2]">
            <div className="w-[17%] bg-[#FFFF] h-screen  pl-[2rem] pt-[1rem] flex flex-col pr-[2rem]  ">
                <div className="w-full">
                    <button type="button" className="flex justify-between  items-center w-full hover:bg-gray-100 rounded-lg p-2" onClick={handleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[1.5rem] h-[2rem]"><path d="M22 20V7L20 3H4L2 7.00353V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20ZM4 9H20V19H4V9ZM5.236 5H18.764L19.764 7H4.237L5.236 5ZM15 11H9V13H15V11Z"></path></svg>
                        <p className="font-dmsans "><b className="font-extralight">Product</b></p>
                        <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

                    </button>
                    {isOpen &&
                        <ul className="flex flex-col gap-1 text-sm">
                            <li>
                                <a href="/myProduct"
                                    className="flex font-dmsans text-sm p-2 text-gray-900 transition duration-75 rounded-lg group hover:text-[#2962ff]"> My Products</a>
                            </li>
                            <li>
                                <a href="/addProduct"
                                    className="flex font-dmsans text-sm p-2 text-gray-900 transition duration-75 rounded-lg group hover:text-[#2962ff]" >Add Product</a>
                            </li> 
                        </ul>}
                </div>
            </div>
        </div>
    )
}

export default Content;