import {Theme} from "@theme-ui/css";

export const listRootStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column" as "column",
};

export const listItemRootStyles = {
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: (theme: Theme) => theme.colors?.primary,
  marginBottom: "24px",
  borderRadius: "8px",
  padding: "16px",
  cursor: "pointer",
};
