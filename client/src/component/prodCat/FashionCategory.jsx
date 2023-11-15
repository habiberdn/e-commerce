import React, { useState, useEffect } from "react";
import Navbar from "../home/navbar";
import Dropdown from "../utils/dropdown";
import axios from "axios";
import Card from "../home/card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/api/v1/product/Fashion`).then(
      (response) => {
        setData(response.data.getData);
      },
      [isData]
    );
  });
  return (
    <div className="flex flex-col bg-[#f1f2f2] mt-[3.7rem] pb-[2rem]  gap-2 ">
      <Navbar />
      <div className="ml-[1.6rem] w-full mt-[1.5rem] flex gap-24">
        <div className="flex flex-col gap-3">
          <div className="">
            <h4 className="text-[#2962FF] flex gap-2 font-dmsans">
              Home <p className="text-black">&gt;</p> Category
              <p className="text-black">&gt;</p> Fashion
            </h4>
          </div>
          <div className="ml-[3px] flex flex-col gap-5">
            <div className="bg-[#FFFF] h-[9rem] rounded-lg w-[16rem] mt-[2rem] gap-2">
              <div className="ml-[10px] gap-3 flex flex-col mt-[8px] ">
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
             <Rating/>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
        <div className="flex bg-[#DFDFDF] justify-between  pl-[10px] items-center  w-[54rem] h-[3rem] rounded-lg">
            <div className="flex justify-start items-center gap-4">
              <p className="font-dmsans">Sort</p>
              <Dropdown />
            </div>
          </div>
          <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={1} >
              {Object.keys(isData).map((key) => {
                return (
                  <Grid item xs={3} className="">
                    <div className="flex justify-center  items-center h-full ">
                      <Item className="flex justify-center items-center  mr-[2.5rem] h-full mt-4 rounded-xl ">
                        <Card
                          name={isData[key].name}
                          description={isData[key].description}
                          price={isData[key].price}
                          image={isData[key].image}
                          rating={isData[key].rating}
                        />
                      </Item>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
