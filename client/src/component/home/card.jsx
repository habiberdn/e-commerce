import React from "react";

export default function Card(props) {
  console.log(props)
  return (
    <div className="rounded-lg  ">
      <div className="relative w-[10rem] h-[17rem] flex flex-col flex-start rounded-lg ">
        <a href={"/" +props.id}>
          <div className="mb-2 flex justify-center" >
            <img
              src={require(`../../image/${props.image}`)}
              alt=""
              className="rounded-lg w-[9.5rem] h-[8rem]   "
            />
          </div>
          <div className="grid gap-y-1">
            <h4 className="font-poppins flex flex-start">{props.name}</h4>
            <h6 className="flex text-left w-full h-[59px] text-ellipsis overflow-hidden  ">
              {props.description}
            </h6>
          </div>
          <div className=" flex flex-col mt-2 gap-2 ">
            <h6 className="text-left w-full ">
              <b className="text-[#ff7f17]">${props.price}</b>
            </h6>
            <div className="flex w-[30px] justify-between ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[15px]">
              <path
                d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                fill="rgba(255,185,0,1)"
              ></path>
            </svg>{" "}
              <div>{props.ratingsAverage?props.ratingsAverage:0}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
