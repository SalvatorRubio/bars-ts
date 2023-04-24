import axios from "axios";
import { GET_SCHEDULE } from "@constants/api";
import dayjs from "dayjs";
import { TypeScheduleTommorow } from "@type/types";

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
