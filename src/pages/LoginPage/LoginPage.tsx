import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { Authorization } from "@utils/network";

import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";

const StyledMain = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledInput = styled(TextField)`
  margin: 10px 0 !important;
  width: 300px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

const ErrorText = styled(Typography)`
  color: red;
  text-align: center;
  width: 100%;
`;

type FormValues = {
  login: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    Authorization(data).then((data) => {
      if (!Object.values(data || {}).length) {
        return setError(true);
      }
      console.log(data);
    });
  };

  return (
    <StyledMain>
      <StyledBox>
        <Typography>Авторизация</Typography>
        <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            label="Логин"
            {...register("login", {
              required: true,
            })}
          />

          <StyledInput
            label="Пароль"
            {...register("password")}
            type="password"
          />
          {error && <ErrorText color="red">Неверно введены данные!</ErrorText>}
          <StyledButton type="submit" variant="contained">
            Войти
          </StyledButton>
        </StyledForm>
      </StyledBox>
    </StyledMain>
  );
};

export default LoginPage;
