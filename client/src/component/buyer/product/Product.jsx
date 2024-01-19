import React, { useEffect, useState } from "react";
import Navbar from "../home/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import RatingStats from "../utils/ratingStats";

export default function Product() {
  let params = useParams();
  const [Product, setProduct] = useState();
  const [count, setCount] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [rating, setRating] = useState({});
  const [valRating, setValRating] = useState({})
  const [user, setUser] = useState()
  const [content, setContent] = useState({
    name: "",
    review: ""
  });
  console.log(Product)
  useEffect(() => {
    Product && axios
      .get(`http://127.0.0.1:3001/api/v1/rating/${params.product}`)
      .then((response) => {
        setRating(response.data.getData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [params.product]);

  useEffect(() => {
    // loop ratings value 
    const allRatings = Object.values(rating).map((rating) => rating.rating);
    return setValRating(allRatings)

  }, [rating])

  useEffect(() => {
    //get user data 
    axios
      .get(`http://127.0.0.1:3001/api/v1/users`)
      .then((response) => {
        setUser(response.data.users);
      });
  }, [])

  useEffect(() => {
    //get review 
    if (user) {
      const name = Object.values(user).map((val) => val.name);
      setContent((prevContent) => ({ ...prevContent, name: name }));
    }
    //get rating value
    if (rating) {
      const review = Object.values(rating).map((val) => val.review);
      setContent((prevContent) => ({ ...prevContent, review: review }));
    }
  }, [user, rating])

  useEffect(() => {
    //get product 
    axios
      .get(`http://127.0.0.1:3001/api/v1/product/${params.product}`)
      .then((response) => {
        setProduct(response.data.getData);
      });
  }, [params.product]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    count > 1 && setCount(count - 1);
  };

  function expand() {
    setExpanded(!expanded);
  }
  return (
    <div className="flex flex-col gap-3 bg-[#f1f2f2]">
      <Navbar />
      <div className="flex flex-col bg-[#f1f2f2] mt-[6rem] pb-[2rem]  gap-[1rem] overflow-x-hidden " >

        <div className=" flex gap-5 p-[30px] bg-[#ffff] ml-[1.6rem] mr-[1.6rem] mt-[1.5rem]">
          <div className="flex gap-5 ">
            <div className="">
              <img
                src={Product && require(`../../../../../backend/img/product/${Product.image}`)}
                className="w-[23rem] border h-[23rem]"
                alt="Product"

              />
            </div>
            <div className="flex flex-col gap-2  w-[26rem] ">
              <h4 className="font-inter text-xl">{Product && Product.name}</h4>
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
                  {Product && Product.ratingsAverage
                    ? Product.ratingsAverage
                    : 0}{" "}
                  ({Product ? Product.ratingsQuantity : 0})
                </h4>
              </div>
              <h4 className="text-3xl font-inter">
                ${Product && Product.price}
              </h4>

              <div className="flex flex-col w-[25rem]">
                <p className="border-b-2 pb-[7px]">Description</p>
                <p className="pt-[5px]">{Product && Product.description}</p>
              </div>
            </div>

          </div>
          <div
            className={
              "w-[16rem] flex flex-col float-right rounded-xl ml-[4rem] border border-[#8E8E8E] p-[7px] gap-3 static" +
              (expanded ? " h-[16rem]" : " h-[12.5rem] ")
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
              <p className="font-inter">Subtotal</p>
              <p className="font-inter">
                ${Product && (Product.price * count).toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col justify-start w-full gap-1">
              {expanded ? (
                <input
                  className="rounded-lg"
                  placeholder="Take a note"
                // onChange={handleChange}
                />
              ) : null}
              <button
                className="text-[#2962ff] font-inter text-left text-sm "
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
        <div className="bg-[#ffff] h-[8rem] mr-[1.6rem] ml-[1.6rem]"> 

        </div>
        <div className=" flex gap-5 p-[30px] bg-[#ffff] ml-[1.6rem] mr-[1.6rem]">
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
                {Product && Product.ratingsAverage
                  ? Product.ratingsAverage
                  : 0}
              </div>
            </div>
            <div>
              <h4 className="text-sm mb-3">
                {" "}
                {Product && Product.ratingsQuantity
                  ? Product.ratingsQuantity
                  : 0}{" "}
                Rating{" "}
                {Product && Product.ReviewQuantity
                  ? Product.ReviewQuantity
                  : 0}{" "}
                Review{" "}
              </h4>
            </div>
            <div>
              <RatingStats length={rating && rating.length} rating={valRating} />
            </div>
          </div>
          <div className=" w-full  flex flex-col">
            {valRating?.length > 0 ? (
              valRating.map((val, index) => (
                <div key={index} className="border  p-[7px] flex ml-[20px] w-[40rem] mt-[20px] rounded-xl pl-[10px] flex-col gap-1">
                  <div className="flex">
                    {[...Array(val)].map((_, i) => ( // create new array with length of val 
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-[18px] h-[2rem]"
                      >
                        <path
                          d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                          fill="rgba(255,185,0,1)"
                        ></path>
                      </svg>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <div className="w-[30px] bg-[#f1f2f2] rounded-full h-[30px] ">.</div>
                    <div>
                      {content.name && content.name[index]}
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    {content.review && content.review[index]}
                  </div>
                </div>
              ))
            )
              : <p className="w-[full] text-gray-500 h-full flex justify-center items-center">Don't have any review!</p>}
          </div>
        </div>
      </div>
    </div>

  );
}
