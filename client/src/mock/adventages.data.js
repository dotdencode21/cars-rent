import { v4 as uuidv4 } from "uuid";

export const adventagesData = [
  { 
    id: uuidv4(), 
    title: "Premium Service",
    subtitle: "Cars Rent provides high-quality service to everyone who is looking for reliable car rentals.",
    icon: "star",
    order: 1
  },
  { 
    id: uuidv4(), 
    title: "Variety of Locations",
    subtitle: "We have a variety of car rental offices located throughout the USA in almost all 50 states.",
    icon: "location",
    order: 2
  },
  { 
    id: uuidv4(), 
    title: "Qualified Team",
    subtitle: "You can fully rely on our team of professionals who are always ready to help you.",
    icon: "sun",
    order: 3
  }
];
