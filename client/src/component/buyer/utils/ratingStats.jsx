import React, { useState, useEffect } from "react";

export default function RatingStats(props) {

  const ratingProps = props.rating
  const [stars, setStars] = useState({
    satu: 0,
    dua: 0,
    tiga: 0,
    empat: 0,
    lima: 0
  })
  useEffect(() => {
    console.log(ratingProps)
    Object.values(ratingProps).map((val) => {
      console.log(val)
      val === 1 && setStars(counter => ({ ...counter, satu: counter.satu + 1 }))
      val === 2 && setStars(counter => ({ ...counter, dua: counter.dua + 1 }))
      val === 3 && setStars(counter => ({ ...counter, tiga: counter.tiga + 1 }))
      val === 4 && setStars(counter => ({ ...counter, empat: counter.empat + 1 }))
      val === 5 && setStars(counter => ({ ...counter, lima: counter.lima + 1 }))
      return val
    })
    
  }, [ratingProps])
  console.log(stars.empat)
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
        <div className={`h-5 bg-yellow-300 rounded w-[${stars.satu > 0 ? (stars.satu / (stars.satu + stars.dua + stars.tiga + stars.empat + stars.lima)) * 100 : 0}%]`}></div>

        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {stars.satu}
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
        <div className={`h-5 bg-yellow-300 rounded w-[${stars.dua > 0 ? (stars.dua / (stars.satu + stars.dua + stars.tiga + stars.empat + stars.lima)) * 100 : 0}%]`}></div>

        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {stars.dua}

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
        <div className={`h-5 bg-yellow-300 rounded w-[${stars.tiga > 0 ? (stars.tiga / (stars.satu + stars.dua + stars.tiga + stars.empat + stars.lima)) * 100 : 0}%]`}></div>

        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {stars.tiga}

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
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className={`h-5 bg-yellow-300 rounded w-[${stars.empat > 0 ? (stars.empat / (stars.satu + stars.dua + stars.tiga + stars.empat + stars.lima)) * 100 : 0}%]`}></div>

        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {stars.empat}

        </span>
      </div>
      <div className="flex items-center mt-4 gap-1">
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
          1
        </h4>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          
        <div className={`h-5 bg-yellow-300 rounded w-[${stars.lima > 0 ? (stars.lima / (stars.satu + stars.dua + stars.tiga + stars.empat + stars.lima)) * 100 : 0}%]`}></div>

        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {stars.lima}
        </span>
      </div>
    </div>
  );
}
