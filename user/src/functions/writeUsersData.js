import fs from "fs";
import { readUsersData } from "./readUsersData.js";

export function writeUsersData(userData) {
  const datapath = "./data/usersData.json";
  const dataToWrite = JSON.stringify(userData);
  fs.writeFileSync(datapath, dataToWrite, "utf-8");
}
