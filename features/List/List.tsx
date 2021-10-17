/** @jsxImportSource theme-ui */
import React, { MouseEventHandler } from "react";
import { ListItem, ListItemProps } from "./ListItem";
import { listRootStyles } from "./List.styles";

export interface ListProps {
  items: Array<ListItemProps>;
  onClickItem: (
    event: MouseEventHandler<HTMLDivElement>,
    item: ListItemProps
  ) => void;
}

export const List = ({ items, onClickItem }: ListProps) => {
  return (
    <div sx={listRootStyles}>
      {items.map((item: ListItemProps) => (
        <div
          key={item.id}
          onClick={(event: MouseEventHandler<HTMLDivElement>) =>
            onClickItem(event, item)
          }
        >
          <ListItem {...item} />
        </div>
      ))}
    </div>
  );
};
