import React, { useState } from "react";
import { Paginator, List, ListItemProps } from "@jambsik-labs/ui-components";

import { getAllPeopleData } from "../../services/peopleApi";
import { convertPeopleToListItems } from "../../helpers/peopleHelper";
import { useRouter } from "next/router";
import { AppRoutes } from "../../constants/AppRoutes";
import { ApiResponse, ApiResponseMetadata } from "../../Models/ApiResponse";
import { Person } from "../../Models/Person";
import { PaginationFilterType } from "../../helpers/prepareDataHelper";
import { PeopleFilters } from "../../components/PeopleFilters/PeopleFilters";
import { cleanEmptyValues } from "../../components/PeopleFilters/peopleFiltersHelper";

export interface PeopleProps {
  items: Array<ListItemProps>;
  total?: number;
  metadata?: ApiResponseMetadata;
}

const getPropsData = async (
  params?: PaginationFilterType
): Promise<PeopleProps> =>
  getAllPeopleData(params).then(
    ({ data, total, metadata }: ApiResponse<Person>) => {
      const items = convertPeopleToListItems(data || []);

      return {
        items,
        total,
        metadata,
      };
    }
  );

const People = ({ items, total, metadata }: PeopleProps) => {
  const router = useRouter();
  const [currentItems, setCurrentItems] = useState<Array<ListItemProps>>(items);
  const [totalItems, setTotalItems] = useState<number | undefined>(total);
  const [filters, setFilters] = useState<{ [key: string]: any } | {}>({});
  const hasItems = totalItems && totalItems > 0;

  const onClickItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: ListItemProps
  ) => {
    event.preventDefault();

    router.push(`${AppRoutes.People}/${item.id}`);
  };
  const updateData = async (params: PaginationFilterType) => {
    const { items, total } = await getPropsData(params);

    setCurrentItems(items);
    setTotalItems(total);
  };

  const onSubmit = async (values: { [key: string]: any }) => {
    const valuesFiltered = cleanEmptyValues(values);

    await updateData({
      ...valuesFiltered,
    });

    setFilters(valuesFiltered);
  };

  return (
    <>
      {metadata && <PeopleFilters metadata={metadata} onSubmit={onSubmit} />}
      {hasItems ? (
        <>
          <List items={currentItems} onClickItem={onClickItem} />
          <Paginator
            total={totalItems}
            onClickPage={(page: number) => updateData({ ...filters, page })}
          />
        </>
      ) : (
        <span>Nothing to show</span>
      )}
    </>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const { total, items, metadata } = await getPropsData();
  return { props: { items, total, metadata } };
}

export default People;
