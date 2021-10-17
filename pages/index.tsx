import type { NextPage } from "next";
import Link from "next/link";
import { AppRoutes } from "../constants/AppRoutes";

const Home: NextPage = () => {
  return (
    <div>
      hello
      <Link href={AppRoutes.People}>Go to App</Link>
    </div>
  );
};

export default Home;
