import nc from "next-connect";
import {getDataById} from "./DataController";

const handler = nc().get(getDataById);

export default handler;
