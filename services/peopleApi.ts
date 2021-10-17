import axios, { AxiosError } from "axios";
import { EndPoints } from "../constants/EndPoints";
import { Person } from "../Models/Person";
import { ApiResponse } from "../Models/ApiResponse";

const API_PATH = process.env.NEXT_PUBLIC_API_URL;

export const getAllPeopleData = (): Promise<ApiResponse<Person> | {}> =>
  new Promise(async (resolve) => {
    try {
      const { data }: ApiResponse<Person> = await axios.get(
        `${API_PATH}/${EndPoints.People}`
      );
      resolve(data as ApiResponse<Person>);
    } catch (error) {
      resolve({});
    }
  });
