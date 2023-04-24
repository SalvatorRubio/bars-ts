import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import HeaderLogo from "@components/Header/HeaderLogo";
import HeaderInfo from "@components/Header/HeaderInfo";

import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  height: 70px;
`;

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <StyledToolbar>
        <HeaderLogo />
        <HeaderInfo />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
