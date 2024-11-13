import fs from "fs";
const datapath = "./data/usersData.json";
export function readUsersData() {
  try {
    const data = JSON.parse(fs.readFileSync(datapath, "utf-8"));
    return data;
  } catch (error) {
    return [];
  }
}
