import { v4 as uuidv4 } from "uuid";

import audiImg from "@/assets/imgs/cars/audi.jpg";
import porscheImg from "@/assets/imgs/cars/porsche.jpg";
import teslaImg from "@/assets/imgs/cars/tesla.jpg";
import mercedesImg from "@/assets/imgs/cars/mercedes.jpg";
import miniImg from "@/assets/imgs/cars/mini.jpg";
import mgImg from "@/assets/imgs/cars/mg.jpg";

export const carsData = [
  {
    id: uuidv4(),
    img: audiImg,
    name: "Audi",
    type: "Sedan",
    pricePerHour: 125,
    brand: "Audi",
    fuel: "Gasoline",
    isFavorite: false,
  },
  {
    id: uuidv4(),
    img: porscheImg,
    name: "Porsche",
    type: "Sportcar",
    pricePerHour: 150,
    brand: "Porsche",
    fuel: "Diesel",
    isFavorite: false,
  },
  {
    id: uuidv4(),
    img: teslaImg,
    name: "Tesla",
    type: "Sedan",
    pricePerHour: 130,
    brand: "Tesla",
    fuel: "Electric",
    isFavorite: false,
  },
  {
    id: uuidv4(),
    img: mercedesImg,
    name: "Mercedes-Benz",
    type: "Crossover",
    pricePerHour: 170,
    brand: "Mercedes",
    fuel: "Gasoline",
    isFavorite: false,
  },
  {
    id: uuidv4(),
    img: miniImg,
    name: "Mini",
    type: "Hatchback",
    pricePerHour: 110,
    brand: "Mini",
    fuel: "Diesel",
    isFavorite: false,
  },
  {
    id: uuidv4(),
    img: mgImg,
    name: "MG",
    type: "MPV",
    pricePerHour: 160,
    brand: "MG",
    fuel: "Gasoline",
    isFavorite: false,
  },
];
