import React from "react";
import ModalItemContainer from "@UI/TeacherPage/ModalItemContainer";
import { TextField } from "@mui/material";
import styled from "styled-components";

type props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const ModalTextarea: React.FC<props> = ({ text, setText }) => {
  return (
    <ModalItemContainer title="Тема урока">
      <StyledTextField
        placeholder="Тема урока"
        multiline
        rows={2}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </ModalItemContainer>
  );
};

export default ModalTextarea;
