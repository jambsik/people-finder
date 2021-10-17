import { Theme } from "@theme-ui/css";
import { mediumLightBlue } from "../theme/colors";

const borderStyles = `1px solid ${mediumLightBlue}`;

export const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
};

export const layoutContainerStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
};
export const layoutSideStyles = {
  width: "250px",
  height: "100%",
  backgroundColor: (theme: Theme) => theme.colors?.primary,
  borderRight: borderStyles,
};

export const layoutTopStyles = {
  width: "100%",
  height: "80px",
  backgroundColor: (theme: Theme) => theme.colors?.primary,
  borderBottom: borderStyles,
};
