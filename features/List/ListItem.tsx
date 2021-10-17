/** @jsxImportSource theme-ui */
import { listItemRootStyles } from "./List.styles";
import { Image } from 'theme-ui'

export interface ListItemProps {
  id: string;
  title: string;
  picture: string;
}

export const ListItem = ({ id, title, picture }: ListItemProps) => (
  <div sx={listItemRootStyles}>
    <div>{title}</div>
    <Image src={picture} width="40px" height="auto" />
  </div>
);
