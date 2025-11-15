/** @format */

let { v4: uuidv4 } = require("uuid");
let posts = [
  {
    id: uuidv4(),
    username: "rupesh_dev",
    content: "Learning full stack and AI like a boss.",
  },
  {
    id: uuidv4(),
    username: "tech_guru",
    content: "JavaScript makes my brain go brrr.",
  },
  {
    id: uuidv4(),
    username: "frontend_freak",
    content: "CSS ne phir se rula diya 😭.",
  },
  {
    id: uuidv4(),
    username: "backend_bhau",
    content: "Express.js is my comfort framework.",
  },
  {
    id: uuidv4(),
    username: "mern_monster",
    content: "MongoDB collections > toxic relationships.",
  },
];

module.exports = posts;
