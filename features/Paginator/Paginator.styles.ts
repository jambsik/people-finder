import { Theme } from "@theme-ui/css";

export const paginatorRootStyles = {
  display: "flex",
  outline: (theme: Theme) => `2px solid ${theme.colors?.secondary}`,
  borderRadius: "8px",
  padding: "8px",
  marginBottom: "24px",
  marginTop: "24px",
  alignItems: "center",
};

export const paginatorItemStyles = {
  marginRight: 2,
  cursor: "pointer",
  marginLeft: "24px",
};
