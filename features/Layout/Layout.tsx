/** @jsxImportSource theme-ui */

import React, { ReactNode } from "react";
import {
  layoutContainerStyles,
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
      <div sx={layoutContainerStyles}>
        <div sx={layoutSideStyles}>{menu}</div>
        {children}
      </div>
    </div>
  );
};
