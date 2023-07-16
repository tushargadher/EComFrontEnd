import React, { useEffect } from "react";
import { imageURL, imageURLSix } from "../../constants/data";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getProducts } from "../../../Redux/Actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import SideBanner from "./SideBanner";
import MidSection from "./MidSection";
import Features from "./Features";
import Footer from "../Footer/Footer";
import SideAD from "./SideAD";
import SlidewithAD from "./SlidewithAD";
const WrapCarousel = styled(Box)(({ theme }) => ({
  padding: "1.1rem 0.5rem 0.5rem 0.5rem",
  backgroundColor: "#f1f3f6",
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  },
}));

const WrapSlider = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "45vh",
  margin: "0.7rem 0",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Home = () => {
  //useSelector is used to read data from redux store
  const { products } = useSelector((state) => state.getProducts);
  // console.log("Redux DATA", products);
  const dispatch = useDispatch();
  useEffect(() => {
    // getProductsReducer(); we can not use directy because it is redux function
    //dispatch is used to call redux function
    dispatch(getProducts());
  }, [dispatch]);

  const BlueBannerIMG =
    "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/0b22f4bdbe5b032a.jpg?q=90";
  const RedBannerIMG =
    "https://rukminim1.flixcart.com/flap/278/278/image/e84ecf024bdc49f4.jpg?q=90";
  return (
    <>
      <NavBar />
      <WrapCarousel>
        <Banner />
        <WrapSlider>
          <SideBanner name="Deals of the Day " BannerImgURL={BlueBannerIMG} />
          <SlidewithAD products={products} />
          <SideAD />
        </WrapSlider>
        <WrapSlider>
          <SideBanner
            name="Today's Fashion Deals"
            BannerImgURL={RedBannerIMG}
          />
          <Slide products={products} />
        </WrapSlider>
        <MidSection imageURL={imageURL} />
        <WrapSlider>
          <SideBanner name="Discounts for You" BannerImgURL={BlueBannerIMG} />
          <Slide products={products} />
        </WrapSlider>
        <WrapSlider>
          <SideBanner name="Best of Electronics" BannerImgURL={RedBannerIMG} />
          <Slide products={products} />
        </WrapSlider>

        <MidSection imageURL={imageURLSix} />
        <Features />

        <WrapSlider>
          <SideBanner
            name="Fashion Best Sellers"
            BannerImgURL={BlueBannerIMG}
          />
          <Slide products={products} />
        </WrapSlider>
        <WrapSlider>
          <SideBanner name="Appliances" BannerImgURL={RedBannerIMG} />
          <Slide products={products} />
        </WrapSlider>
        <WrapSlider>
          <SideBanner name="Recommended Items" BannerImgURL={BlueBannerIMG} />
          <Slide products={products} />
        </WrapSlider>
        <WrapSlider>
          <SideBanner name="Offers on Furniture" BannerImgURL={RedBannerIMG} />
          <Slide products={products} />
        </WrapSlider>
      </WrapCarousel>
      {/* <Footer /> */}
    </>
  );
};
export default Home;
