import React, { useEffect, useState } from "react";
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
  const [isData, setData] = useState();
  useEffect(() => {
    Axios.get("http://127.0.0.1:3001/api/v1/product").then((response) => {
      setData(response.data.getData);
    });
  }, [isData]);

  return (
    <div className="flex flex-col bg-[#f1f2f2] mt-[3.7rem]">
      <Slide />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="ml-[1.3rem] text-lg">Produk</p>
          <p className="mr-3 text-lg">
            <a href="/product">View All</a>
          </p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} className="ml-4">
            {isData?.map((value) => {
              return (
                <Grid item xs={2}>
                  <div className="flex justify-center items-center h-full w-full">
                    <Item className=" mt-4  rounded-xl">
                      <div className="flex justify-center items-center h-full w-full">
                        <Card
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
