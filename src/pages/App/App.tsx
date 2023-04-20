import React from "react";
import Header from "@components/Header";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import styled from "styled-components";
import LoginPage from "@pages/LoginPage";
import { routesTeacher } from "@routes/routesTeacher";

const StyledBox = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledBox>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {routesTeacher.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </StyledBox>
  );
}

export default App;
