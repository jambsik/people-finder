import type { NextApiRequest, NextApiResponse } from "next";
import FakeDBData from "../../../config/data.json";
import { Person } from "../../../Models/Person";
import { HttpStatusCode } from "../../../constants/HttpStatusCode";
import {
  PaginationFilterType,
  simulateFindById,
  simulatePagination,
} from "../../../helpers/prepareDataHelper";
import { Pagination } from "../../../constants/Pagination";

export const getAllData = (
  req: NextApiRequest,
  res: NextApiResponse<Person[]>
) => {
  try {
    const { page, limit, ...filters } = req.query;

    const data: Person[] = simulatePagination<Person>(
      FakeDBData,
      page ? parseInt(page) : Pagination.DefaultPage,
      limit ? parseInt(limit) : Pagination.DefaultLimit,
      filters
    );

    res.status(HttpStatusCode.OK).json(data);
  } catch (e: Error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
};
export const getDataById = (
  req: NextApiRequest,
  res: NextApiResponse<Person | {}>
) => {
  try {
    const query = req.query;
    const hasId = req.query && req.query.id;

    if (hasId) {
      const data: Person | undefined = simulateFindById<Person>(
        query!.id,
        FakeDBData
      );

      res.status(HttpStatusCode.OK).json(data || {});
    }
  } catch (e: Error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
};