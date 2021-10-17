import nc from "next-connect";
import { getAllData } from "./DataController";

const handler = nc().get(getAllData);

export default handler;
