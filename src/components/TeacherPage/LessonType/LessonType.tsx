import React, { useState } from "react";
import { TypeLessonType } from "@type/types";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 40px;
  padding: 30px;

  @media (max-width: 540px) {
    width: 100%;
  }
`;

const StyledBox = styled(StyledWrapper)`
  flex-direction: row;
  padding: 0;
`;

const StyledTitle = styled(Typography)`
  margin-right: 10px !important;

  @media (max-width: 540px) {
    width: 150px;
  }
`;

const StyledFormControl = styled(FormControl)`
  width: 200px;

  @media (max-width: 540px) {
    width: 100%;
    max-width: 350px;
  }
`;

const StyledFilterText = styled(Typography)`
  color: rgb(120, 120, 120);
  cursor: pointer;
  height: 10px;
`;

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

const LessonType: React.FC<TypeLessonType> = ({
  lessonType,
  setLessonType,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleChange = (event: SelectChangeEvent<typeof lessonType>) => {
    const {
      target: { value },
    } = event;
    setLessonType(typeof value === "string" ? value.split(",") : value);
  };

  const clearLessonType = () => {
    setLessonType([]);
  };
  return (
    <StyledWrapper>
      <StyledBox>
        <StyledTitle>Вид урока: </StyledTitle>
        <StyledFormControl variant="standard">
          <Select
            multiple
            value={lessonType}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
          >
            {types.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </StyledFormControl>
      </StyledBox>
      <StyledFilterText
        style={{ textDecoration: isShow ? "underline" : "" }}
        onClick={clearLessonType}
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        {lessonType.length > 0 && "Очистить фильтрацию"}
      </StyledFilterText>
    </StyledWrapper>
  );
};

export default LessonType;
