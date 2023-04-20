import React, { useState } from "react";
import ListGroups from "@components/TeacherPage/ListGroups";
import ListDisciplines from "@components/TeacherPage/ListDisciplines";
import DateRangePicker from "@components/TeacherPage/DateRangePicker/DateRangePicker";
import TableMarks from "@components/TeacherPage/TableMarks";
import { useAuth } from "@hooks/useAuth";
import { Box, SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import LessonType from "@components/TeacherPage/LessonType";

const StyledBox = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledBoxHeader = styled(Box)`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const TeacherPage: React.FC = () => {
  const { setGroup } = useAuth();
  const [discipline, setDiscipline] = useState<number>(0);
  const [startDate, setStartDate] = useState<Dayjs | null>(
    localStorage.getItem("startDate")
      ? dayjs(localStorage.getItem("startDate"))
      : dayjs(new Date(new Date().setDate(new Date().getDate() - 14)))
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    localStorage.getItem("endDate")
      ? dayjs(localStorage.getItem("endDate"))
      : dayjs(new Date())
  );
  const [lessonType, setLessonType] = useState<string[]>([]);
  const handleChangeGroup = (event: SelectChangeEvent<number>) => {
    setGroup(event.target.value as number);
    setDiscipline(0);
  };

  const handleChangeDiscipline = (event: SelectChangeEvent<number>) => {
    setDiscipline(event.target.value as number);
  };
  return (
    <StyledBox>
      <StyledBoxHeader>
        <ListGroups handleChange={handleChangeGroup} />
        <ListDisciplines
          state={discipline}
          handleChange={handleChangeDiscipline}
        />
        <LessonType lessonType={lessonType} setLessonType={setLessonType} />
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </StyledBoxHeader>

      {discipline && startDate && endDate ? (
        <TableMarks
          startDate={startDate}
          endDate={endDate}
          discipline={discipline}
          lessonType={lessonType}
        />
      ) : (
        ""
      )}
    </StyledBox>
  );
};

export default TeacherPage;
