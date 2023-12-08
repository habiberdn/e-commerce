import React from "react";
import Visa from "../../image/Visa.png";
import MasterCard from "../../image/Master Card.webp";
import Facebook from '../../image/facebook.webp';
import Instagram from '../../image/instagram.webp';
import X_logo from '../../image/X_logo.jpg';



export default function Footer() {
  return (
    <div className="ml-[2rem] mt-4 flex h-[18rem] gap-[3rem]">
      <div className="flex flex-col gap-2">
        <b>
          <p> E-Commerce</p>
        </b>
        <div className="text-base flex flex-col gap-2">
          <p>About E-commerce</p>
          <p>Career</p>
          <p>Blog</p>
          <p>Flash Sale</p>
          <p>Contact Media</p>
          <p>BrideStrory</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <b>
          <p>Help and Guide</p>
        </b>
        <div className="text-base flex flex-col gap-2">
          <p>E-Commerce Care</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Partner</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <b className="flex justify-center">
          <p className="">Payment</p>
        </b>
        <div className="flex gap-2">
          <img src={Visa} alt="" className="w-[3.5rem] h-[3rem]" />
          <img src={MasterCard} alt="" className="w-[3.5rem] h-[3rem]" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <b className="flex justify-center">
          <p className="">Follow Us </p>
        </b>
        <div className="flex gap-2">
          <div className="w-[2.5rem] h-[2.5rem] relative overflow-hidden rounded-full ">
            <img src={Facebook} alt="" className="w-full h-full object-cover object-center"/>
          </div>
            <img src={Instagram} alt=""className="w-[3rem] h-[2rem] rounded-full" />
            <img src={X_logo} alt="" className="w-[2rem] h-[2rem] rounded-full"/>
        </div>
      </div>
    </div>
  );
}
