import axios from "axios";
import {
  GET_DISCIPLINES_CLASSROOM_TEACHER,
  GET_MARKS_STUDENTS_CLASSROOM_TEACHER,
  GET_STUDENTS_CLASSROOM_TEACHER,
} from "@constants/api";
import {
  TypeDisciplines,
  TypeInfoStudentsClassroomTeacher,
  TypeStudentsClassroomTeacher,
} from "@type/types";
import dayjs, { Dayjs } from "dayjs";

export const getDisciplines = (
  group: number | null
): Promise<TypeDisciplines[]> => {
  return axios
    .post<TypeDisciplines[]>(GET_DISCIPLINES_CLASSROOM_TEACHER, { group })
    .then((res) => res.data);
};

export const getStudents = (
  group: number | null
): Promise<TypeStudentsClassroomTeacher[]> => {
  return axios
    .post<TypeStudentsClassroomTeacher[]>(GET_STUDENTS_CLASSROOM_TEACHER, {
      group,
    })
    .then((res) => res.data);
};

export const getStudentsInfo = (
  startDate: Dayjs | null,
  endDate: Dayjs | null,
  group: number | null
): Promise<TypeInfoStudentsClassroomTeacher[]> => {
  return axios
    .post<TypeInfoStudentsClassroomTeacher[]>(
      GET_MARKS_STUDENTS_CLASSROOM_TEACHER,
      {
        startDate: dayjs(startDate).format("YYYY-MM-DD"),
        endDate: dayjs(endDate).format("YYYY-MM-DD"),
        group,
      }
    )
    .then((res) => res.data);
};
