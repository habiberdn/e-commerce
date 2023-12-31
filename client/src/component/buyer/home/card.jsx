import React from "react";

export default function Card(props) {
  return (
    <div className="rounded-lg  ">
      <div className="relative w-[11rem]   flex flex-col flex-start rounded-lg ">
        <a href={"/" + props.id} className="">
          <div className="mb-2 flex justify-center ">
            <img
              alt="img"
              src={require(`../../../../../backend/img/product/${props.image}`)}
              
              className="rounded-lg w-full border"
              loading="lazy"
              aria-label="image"
            />
          </div>
          <div className="grid ">
            <h1 className="font-dmsans flex font-semibold flex-start">{props.name}</h1>

          </div>
          <div className=" flex flex-col   ">
            <div className="flex flex-col gap-2">
              <h2 className="text-left w-full font-bold text-[19px] text-[#2962FF] ">
                ${props.price}
              </h2>
              <p className="text-left ">{props.sellerName}</p>
            </div>

            <div className="flex w-[5rem]   ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[15px]"
              >
                <path
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                  fill="rgba(255,185,0,1)"
                ></path>
              </svg>{" "}
              <div className=" w-[3.5rem]] flex flex-start ">
                <div className="w-[3rem] flex font-dmsans flex-start pl-[3px]">{props.ratingsAverage ? props.ratingsAverage : 0} ({props.ratingsQuantity ? props.ratingsQuantity : 0})</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
