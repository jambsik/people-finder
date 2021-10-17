import axios from "axios";
import {EndPoints} from "../constants/EndPoints";
import {Person} from "../Models/Person";

const API_PATH = process.env.NEXT_PUBLIC_API_URL;

export const getAllPeopleData = (): Promise<Array<Person>> =>
  new Promise(async (resolve) => {
    try {
      const { data } = await axios.get(`${API_PATH}/${EndPoints.People}`);

      resolve(data);
    } catch (error: Error) {
      resolve([]);
    }
  });
