import { userList } from "../model/usermodel.js";
export function userData(req, res) {
  res.render("user", { userList:userList() });
}