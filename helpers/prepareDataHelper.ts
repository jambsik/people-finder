import { Pagination } from "../constants/Pagination";
import { ApiResponseMetadata } from "../Models/ApiResponse";

export type PaginationFilterType = {
  [key: string]: any;
};

export type DataByIdType = {
  id: string;
};

export const filterData = <Type>(
  data: Array<Type>,
  filters: PaginationFilterType
): Array<Type> => {
  let dataToTransform = data;
  const filterKeys = Object.keys(filters);
  const hasFilters = filterKeys.length > 0;

  if (hasFilters) {
    dataToTransform = data.filter((item: Type): boolean =>
      Object.keys(filters).every(
        (propertyName: string): boolean =>
          item[propertyName as keyof Type]=== filters[propertyName]
      )
    );
  }

  return dataToTransform;
};

export const applyPagination = <Type>(
  data: Array<Type>,
  page: number,
  limit: number
): Array<Type> => data.slice((page - Pagination.offset) * limit, page * limit);

export const findById = <Type extends DataByIdType>(
  id: string,
  data: Array<Type>
): Type | undefined => data.find((item: Type) => item.id === id);

export const metadataMock: ApiResponseMetadata = {
  filters: {
    title: {
      type: "string",
    },
    forename: {
      type: "string",
      validations: {
        min: 3,
      },
    },
    middleNames: {
      type: "string",
      validations: {
        max: 5,
      },
    },
    emailAddress: {
      type: "string",
      validations: {
        regex: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\\\.[A-Z]{2,4}$/i",
      },
    },
    surname: {
      type: "string",
    },
    gender: {
      type: "string",
    },
    dateOfBirth: {
      type: "string",
    },
    homeBuildingName: {
      type: "string",
    },
    homeBuildingNumber: {
      type: "number",
    },
    homeSubBuilding: {
      type: "string",
    },
    homeStreet: {
      type: "string",
    },
    homeCity: {
      type: "string",
    },
    homeCounty: {
      type: "string",
    },
    homePostcode: {
      type: "string",
    },
    homePhoneNumber: {
      type: "string",
    },
    mobilePhoneNumber: {
      type: "string",
    },
  },
};
