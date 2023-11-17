import React, { useEffect, useState } from "react";
import Slide from "../utils/slide";
import Card from "./card";
import Axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Elektronik from "../../image/Laptop.png";
import Fashion from '../../image/kids_tshirt.jpeg'
import Camera from '../../image/camera.jpeg'

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
      setData(response.data.getData);
    });
  }, [isData]);

  return (
    <div className="flex flex-col bg-[#f1f2f2] mt-[3.7rem] pb-[2rem]  gap-2 ">
      <Slide />

      <div className="ml-[1.1rem] w-full h-[6rem] ">
        <div className="flex justify-center h-full items-center gap-6">
          <div className="flex flex-col">
          <a href="/category/Electronic" className=" rounded-xl p-[8px] bg-[#FFFF] h-[3.5rem] w-[3.5rem] flex justify-center items-center">
            <img className="z-0" src={Elektronik} alt="" width={50}  />
          </a>
          </div>
          <div className="flex flex-col">
          <a  href="/category/Fashion" className=" rounded-xl p-[8px] bg-[#FFFF] h-[3.5rem] w-[3.5rem] flex justify-center items-center">
            <img className="z-0" src={Fashion} alt="" width={50} />
          </a>
          </div>
          <div className="flex flex-col">
          <a href="/category/Photography" className=" rounded-xl p-[8px] bg-[#FFFF] h-[3.5rem] w-[3.5rem] flex justify-center items-center">
            <img className="z-0" src={Camera} alt="" width={50} />
          </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center h-full">
          <p className="ml-[1.3rem] text-lg font-montserrat pt-[5px]">
            <b>For You</b>
          </p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} className="">
            {isData?.map((value) => {
              return (
                <Grid item xs={2}>
                  <div className="flex justify-center ml-[5px] items-center h-full w-full">
                    <Item className=" mt-4  rounded-xl ">
                      <div className="flex justify-center items-center h-full w-full">
                        <Card
                          id={value.id}
                          name={value.name}
                          description={value.description}
                          price={value.price}
                          image={value.image}
                          rating={value.rating}
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
