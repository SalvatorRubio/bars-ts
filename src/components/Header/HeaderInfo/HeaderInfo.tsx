import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: 100px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`;

const StyledText = styled(Typography)`
  color: #fff;
  text-transform: capitalize;
`;

const HeaderInfo: React.FC = () => {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Typography>Масыгина Ирина Александровна</Typography>
      <StyledButton>
        <StyledText>Выйти</StyledText>
      </StyledButton>
    </Stack>
  );
};

export default HeaderInfo;
