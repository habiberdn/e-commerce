import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../style.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import p_1 from "../../image/p-1.jpeg";
import p_2 from "../../image/shop.jpg";


const Example = () => {
  return (
    <div className="mt-4 ml-5 mr-[1rem]">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Slide className="">
              <div className="">
                <div
                  className={`bg-[url(${p_1})] flex items-center justify-center h-[300px] rounded-lg `}
                ></div>
              </div>
              <div>
                <div
                  className={`bg-[url(${p_2})] flex items-center justify-center h-[300px] rounded-lg`}
                ></div>
              </div>
            </Slide>
          </Grid>
         
        </Grid>
      </Box>
    </div>
  );
};

export default Example;
