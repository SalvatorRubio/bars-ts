import axios from "axios";
import {
  GET_DATES,
  GET_DISCIPLINES,
  GET_GROUPS,
  GET_MARKS,
  GET_TOPIC,
  SET_TOPIC,
  UPDATE_MARK,
} from "@constants/api";
import {
  TypeDates,
  TypeDisciplinesList,
  TypeGroupsList,
  TypeMarksAndStudents,
  TypeTableMarks,
  TypeTopic,
} from "@type/types";
import dayjs, { Dayjs } from "dayjs";

const updateArrLessonType = (type: string[]): string => {
  const arrLessonType: string[] = [];
  type.map((item) => {
    return arrLessonType.push(`"${item}"`);
  });
  return arrLessonType.join(", ");
};

export const getGroups = (id: number | null): Promise<TypeGroupsList[]> => {
  return axios.post<TypeGroupsList[]>(GET_GROUPS, 15).then((res) => res.data);
};

export const getDisciplines = (
  teacher: number,
  group: number
): Promise<TypeDisciplinesList[]> => {
  return axios
    .post<TypeDisciplinesList[]>(GET_DISCIPLINES, { teacher, group })
    .then((res) => res.data);
};

export const setTopic = (
  date: string,
  schedule: number,
  id: number | null,
  group: number | null,
  value: string,
  type: string
): Promise<any> => {
  const formatDate: string = dayjs(
    date.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1")
  ).format("YYYY-MM-DD");

  return axios.post(SET_TOPIC, {
    date: formatDate,
    schedule,
    id: 15,
    group,
    value,
    type,
  });
};

export const getTopic = (id: number): Promise<TypeTopic> => {
  return axios.post<TypeTopic>(GET_TOPIC, { id }).then((res) => res.data);
};

export const getDates = (
  items: TypeTableMarks,
  group: number | null,
  id: number | null
): Promise<TypeDates[]> => {
  const { startDate, endDate, lessonType, discipline } = items;
  return axios
    .post<TypeDates[]>(GET_DATES, {
      discipline,
      id: 15,
      group,
      startDate: dayjs(startDate).format("YYYY-MM-DD"),
      endDate: dayjs(endDate).format("YYYY-MM-DD"),
      type: updateArrLessonType(lessonType),
    })
    .then((res) => res.data);
};

export const getMarks = (
  discipline: number,
  lessonType: string[],
  startDate: Dayjs | null,
  endDate: Dayjs | null,
  id: number | null,
  group: number | null
): Promise<TypeMarksAndStudents[]> => {
  return axios
    .post<TypeMarksAndStudents[]>(GET_MARKS, {
      discipline,
      type: updateArrLessonType(lessonType),
      startDate: dayjs(startDate).format("YYYY-MM-DD"),
      endDate: dayjs(endDate).format("YYYY-MM-DD"),
      id: 15,
      group,
    })
    .then((res) => res.data);
};

export const updateMark = (
  student: number,
  shedule: string,
  mark: string | number
): Promise<any> => {
  return axios
    .post(UPDATE_MARK, { student, shedule, mark })
    .then((res) => res.data);
};

export const getKnowledgeStatistics = <T>(
  link: string,
  discipline: number,
  lessonType: string[],
  startDate: Dayjs | null,
  endDate: Dayjs | null,
  group: number | null
): Promise<T> => {
  return axios
    .post<T>(link, {
      discipline,
      type: updateArrLessonType(lessonType),
      startDate: dayjs(startDate).format("YYYY-MM-DD"),
      endDate: dayjs(endDate).format("YYYY-MM-DD"),
      group,
    })
    .then((res) => res.data);
};
