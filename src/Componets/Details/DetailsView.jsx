import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../../Redux/Actions/productActions";
import Grid from "@mui/material/Grid";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";
import Loader from "./Loader";
const Container = styled(Box)(({ theme }) => ({
  marginTop: " 3.4rem",
  background: "#f2f2f2",
  [theme.breakpoints.down("md")]: {
    marginTop: "6.4rem",
  },
}));
const Component = styled(Grid)`
  background: #ffffff;
  display: flex;
`;
const RightComponent = styled(Grid)`
  margin-top: 3.4rem;
  padding-left: 25px;
`;
const DetailsView = () => {
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  // console.log(product);
  // console.log(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          product &&
          Object.keys(product).length && (
            <Component container>
              <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
              </Grid>
              <RightComponent item lg={8} md={8} sm={8} xs={12}>
                <ProductDetails product={product} />
              </RightComponent>
            </Component>
          )
        )}
      </Container>
    </>
  );
};
export default DetailsView;
