import React from "react";
import "../style.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <div class="flex bg-gray-800 h-[3.5rem] text-white w-screen">
      <div
        class="flex justify-start items-center w-full h-full ml-[1.5rem]"
        id="name"
      >
        <a href="/">
          <b>
            <i>
              <h4>E-Commerce</h4>
            </i>
          </b>
        </a>
      </div>
      <div className="flex gap-2">
        <input className="text-black rounded-md w-[30rem] h-[2rem] mt-[0.8rem] flex justify-center items-center" placeholder="Search"/>
          <button className="bg-slate-500 rounded-lg h-[2rem] mt-[0.8rem] w-[3rem] flex justify-center items-center">
            <BsSearch />
          </button>
      </div>
      <div class="flex justify-end items-center w-full  mr-[2rem] gap-4">
      <a href="/cart" className="mr-[1rem] w-[1rem] "><AiOutlineShoppingCart/></a> 
        <a className="border-white z-10" href="/login">
          Login
        </a>
        <a className="border-white">Logout</a>
      </div>
    </div>
  );
}
