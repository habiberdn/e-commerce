import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../input.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import p_1 from "../../image/p-1.webp";
import p_2 from "../../image/shop.jpg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Example = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="mt-2 ml-[1.1rem] mr-[0.5rem] w-[98%] rounded-lg z-0 ">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Slide className="">
              <Item>
                <div
                  className={`bg-[url(${p_1})] flex items-center justify-center h-[300px] rounded-lg`}
                ></div>
              </Item>
              <Item>
                <div
                  className={`bg-[url(${p_2})] flex items-center justify-center h-[300px] rounded-lg`}
                ></div>
              </Item>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Example;
