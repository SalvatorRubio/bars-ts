import React from "react";
import styled from "styled-components";
import { FormControl, MenuItem, Select } from "@mui/material";
import ModalItemContainer from "../../../../../../UI/TeacherPage/ModalItemContainer";

const types: string[] = [
  "Практическая работа",
  "Практическая-теоретическая работа",
  "Теоретическая работа",
  "Аттестация",
  "Самостоятельная работа",
  "Лабораторная работа",
  "Экзамен",
  "Зачет",
  "Курсовая работа",
];

type props = {
  lessonType: string;
  setLessonType: React.Dispatch<React.SetStateAction<string>>;
};

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

const ModalSelect: React.FC<props> = ({ lessonType, setLessonType }) => {
  return (
    <ModalItemContainer title="Вид урока">
      <StyledFormControl>
        <Select
          value={lessonType}
          onChange={(e) => setLessonType(e.target.value)}
        >
          {types.map((item) => {
            return (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </StyledFormControl>
    </ModalItemContainer>
  );
};

export default ModalSelect;
