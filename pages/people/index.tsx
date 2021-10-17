import React from "react";
import { Layout } from "../../features/Layout/Layout";
import { List } from "../../features/List/List";
import { ListItemProps } from "../../features/List/ListItem";
import { getAllPeopleData } from "../../services/peopleApi";
import { convertPeopleToListItems } from "./peopleHelper";

export interface PeopleProps {
  items: Array<ListItemProps>;
}

const People = ({ items }: PeopleProps) => {
  return (
    <Layout>
      <List items={items} />
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const data = await getAllPeopleData();
  const items = convertPeopleToListItems(data);

  return { props: { items } };
}

export default People;
