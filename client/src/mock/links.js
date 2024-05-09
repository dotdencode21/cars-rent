import { v4 as uuidv4 } from "uuid";

export const links = [
  { id: uuidv4(), title: "Navbar home page label", to: "/" },
  { id: uuidv4(), title: "Navbar about page label", to: "/about" },
  { id: uuidv4(), title: "Navbar cars page label", to: "/cars" },
  { id: uuidv4(), title: "Navbar contact page label", to: "/contact" },
];

export const sidebarLinks = [
  {
    id: uuidv4(),
    title: "User details",
    name: "userDetails",
    to: "/profile/user-details",
  },
  {
    id: uuidv4(),
    title: "Booked cars",
    name: "bookedCars",
    to: "/profile/booked-cars",
  },
  {
    id: uuidv4(),
    title: "Recommendations",
    name: "recommendations",
    to: "/profile/recommendations",
  },
  {
    id: uuidv4(),
    title: "Actions",
    name: "actions",
    to: "/profile/actions",
  },
];
