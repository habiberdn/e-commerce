import React from "react";

export default function Card(props) {
  // import pict from `../../image/${props.image}`
  return (
    <div className="rounded-lg mt-1 ">
      <div className="relative w-[10rem] h-[17rem] flex flex-col flex-start rounded-lg ">
        <a href=" ">
          <div className="mb-2 flex justify-center" id>
            <img
              src={require(`../../image/${props.image}`)}
              alt=""
              className="rounded-lg w-[9.5rem] h-[8rem]"
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
              <svg
                className="w-[15px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
              </svg>{" "}
              <div>{props.rating}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}