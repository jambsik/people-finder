import type { NextApiRequest, NextApiResponse } from "next";
import FakeDBData from "../../../config/data.json";
import { Person } from "../../../Models/Person";
import { HttpStatusCode } from "../../../constants/HttpStatusCode";
import { metadataMock, filterData } from "../../../helpers/prepareDataHelper";
import { Pagination } from "../../../constants/Pagination";
import { ApiResponse } from "../../../Models/ApiResponse";
import { findById } from "../../../helpers/prepareDataHelper";
import { applyPagination } from "../../../helpers/prepareDataHelper";

export const getAllData = (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Person>>
) => {
  try {
    const { page, limit, ...filters } = req.query;
    const filteredData = filterData<Person>(FakeDBData, filters);
    const data: Array<Person> = applyPagination<Person>(
      filteredData,
      page ? parseInt(page as string) : Pagination.DefaultPage,
      limit ? parseInt(limit as string) : Pagination.DefaultLimit
    );
    const response: ApiResponse<Person> = {
      data,
      total: filteredData.length,
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
      const item: Person | undefined = findById<Person>(
        query!.id as string,
        FakeDBData
      );

      const response: ApiResponse<Person> = {
        item,
        metadata: metadataMock,
      };

      res.status(HttpStatusCode.OK).json(response);
    }
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
};
