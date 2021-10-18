import axios, { AxiosError } from "axios";
import { EndPoints } from "../constants/EndPoints";
import { Person } from "../Models/Person";
import { ApiResponse } from "../Models/ApiResponse";
import { PaginationFilterType } from "../helpers/prepareDataHelper";

const API_PATH = process.env.NEXT_PUBLIC_API_URL;

export const getAllPeopleData = (
  params?: PaginationFilterType
): Promise<ApiResponse<Person> | {}> =>
  new Promise(async (resolve) => {
    try {
      const { data }: ApiResponse<Person> = await axios.get(
        `${API_PATH}/${EndPoints.People}`,
        {
          params,
        }
      );
      resolve(data as ApiResponse<Person>);
    } catch (error) {
      resolve({});
    }
  });

export const getDataById = (id: string): Promise<ApiResponse<Person>> =>
  new Promise(async (resolve) => {
    try {
      const { data }: ApiResponse<Person> = await axios.get(
        `${API_PATH}/${EndPoints.People}/${id}`
      );
      resolve(data as ApiResponse<Person>);
    } catch (error) {
      resolve({});
    }
  });
