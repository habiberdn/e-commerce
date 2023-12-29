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
        <div className='flex justify-between pl-[2rem] w-full border h-[4rem] items-center'>
            <div>
                <a href="/seller" aria-label="home">
                    <b>
                        <i>
                            <h4 className="font-bold text-xl" aria-label="name">E-Commerce Seller</h4>
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
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white  z-10 rounded-md shadow-sm focus:outline-none hover:text-[#2962ff] border-none"
                            onClick={handleMouseEnter}
                        >
                            <span className="mr-2 flex items-center gap-2 "> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"></path></svg>{`Hi! ${localStorage.getItem('username', username)}`}</span>
                            {isOpen &&
                                <ul
                                    className='absolute border right-0 mt-[2.5rem] rounded-md shadow-lg w-[80%] bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 mr-[1rem] z-10'
                                >
                                    <li>
                                        <button className='text-right w-full justify-end hover:bg-gray-100 active:bg-blue-100 text-[#ff0000] cursor-pointer rounded-md p-2  flex items-center' onClick={handleLogout} >
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