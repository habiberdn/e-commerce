import React, { useEffect, useRef } from "react";
import Slide from "../utils/slide";
import Card from "./card";
import Axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const isDataRef = useRef();

  useEffect(() => {
    Axios.get("http://127.0.0.1:3001/api/v1/product").then((response) => {
      isDataRef.current = response;
      console.log(response);
    });
  }, []);

  console.log(isDataRef);

  return (
    <div className="flex flex-col bg-[#f1f2f2] ">
      <Slide />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="ml-[1.3rem] text-lg">Produk</p>
          <p className="mr-2 text-lg"><a href="product">View All</a></p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} className="ml-4">
            <Grid item xs={2}>
              <div className="flex justify-center items-center h-full w-full">
                <Item className=" mt-4  rounded-xl">
                  <div className="flex justify-center items-center h-full w-full">
                    <Card />
                  </div>
                </Item>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="flex justify-center items-center h-full w-full">
                <Item className=" mt-4  rounded-xl">
                  <div className="flex justify-center items-center h-full w-full">
                    <Card />
                  </div>
                </Item>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
