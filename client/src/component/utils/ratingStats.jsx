import React from "react";

export default function RatingStats(props) {
    console.log(props)
  return (
    <div>
      <div className="flex items-center mt-4 w-[20rem] gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[15px]"
        >
          <path
            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
            fill="rgba(255,185,0,1)"
          ></path>
        </svg>
        <h4 className="text-sm font-medium text-blue-600 dark:text-blue-500 ">
          5
        </h4>

        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-yellow-300 rounded w-[70%]"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          70%
        </span>
      </div>
      <div class="flex items-center mt-4 gap-1">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[15px]"
        >
          <path
            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
            fill="rgba(255,185,0,1)"
          ></path>
        </svg>
        <h4 className="text-sm font-medium text-blue-600 dark:text-blue-500 ">
          4 
        </h4>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-yellow-300 rounded w-[17%]"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          17%
        </span>
      </div>
      <div class="flex items-center mt-4 gap-1">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[15px]"
        >
          <path
            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
            fill="rgba(255,185,0,1)"
          ></path>
        </svg>
        <h4 className="text-sm font-medium text-blue-600 dark:text-blue-500 ">
          3 
        </h4>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-yellow-300 rounded w-[8%]"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          8%
        </span>
      </div>
      <div class="flex items-center mt-4 gap-1">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[15px]"
        >
          <path
            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
            fill="rgba(255,185,0,1)"
          ></path>
        </svg>
        <h4 className="text-sm font-medium text-blue-600 dark:text-blue-500 ">
          2 
        </h4>
        <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div class="h-5 bg-yellow-300 rounded w-[4%]"></div>
        </div>
        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
          4%
        </span>
      </div>
      <div class="flex items-center mt-4 gap-1">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[15px]"
        >
          <path
            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
            fill="rgba(255,185,0,1)"
          ></path>
        </svg>
        <h4 class="text-sm font-medium text-blue-600 dark:text-blue-500 ">
          1 
        </h4>
        <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div class="h-5 bg-yellow-300 rounded w-[1%]"></div>
        </div>
        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
          1%
        </span>
      </div>
    </div>
  );
}
