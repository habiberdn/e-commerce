import React from 'react'
import Default from '../../image/default.jpg'

const Navbar = () => {
    return (
        <div className='flex justify-between pl-[2rem] w-full border h-[4rem] items-center'>
            <div>
                <a href="/seller" aria-label="home">
                    <b>
                        <i>
                            <h4 className="" aria-label="name">E-Commerce Seller</h4>
                        </i>
                    </b>
                </a>
            </div>
            <div className='flex items-start'>
                <input
                    style={{ backgroundColor: "#F0F0F0" }}
                    className="text-black border-[#8E8E8E] rounded-lg w-[30rem] px-3 h-[2rem]  flex justify-center items-center"
                    placeholder="Search"
                />
            </div>
            <div className='pr-[2rem] flex gap-2  items-center'>
                <img src={`${Default}`} alt="image" width={50} className='rounded-full ' />
                <p className='font-dmsans'>Hkaolshop</p>
            </div>
        </div>
    )
}
export default Navbar