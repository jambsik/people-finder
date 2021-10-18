import React, { useState } from "react";
import { List } from "../../features/List/List";
import { ListItemProps } from "../../features/List/ListItem";
import { getAllPeopleData } from "../../services/peopleApi";
import { convertPeopleToListItems } from "../../helpers/peopleHelper";
import { useRouter } from "next/router";
import { AppRoutes } from "../../constants/AppRoutes";
import { ApiResponse, ApiResponseMetadata } from "../../Models/ApiResponse";
import { Person } from "../../Models/Person";
import { Paginator } from "../../features/Paginator/Paginator";
import { PaginationFilterType } from "../../helpers/prepareDataHelper";
import { PeopleFilters } from "../../components/PeopleFilters/PeopleFilters";

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

  const onClickItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: ListItemProps
  ) => {
    event.preventDefault();

    router.push(`${AppRoutes.People}/${item.id}`);
  };
  const onClickPage = async (page: number) => {
    const { items, total } = await getPropsData({
      page,
    });

    setCurrentItems(items);
    setTotalItems(total);
  };

  return (
    <>
      {metadata && <PeopleFilters metadata={metadata} />}
      <List items={currentItems} onClickItem={onClickItem} />
      {totalItems && <Paginator total={totalItems} onClickPage={onClickPage} />}
    </>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const { total, items, metadata } = await getPropsData();
  return { props: { items, total, metadata } };
}

export default People;
