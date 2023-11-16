import React, { useEffect, useState } from "react";
import Navbar from "../home/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product() {
  let params = useParams();
  const [isProduct, setProduct] = useState();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/api/v1/product/${params.product}`)
      .then((response) => {
        setProduct(response.data.getData);
      });
  });

  return (
    <div className="flex flex-col bg-[#f1f2f2] mt-[3.7rem] pb-[2rem]  gap-2 overflow-x-hidden">
      <Navbar />
      <div className=" flex gap-3  bg-[#ffff] ml-[1.6rem] mt-[1rem]">
        <div className="w-">
          <img src={isProduct && require(`../../image/${isProduct.image}`)} className="w-[9.5rem] h-[8rem]" alt="Product" />
        </div>
        <div className="flex flex-col">
            <h4 className="font-poppins">{isProduct && isProduct.name}</h4>
        </div>
      </div>
    </div>
  );
}
