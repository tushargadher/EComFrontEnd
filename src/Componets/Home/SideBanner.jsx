import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
const Typographys = styled(Typography)`
  font-size: 1.4rem;
  font-weight: 600;
`;
const ViewButton = styled(Button)`
  border-radius: 2px;
  height: 2.5rem;
  width: 6rem;
  background: #2874f0;
  color: #fff;
  margin-top: 2rem;
  font-size: 0.8rem;
`;
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 16%;
  height: 100%;
  background: white;
  overflow: hidden;
`;
const Wrap = styled(Box)`
  height: 60%;
  // background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const hoverEfffect = {
  background: "#2874f0",
  "&:hover": {
    background: "#2874f0",
  },
};
const SideBanner = ({ name, BannerImgURL }) => {
  return (
    <>
      <Container>
        <Wrap>
          <Typographys>{name}</Typographys>
          <ViewButton sx={hoverEfffect}>View All</ViewButton>
        </Wrap>
        <img src={BannerImgURL} alt="banner" />
      </Container>
    </>
  );
};
export default SideBanner;
