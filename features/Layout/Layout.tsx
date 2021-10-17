/** @jsxImportSource theme-ui */

import { ReactNode } from "react";
import {
  layoutContainerStyles,
  layoutRootStyles,
  layoutSideStyles,
  layoutStyles,
  layoutTopStyles,
} from "./Layout.styles";

export interface LayoutProps {
  children: ReactNode | ReactNode[];
  menu?: ReactNode;
  toolbar?: ReactNode;
}

export const Layout = ({ children, menu, toolbar }: LayoutProps) => {
  return (
    <div sx={layoutStyles}>
      <div sx={layoutTopStyles}>{toolbar}</div>
      <div sx={layoutRootStyles}>
        <div sx={layoutSideStyles}>{menu}</div>
        <div sx={layoutContainerStyles}>{children}</div>
      </div>
    </div>
  );
};
