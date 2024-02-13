import { v4 as uuidv4 } from "uuid";

export const links = [
  { id: uuidv4(), title: "Navbar home page label", to: "/" },
  { id: uuidv4(), title: "Navbar about page label", to: "/about" },
  { id: uuidv4(), title: "Navbar cars page label", to: "/cars" },
  { id: uuidv4(), title: "Navbar contact page label", to: "/contact" },
];