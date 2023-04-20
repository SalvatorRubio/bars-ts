import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { Dayjs } from "dayjs";

export type Routes = {
  path: string;
  component: React.ReactNode;
};

// Тип для передачи пропсов дисциплины в TeacherPage
export type TypeSelectItem = {
  handleChange: (event: SelectChangeEvent<number>) => void;
};

// Список групп полученных с сервера
export type TypeGroupsList = {
  groups_id: number;
  name: string;
  number: number;
  course: number;
};

// Список дисциплин полученных с сервера
export type TypeDisciplinesList = {
  discipline_id: number;
  name: string;
};

// Для передачи пропсов типа урока в TeacherPage
export type TypeLessonType = {
  lessonType: string[];
  setLessonType: React.Dispatch<React.SetStateAction<string[]>>;
};

// Для передачи пропсов дат в TeacherPage
export type TypeDateRange = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  setStartDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
};

// Для передачи пропсов для таблицы в TeacherPage
export type TypeTableMarks = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  discipline: number;
  lessonType: string[];
};

// Получение дат с сервера
export type TypeDates = {
  shedule_id: number;
  cur_date: string;
};

// Получение вида урока и темы урока с сервера
export type TypeTopic = {
  lesson_type: string;
  topic: string;
};

export type TypeMarksAndStudents = {
  shedule_id: string;
  student_id: number;
  name: string;
  surname: string;
  father_name: string;
  mark: string;
  middle_mark: number;
};

export type TypeQualityKnowledge = {
  quality: number;
};

export type TypeAbsoluteKnowledge = {
  absolute: number;
};
