import React, { useEffect, useState } from "react";
import Navbar from "../home/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import RatingStats from "../utils/ratingStats";

export default function Product() {
  let params = useParams();
  const [isProduct, setProduct] = useState();
  const [count, setCount] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState();
  const [rating, setRating] = useState({});
  const [isRating, setValRating] = useState({});
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContent((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    count > 1 && setCount(count - 1);
  };

  function expand() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/api/v1/rating/${params.product}`)
      .then((response) => {
        setRating(response.data.getData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  console.log(rating);
  useEffect(() => {
    if (!loading) {
      Object.keys(rating).forEach((val) => setValRating(rating[val].rating));
    }
  }, [rating, loading]);
  console.log(isRating);
  // useEffect(() => {
  //   Object.keys(rating && rating).forEach((val) => {
  //     setValRating(rating[val]); // Updates state (asynchronous)
  //     console.log('Updated state:', isRating);
  //   });
  // }, [rating]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/api/v1/product/${params.product}`)
      .then((response) => {
        setProduct(response.data.getData);
      });
  }, []);

  return (
    <div className="flex flex-col bg-[#f1f2f2] mt-[3.7rem] pb-[2rem]  gap-2 overflow-x-hidden">
      <Navbar />
      <div className=" flex gap-5 p-[30px] bg-[#ffff] ml-[1.6rem] mt-[1rem]">
        <div className="">
          <img
            src={isProduct && require(`../../image/${isProduct.image}`)}
            className="w-[23rem] border h-[21rem]"
            alt="Product"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-inter text-xl">{isProduct && isProduct.name}</h4>
          <div className="flex gap-2">
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
            <h4 className="font-inter">
              {isProduct && isProduct.ratingsAverage
                ? isProduct.ratingsAverage
                : 0}{" "}
              ({isProduct ? isProduct.ratingsQuantity : 0})
            </h4>
          </div>
          <h4 className="text-3xl font-inter">
            ${isProduct && isProduct.price}
          </h4>

          <div className="flex flex-col">
            <p className="border-b-2 pb-[7px]">Description</p>
            <p className="pt-[5px]">{isProduct && isProduct.description}</p>
          </div>
        </div>
        <div
          className={
            "w-[16rem] flex flex-col rounded-xl ml-[4rem] border border-[#8E8E8E] p-[7px] gap-3" +
            (expanded ? " h-[16rem]" : " h-[12.5rem]")
          }
        >
          <p>Set Amount and Note</p>
          <div className="flex justify-center w-[4rem] h-[2.2rem]  rounded-lg items-center border border-[#8E8E8E]">
            <div className="flex gap-2  ">
              <button onClick={decrementCount}>-</button>
              {count}
              <button className="text-[#2962ff]" onClick={incrementCount}>
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-inter">Subtotal </p>
            <p className="font-inter">
              ${isProduct && (isProduct.price * count).toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col justify-start w-full gap-1">
            {expanded ? (
              <input
                className="rounded-lg"
                placeholder="Take a note"
                onChange={handleChange}
              />
            ) : null}
            <button
              className="text-[#2962ff] font-inter text-left text-sm"
              onClick={expand}
            >
              <b>{expanded ? "Cancel Note" : "Add Note"} </b>
            </button>
          </div>
          <div className="flex justify-between gap-1">
            <button className="border border-[#2962FF] text-[#2962FF] rounded-lg h-[2rem] w-[50%]">
              Buy
            </button>
            <button className="bg-[#2962FF] text-[#FFFF] rounded-lg h-[2rem] w-[50%]">
              +Cart
            </button>
          </div>
        </div>
      </div>
      <div className=" flex gap-5 p-[30px] bg-[#ffff] ml-[1.6rem] mt-[1rem]">
        <div className="flex flex-col gap-1 ">
          <h4 className="font-inter text-lg">Review</h4>
          <div className="flex gap-1">
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
            <div className="text-2xl">
              {isProduct && isProduct.ratingsAverage
                ? isProduct.ratingsAverage
                : 0}
            </div>
          </div>
          <div>
            <h4 className="text-sm mb-3">
              {" "}
              {isProduct && isProduct.ratingsQuantity
                ? isProduct.ratingsQuantity
                : 0}{" "}
              Rating{" "}
              {isProduct && isProduct.ReviewQuantity
                ? isProduct.ReviewQuantity
                : 0}{" "}
              Review{" "}
            </h4>
          </div>
          <div>
            <RatingStats length={rating && rating.length} rating={isRating} />
          </div>
        </div>
      </div>
    </div>
  );
}
