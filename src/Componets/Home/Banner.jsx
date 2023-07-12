import React from "react";
import Box from "@mui/material/Box";
import { bannerData } from "../../constants/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,
  },
}));

const Banner = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
          >
            {bannerData.map((data) => (
              <Box key={data.key}>
                <Image src={data.url} alt="img" />
              </Box>
            ))}
          </Carousel>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default Banner;
