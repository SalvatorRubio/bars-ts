import axios from "axios";
import {
  GET_DATES_STUDENT,
  GET_DISCIPLINES_STUDENT,
  GET_MARKS_STUDENT,
  GET_MIDDILE_MARKS,
  GET_SCHEDULE,
} from "@constants/api";
import dayjs, { Dayjs } from "dayjs";
import {
  TypeDatesStudent,
  TypeDisciplines,
  TypeMarksStudent,
  TypeMiddleMarksStudent,
  TypeScheduleTommorow,
} from "@type/types";

export const getSchedule = (
  group: number | null
): Promise<TypeScheduleTommorow[]> => {
  const now = new Date();
  const date = dayjs(new Date(now.getTime() + 24 * 60 * 60 * 1000)).format(
    "YYYY-MM-DD"
  );

  return axios
    .post<TypeScheduleTommorow[]>(GET_SCHEDULE, { date, group })
    .then((res) => res.data);
};

export const getDates = (
  startDate: Dayjs | null,
  endDate: Dayjs | null
): Promise<TypeDatesStudent[]> => {
  return axios
    .post<TypeDatesStudent[]>(GET_DATES_STUDENT, {
      startDate: dayjs(startDate).format("YYYY-MM-DD"),
      endDate: dayjs(endDate).format("YYYY-MM-DD"),
    })
    .then((res) => res.data);
};

export const getDisciplines = (
  group: number | null
): Promise<TypeDisciplines[]> => {
  return axios
    .post<TypeDisciplines[]>(GET_DISCIPLINES_STUDENT, { group })
    .then((res) => res.data);
};

export const getMarks = (
  student: number | null,
  startDate: Dayjs | null,
  endDate: Dayjs | null,
  discipline: number
): Promise<TypeMarksStudent[]> => {
  return axios
    .post<TypeMarksStudent[]>(GET_MARKS_STUDENT, {
      student,
      startDate,
      endDate,
      discipline,
    })
    .then((res) => res.data);
};

export const getMiddleMarks = (
  student: number | null,
  startDate: Dayjs | null,
  endDate: Dayjs | null
): Promise<TypeMiddleMarksStudent[]> => {
  return axios
    .post<TypeMiddleMarksStudent[]>(GET_MIDDILE_MARKS, {
      student,
      startDate,
      endDate,
    })
    .then((res) => res.data);
};
