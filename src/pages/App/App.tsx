import React from "react";
import Header from "@components/Header";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import styled from "styled-components";
import LoginPage from "@pages/LoginPage";

const Block = styled(Box)`
  height: 100vh;
`;

function App() {
  return (
    <>
      <Header />
      <Block>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/*{routes.map((route) => {*/}
          {/*  return (*/}
          {/*    <Route*/}
          {/*      key={route.path}*/}
          {/*      path={route.path}*/}
          {/*      element={<route.component />}*/}
          {/*    />*/}
          {/*  );*/}
          {/*})}*/}
        </Routes>
      </Block>
    </>
  );
}

export default App;
