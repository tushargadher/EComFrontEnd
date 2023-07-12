import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
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
const Containe = styled(Box)`
  background: white;
  height: 100%;
  width: 84%;
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  cursor: pointer;
`;

const Image = styled("img")({
  width: "70%",
  // height: "14.5rem",
});
const Text = styled(Typography)`
  font-size: 0.9rem;
  margin-top: 2px;
  color: inherit;
`;

const Slide = ({ products }) => {
  return (
    <>
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
                to={`products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Wrapper>
                  <Image src={product.url} alt="product" />
                  <Text style={{ fontWeight: "bold" }}>
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
    </>
  );
};
export default Slide;
