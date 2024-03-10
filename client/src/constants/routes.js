import { v4 as uuidv4 } from "uuid";

export const ROUTES_NAMES = [
  {
    id: uuidv4(),
    title: "About Us",
    to: "/about"
  },
  {
    id: uuidv4(),
    title: "Cars",
    to: "/cars"
  },
  {
    id: uuidv4(),
    title: "Contact Us",
    to: "/contact"
  },
  {
    id: uuidv4(),
    title: "Privacy policy",
    to: "/privacy-policy"
  }
];

export const ROUTES_NAMES_TRANSLATION = {
  "Home": "Route home page title",
  "About Us": "Route about page title",
  "Cars": "Route cars page title",
  "Contact Us": "Route contact page title",
  "Privacy policy": "Route privacy policy page title",
};