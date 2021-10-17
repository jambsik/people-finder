import React, { MouseEventHandler } from "react";
import { Layout } from "../../features/Layout/Layout";
import { List } from "../../features/List/List";
import { ListItemProps } from "../../features/List/ListItem";
import { getAllPeopleData } from "../../services/peopleApi";
import { convertPeopleToListItems } from "./peopleHelper";
import { useRouter } from "next/router";
import { AppRoutes } from "../../constants/AppRoutes";

export interface PeopleProps {
  items: Array<ListItemProps>;
}

const People = ({ items }: PeopleProps) => {
  const router = useRouter();

  const onClickItem = (
    event: MouseEventHandler<HTMLDivElement>,
    item: ListItemProps
  ) => {
    event.preventDefault();

    router.push(`${AppRoutes.People}/${item.id}`);
  };

  return <List items={items} onClickItem={onClickItem} />;
};

// This gets called on every request
export async function getServerSideProps() {
  const data = await getAllPeopleData();
  const items = convertPeopleToListItems(data);

  return { props: { items } };
}

export default People;
