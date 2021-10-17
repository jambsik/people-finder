import { Pagination } from "../constants/Pagination";

export type PaginationFilterType = {
  [key: string]: any;
};

export type DataByIdType = {
  id: string;
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
    dataToTransform = data.filter((item: Type): boolean =>
      Object.keys(filters).some(
        (propertyName: string): boolean =>
          item[propertyName as keyof Type] === filters[propertyName]
      )
    );
  }

  return dataToTransform.slice((page - Pagination.offset) * page, page * limit);
};

export const simulateFindById = <Type extends DataByIdType>(
  id: string,
  data: Array<Type>
): Type | undefined => data.find((item: Type) => item.id === id);
