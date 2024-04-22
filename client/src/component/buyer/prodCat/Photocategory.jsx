import React, { useState, useEffect } from "react";
import Navbar from "../home/navbar";
import Footer from '../home/footer'
import Dropdown from "../utils/dropdown";
import axios from "axios";
import Card from "../home/card";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from '../utils/rating'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PhotographyCat() {
  const [isData, setData] = useState("");
  const [flag, setFlag] = useState("")

  function addFlag(newFlag) {
    setFlag(() => {
      return [newFlag]
    })
  }

  const valueFlag = flag[0];
  // console.log(isData && isData)
  useEffect(() => {
    if (valueFlag) {
      axios.get(`http://127.0.0.1:3001/api/v1/product/Photography/${valueFlag}`).then(
        (response) => {
          setData(response.data.getData);
        },
        [valueFlag]
      );
    } else {
      axios.get(`http://127.0.0.1:3001/api/v1/product/Photography`).then(
        (response) => {
          setData(response.data.getData);
        },
        [valueFlag]
      )
    }
  });
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col bg-[#f1f2f2] mt-[5.5rem]  h-screen">
        <div className="ml-[1.6rem] w-full mt-[1.5rem] flex gap-24">
          <div className="flex flex-col gap-3">
            <div className=" translate-y-[10px]">
              <h4 className="text-[#2962FF]  flex gap-2 font-dmsans">
                Home <p className="text-black">&gt;</p> Category
                <p className="text-black">&gt;</p> Photography
              </h4>
            </div>
            <div className="ml-[3px] flex flex-col gap-5">
              <div className="bg-[#FFFF] h-[9rem] rounded-lg w-[16rem] mt-[2rem] gap-2">
                <div className="ml-[20px] gap-3 flex flex-col mt-[8px] ">
                  <p className="font-dmsans text-lg">Price</p>
                  <input
                    type="text"
                    className="rounded-lg h-[2rem] w-[13rem] bg-[#D9D9D9]"
                    placeholder="Rp Minimum"
                  />
                  <input
                    type="text"
                    className="rounded-lg h-[2rem] w-[13rem] bg-[#D9D9D9]"
                    placeholder="Rp Maximum"
                  />
                </div>
              </div>
              <div className="bg-[#FFFF] h-[14rem] rounded-lg w-[16rem]  gap-2">
                <Rating />
              </div>
            </div>
          </div>
          <div className="flex flex-col mr-[1rem] gap-5">
            <div className="flex bg-[#DFDFDF] justify-between pl-[10px] items-center  w-[53.5rem] h-[3rem] rounded-lg">
              <div className="flex justify-start items-center gap-4">
                <p className="font-dmsans">Sort</p>
                <Dropdown flag={addFlag} />
              </div>
            </div>
            <div className={`${isData.length === 0 ? "h-[24rem] flex justify-center items-center" : ""}`}>
              {isData.length === 0 && <p className="flex text-center text-sm text-[#8E8E8E]">This Category Doesn't Have Any Product Yet!</p>}
              {Object.keys(isData).map((key) => {
                return (
                  <Grid item xs={3} className="">
                    <div className="flex   items-center h-full ">
                      <Item className="flex  items-center  mr-[2.5rem] h-full  rounded-xl ">
                        <Card
                          id={isData[key].id}
                          name={isData[key].name}
                          description={isData[key].description}
                          price={isData[key].price}
                          image={isData[key].image}
                          ratingsAverage={isData[key].ratingsAverage}
                          ratingsQuantity={isData[key].ratingsQuantity}
                        />
                      </Item>
                    </div>
                  </Grid>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}
