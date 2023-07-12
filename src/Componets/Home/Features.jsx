import React from "react";
import Grid from "@mui/material/Grid";
import { features } from "../../constants/data";
// import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const Conmponent = styled(Grid)`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  width: 100%;
`;
const Image = styled("img")({
  width: "100%",
//   padding: "0 0.5rem",
});
const Features = () => {
  return (
    <>
      <Conmponent lg={12} sm={12} md={12} xs={12} container>
        {features.map((items) => (
          <Grid item lg={3} md={3} sm={6} xs={6} key={items.key}>
            <Image src={items.url} />
          </Grid>
        ))}
      </Conmponent>
    </>
  );
};
export default Features;
