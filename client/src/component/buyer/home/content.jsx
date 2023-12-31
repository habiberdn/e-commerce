import React, { useEffect, useState } from "react";
import Slide from "../utils/slide";
import Card from "./card";
import Axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Elektronik from "../../image/Laptop.webp";
import Fashion from '../../image/kids_tshirt.webp'
import Camera from '../../image/camera.webp'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const [isData, setData] = useState();
  useEffect(() => {
     Axios.get("http://127.0.0.1:3001/api/v1/product").then((response) => {
      console.log(response)
      setData(response.data.getData);
    });
    
  }, []);
  console.log(isData)

  return (
    <div className="flex flex-col  bg-[#f1f2f2] mt-[5em] pb-[2rem]  gap-3 ">
      <Slide />

      <div className="flex justify-start ml-[0.5rem] h-full">
        <p className="ml-[1.3rem] text-lg font-inter pt-[5px]">
          Category
        </p>
      </div>
      <div className="flex justify-center ">
        <div className="w-[20%] ml-[1.5rem] flex justify-center items-center gap-5 h-[8rem] ">
          <div className="flex flex-col justify-center items-center gap-1">
            <a href="/category/Electronic" className=" rounded-xl p-[8px] bg-[#FFFF] h-[3.5rem] w-[4rem] flex justify-center items-center">
              <img className="z-0" src={Elektronik} alt="" width={50} />
            </a>
            <p className="font-inter">Electronic</p>

          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <a href="/category/Fashion" className=" rounded-xl p-[8px] bg-[#FFFF] h-[3.5rem] w-[4rem] flex justify-center items-center">
              <img className="z-0" src={Fashion} alt="" width={50} />
            </a>
            <p className="font-inter">Fashion</p>

          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <a href="/category/Photography" className=" rounded-xl p-[8px] bg-[#FFFF] h-[3.5rem] w-[4rem] flex justify-center items-center" aria-label="image-category">
              <img className="z-0" src={Camera} alt="" width={50} aria-label="image" />
            </a>
            <p className="font-dsans">Photography</p>

          </div>
        </div>

      </div>
      <div className="flex flex-col">
        <div className="flex justify-start ml-[0.5rem] h-full">
          <p className="ml-[1.3rem] text-lg font-inter pt-[5px]">
            For You
          </p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            {isData?.map((value) => {
              return (
                <Grid item xs={2}>
                  <div className="flex justify-center ml-[5px] items-center h-full w-full">
                    <Item className=" mt-4  rounded-xl ">
                      <div className="flex justify-center items-center h-full w-full">
                        <Card
                          id={value.id}
                          name={value.name}
                          price={value.price}
                          image={value.image}
                          sellerName={value.sellerName}
                          ratingsAverage={value.ratingsAverage}
                        />
                      </div>
                    </Item>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
