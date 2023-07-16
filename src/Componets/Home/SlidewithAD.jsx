import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Containe = styled(Box)(({ theme }) => ({
  background: "white",
  height: "100%",
  width: "69%",
  // display: "flex",
  [theme.breakpoints.down("sm")]: {
    height: "85%",
    width: "100%",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // paddingTop: "3rem",
  cursor: "pointer",
  // border: "1px solid red",
}));

const Image = styled("img")(({ theme }) => ({
  width: "70%",
  height: "14rem",
  objectFit: "contain",
  [theme.breakpoints.down("sm")]: {
    width: "35%",
    height: "10rem",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  marginTop: "2px",
  [theme.breakpoints.down('sm')]:{
    fontSize:"0.8rem"
  }
}));

const SlidewithAD = ({ products }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Containe>
          {/* <WrapCarousel> */}
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
          >
            {products &&
              products.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Wrapper>
                    <Image src={product.url} alt="product" />
                    <Text style={{ fontWeight: "bold", color: "black" }}>
                      {product.title.shortTitle}
                    </Text>
                    <Text style={{ color: "green" }}>{product.discount}</Text>
                    <Text style={{ color: "#212121", opacity: "0.9" }}>
                      {product.tagline}
                    </Text>
                  </Wrapper>
                </Link>
              ))}
          </Carousel>
          {/* </WrapCarousel> */}
        </Containe>
      </ThemeProvider>
    </>
  );
};
export default SlidewithAD;
