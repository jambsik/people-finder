import { Pagination } from "../constants/Pagination";

export type PaginationFilterType = {
  [key: string]: string | string[];
};

export const simulatePagination = <Type>(
  data: Array<Type>,
  page: number,
  limit: number,
  filters: PaginationFilterType
): Array<Type> => {
  let dataToTransform = data;
  const filterKeys = Object.keys(filters);
  const hasFilters = filterKeys.length > 0;

  if (hasFilters) {
    dataToTransform = data.filter((item: Type) =>
      Object.keys(filters).some(
        (propertyName: string) => item[propertyName] === filters[propertyName]
      )
    );
  }

  return dataToTransform.slice((page - Pagination.offset) * page, page * limit);
};

export const simulateFindById = <Type>(
  id: string,
  data: Array<Type>
): Type | undefined => data.find((item: Type) => item?.id === id);
