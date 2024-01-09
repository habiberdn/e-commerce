import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const cookies = new Cookies();
    const Navigate = useNavigate()

    const username = useSelector((state) => state.user.username);

    const userEmail = useSelector((state) => state.user.email);

    const handleMouseEnter = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        cookies.remove('jwtseller', { path: '/seller' });
        cookies.remove('jwtseller', { path: '/addProduct' });

        dispatch({ type: 'logout' })
        localStorage.removeItem('email');
        localStorage.removeItem('username');

        handleMouseLeave()

        Navigate('/seller/login')
    }
    localStorage.setItem('username', username)
    localStorage.setItem('email', userEmail)

    return (
        <div className='flex justify-between pl-[2rem] z-30 bg-[#ffff] w-full border h-[4rem] items-center fixed'>
            <div>
                <a href="/seller" aria-label="home">
                    <b>
                        <i>
                            <h4 className="font-bold text-xl " aria-label="name">E-Commerce Seller</h4>
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
            <div className='flex flex-col ' >
                <div className=" flex items-center justify-center  ">
                    <div className="relative group mr-[1rem]  ">
                        <button
                            id="dropdown-button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white  z-10 rounded-md shadow-sm focus:outline-none hover:bg-gray-100 border-none"
                            onClick={handleMouseEnter}
                        >
                            <span className="mr-2 flex items-center gap-2 "> <svg xmlns="http://www.w3.org/2000/svg" vie wBox="0 0 24 24" width="24" height="24"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"></path></svg>{`Hi! ${localStorage.getItem('username', username)}`}</span>
                            {isOpen &&
                                <ul
                                    className='absolute border right-0 mt-[2.5rem] rounded-md shadow-lg w-[70%] bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 mr-[1rem] z-10'
                                >
                                    <li className='  hover:bg-gray-100'>

                                        <button className='text-right w-full justify-between  active:bg-blue-100  cursor-pointer rounded-md p-2  flex items-center'  >
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[1.5rem]' viewBox="0 0 24 24"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path></svg>
                                            Settings
                                        </button>
                                    </li>
                                    <li className=' hover:bg-gray-100'>

                                        <button className='flex text-right w-full justify-between hover:bg-gray-100 active:bg-blue-100 text-[#ff0000] cursor-pointer rounded-md p-2   items-center' onClick={handleLogout} >
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[1.5rem]' viewBox="0 0 24 24"><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z" fill="rgba(255,0,0,1)"></path></svg>
                                            Log Out
                                        </button>
                                    </li>

                                </ul>}

                        </button>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Navbar