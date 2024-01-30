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
    imgSrc: audiImg,
    name: "Audi",
    type: "Sedan",
    price: 125,
    brand: "Audi",
    fuel: "Gasoline",
    isFavorite: false
  },
  {
    id: uuidv4(),
    imgSrc: porscheImg,
    name: "Porsche",
    type: "Sportcar",
    price: 150,
    brand: "Porsche",
    fuel: "Diesel",
    isFavorite: false
  },
  {
    id: uuidv4(),
    imgSrc: teslaImg,
    name: "Tesla",
    type: "Sedan",
    price: 130,
    brand: "Tesla",
    fuel: "Electric",
    isFavorite: false
  },
  {
    id: uuidv4(),
    imgSrc: mercedesImg,
    name: "Mercedes-Benz",
    type: "Crossover",
    price: 170,
    brand: "Mercedes",
    fuel: "Gasoline",
    isFavorite: false
  },
  {
    id: uuidv4(),
    imgSrc: miniImg,
    name: "Mini",
    type: "Hatchback",
    price: 110,
    brand: "Mini",
    fuel: "Diesel",
    isFavorite: false
  },
  {
    id: uuidv4(),
    imgSrc: mgImg,
    name: "MG",
    type: "MPV",
    price: 160,
    brand: "MG",
    fuel: "Gasoline",
    isFavorite: false
  }
];