import { Button, ButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledButton = styled(Button)`
  border-radius: 100%;
`;
const GroupButton = () => {
  return (
    <>
      <ButtonGroup>
        <StyledButton>-</StyledButton>
        <Button>1</Button>
        <StyledButton>+</StyledButton>
      </ButtonGroup>
    </>
  );
};
export default GroupButton;
