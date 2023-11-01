import React from "react";
import photo from "../../image/tour-1-3.jpg";

export default function Card(props) {
  return (
    <div className="rounded-lg mt-2 ">
      <div className="relative w-[10rem] h-[15rem] flex flex-col flex-start rounded-lg">
        <div className="mb-2" id>
          <img src={photo} alt="" className="rounded-lg" />
        </div>
        <div className="grid gap-2">
          <h4 className="font-poppins flex flex-start">Smartphone</h4>
          <h6 className="flex flex-start">Description</h6>
        </div>
        <div className="absolute flex justify-between inset-x-0 bottom-0 ">
          <h6 className="">$999.99</h6>
          <h6>Rating</h6>
        </div>
      </div>
    </div>
  );
}
