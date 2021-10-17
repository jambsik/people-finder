import { Theme } from "@theme-ui/css";

export const listRootStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export const listItemRootStyles = {
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems:'center',
  backgroundColor: (theme: Theme) => theme.colors?.primary,
  marginBottom: "24px",
  borderRadius: "8px",
  padding: "16px",
};
