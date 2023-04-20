import axios from "axios";
import { ROOT_LINK_AUTHORIZATION } from "@constants/api";

type TeacherApi = {
  father_name: string;
  name: string;
  role: number;
  surname: string;
  teacher_id: number;
};

type AuthorizationAPI = TeacherApi;

export const Authorization = (data: { login: string; password: string }) => {
  return axios
    .post<AuthorizationAPI | []>(ROOT_LINK_AUTHORIZATION, data)
    .then((res) => res.data);
};
