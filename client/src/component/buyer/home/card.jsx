import React from "react";

export default function Card(props) {
  return (
    <div className="rounded-lg  ">
      <div className="relative w-[11rem] h-[18.5rem] flex flex-col flex-start rounded-lg ">
        <a href={"/" + props.id}>
          <div className="mb-2 flex justify-center">
            <img
              alt="image"
              src={require(`../../image/${props.image}`)}
              sizes="(max-width: 600px) 300px,
              (max-width: 900px) 600px,
              900px"
              className="rounded-lg w-[10.5rem] h-[9.5rem] "
              loading="lazy"
            
              aria-label="image"
            />
          </div>
          <div className="grid gap-y-1">
            <h1 className="font-dmsans flex flex-start"><b>{props.name}</b></h1>
            <h2 className="flex text-left w-full h-[59px] font-dmsans text-ellipsis overflow-hidden  ">
              {props.description}
            </h2>
          </div>
          <div className=" flex flex-col mt-2 gap-2 ">
            <h2 className="text-left w-full ">
              <b className="text-[#ff7f17] font-dmsans">${props.price}</b>
            </h2>
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
