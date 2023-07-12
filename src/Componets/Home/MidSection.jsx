import React from "react";
import Grid from "@mui/material/Grid";
// import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const Conmponent = styled(Grid)`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  flex-wrap: wrap-reverse;
  width: 100%;
`;
const Image = styled("img")({
  width: "99%",
  marginBottom: "5px",
});
const MidSection = ({ imageURL }) => {
  return (
    <>
    {/* full width have 12 item
    so grid item=4 means 3 image */}
      <Conmponent lg={12} sm={12} md={12} xs={12} container>
        {imageURL.map((items) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={items.key}>
            <Image src={items.url} />
          </Grid>
        ))}
      </Conmponent>
    </>
  );
};
export default MidSection;
