/** @jsxImportSource theme-ui */
import React from "react";
import { ListItem, ListItemProps } from "./ListItem";
import { listRootStyles } from "./List.styles";

export interface ListProps {
  items: Array<ListItemProps>;
}

export const List = ({ items }: ListProps) => {
  return (
    <div sx={listRootStyles}>
      {items.map(({ id, title, picture, getPicture }: ListItemProps) => (
        <React.Fragment key={id}>
          <ListItem id={id} title={title} picture={picture} />
        </React.Fragment>
      ))}
    </div>
  );
};
