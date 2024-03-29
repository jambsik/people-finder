/** @jsxImportSource theme-ui */
import type { NextPage } from "next";
import Link from "next/link";
import { AppRoutes } from "../constants/AppRoutes";
import { Theme } from "@theme-ui/css";
import { violetMedium } from "@jambsik-labs/ui-components";

const rootStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "center",
  alignItems: "center",
};
const titleStyles = {
  fontSize: "48px",
};
const linkStyles = {
  marginTop: "36px",
  fontSize: "48px",
  color: (theme: Theme) => theme.colors?.accent,
  cursor: "pointer",
  outline: `1px solid ${violetMedium}`,
  borderRadius: "4px",
  padding: "16px",
};

const Home: NextPage = () => {
  return (
    <div sx={rootStyles}>
      <div sx={titleStyles}>Welcome to the App</div>
      <Link href={AppRoutes.People}>
        <span sx={linkStyles}>Go to the app</span>
      </Link>
    </div>
  );
};

export default Home;
