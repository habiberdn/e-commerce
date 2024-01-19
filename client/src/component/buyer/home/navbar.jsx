import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Slideover from "../utils/slide-overs";

export default function Navbar() {
  const [slide, setSlide] = useState(false);

  const handleClick = () => {
    setSlide(!slide);
  };
  return (
    <div className="flex flex-col z-10 fixed justify-center  h-[6rem] w-full bg-[#ffff] border">

      <div className="w-full bg-[#f1f2f2] p-[7px] h-[30px] text-right pl-[2rem]  pt-[5px] text-xs flex justify-start items-center ml-0">
        <a className="hover:text-[#2962ff] font-inter" href='/seller'>Start as Seller</a>
      </div>
      <div className="flex h-[5rem] items-center">
        <div
          className="flex justify-start items-center pl-[1rem] w-full h-full gap-5"
          id="name"
        >
          <button type="button" onClick={handleClick} aria-label="category">
            <Hamburger toggled={slide} size={20} />
          </button>
          {slide && <Slideover isTrue={slide} />}
          <a href="/" aria-label="home">
            <b>
              <i>
                <h4 className="font-bold text-xl " aria-label="name">E-Commerce</h4>
              </i>
            </b>
          </a>
        </div>
        <div className="flex justify-center items-center gap-1 mb-2">
          <input
            style={{ backgroundColor: "#F0F0F0" }}
            className="text-black border-[#8E8E8E] rounded-lg w-[30rem] px-3 h-[2rem] mt-[0.8rem] flex justify-center items-center"
            placeholder="Search"
          />

        </div>

        <div class="flex flex-row justify-end items-center w-full  ">
          <a href="/" className="mr-[0.8rem]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[20px]"
              aria-label="cart"
            >
              <path d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45012 21.6603 6.00241C21.6603 6.09973 21.6461 6.19653 21.6182 6.28975L19.2182 14.2898C19.0913 14.7127 18.7019 15.0024 18.2603 15.0024H6.00436V17.0024H17.0044V19.0024H5.00436C4.45207 19.0024 4.00436 18.5547 4.00436 18.0024V6.41662ZM6.00436 7.00241V13.0024H17.5163L19.3163 7.00241H6.00436ZM5.50436 23.0024C4.67593 23.0024 4.00436 22.3308 4.00436 21.5024C4.00436 20.674 4.67593 20.0024 5.50436 20.0024C6.33279 20.0024 7.00436 20.674 7.00436 21.5024C7.00436 22.3308 6.33279 23.0024 5.50436 23.0024ZM17.5044 23.0024C16.6759 23.0024 16.0044 22.3308 16.0044 21.5024C16.0044 20.674 16.6759 20.0024 17.5044 20.0024C18.3328 20.0024 19.0044 20.674 19.0044 21.5024C19.0044 22.3308 18.3328 23.0024 17.5044 23.0024Z"></path>
            </svg>
          </a>
          <div className="flex justify-end items-center gap-3 border-l pl-[15px] mr-[15px]">
            <a href="/login" className="border p-[1.1rem] w-[4rem]  rounded-full h-[2rem] items-center flex justify-center">Login</a>
            <a href="/signup" className=" p-[1.1rem] rounded-full bg-[#2962ff] text-white h-[2rem] items-center flex justify-center">Signup</a>

          </div>

        </div>
      </div>
    </div>
  );
}
