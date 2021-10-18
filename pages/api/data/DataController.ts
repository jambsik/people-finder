import type { NextApiRequest, NextApiResponse } from "next";
import FakeDBData from "../../../config/data.json";
import { Person } from "../../../Models/Person";
import { HttpStatusCode } from "../../../constants/HttpStatusCode";
import {
  metadataMock,
  simulateFindById,
  simulatePagination,
} from "../../../helpers/prepareDataHelper";
import { Pagination } from "../../../constants/Pagination";
import { ApiResponse } from "../../../Models/ApiResponse";

export const getAllData = (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Person>>
) => {
  try {
    const { page, limit, ...filters } = req.query;
    const data: Array<Person> = simulatePagination<Person>(
      FakeDBData,
      page ? parseInt(page as string) : Pagination.DefaultPage,
      limit ? parseInt(limit as string) : Pagination.DefaultLimit,
      filters
    );
    const response: ApiResponse<Person> = {
      data,
      total: FakeDBData.length,
      metadata: metadataMock,
    };

    res.status(HttpStatusCode.OK).json(response);
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
};
export const getDataById = (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Person>>
) => {
  try {
    const query = req.query;
    const hasId = req.query && req.query.id;

    if (hasId) {
      const item: Person | undefined = simulateFindById<Person>(
        query!.id as string,
        FakeDBData
      );

      const response: ApiResponse<Person> = {
        item,
      };

      res.status(HttpStatusCode.OK).json(response);
    }
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
};
