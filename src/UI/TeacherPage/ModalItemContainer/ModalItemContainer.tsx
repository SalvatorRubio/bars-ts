import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const StyledTypography = styled(Typography)`
  width: 150px;
`;

type props = {
  title: string;
  children: JSX.Element;
};

const ModalItemContainer: React.FC<props> = ({ children, title }) => {
  return (
    <StyledBox>
      <StyledTypography>{title}</StyledTypography>
      {children}
    </StyledBox>
  );
};

export default ModalItemContainer;
