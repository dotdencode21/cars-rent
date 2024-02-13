import { v4 as uuidv4 } from "uuid";

import englandIcon from "@/assets/icons/countries/england.svg";
import ukraineIcon from "@/assets/icons/countries/ukraine.svg";

export const selectCarOptions = [
  {  
    id: uuidv4(),
    name: "brand",
    options: [
      { id: uuidv4(), name: "brand", title: "Introduction form any brand option", value: "any_brand", default: true },
      { id: uuidv4(), name: "brand", title: "Ford", value: "ford", default: false },
      { id: uuidv4(), name: "brand", title: "Toyota", value: "toyota", default: false },
      { id: uuidv4(), name: "brand", title: "BMW", value: "bmw", default: false },
    ]
  },
  {  
    id: uuidv4(),
    name: "type",
    options: [
      { id: uuidv4(), name: "type", title: "Introduction form any type option", value: "any_type", default: true },
      { id: uuidv4(), name: "type", title: "Introduction form sedan type option", value: "sedan", default: false },
      { id: uuidv4(), name: "type", title: "Introduction form hatchback type option", value: "hatchback", default: false },
      { id: uuidv4(), name: "type", title: "Introduction form crossover type option", value: "crossover", default: false },
    ]
  },
  {  
    id: uuidv4(), 
    name: "price",
    options: [
      { id: uuidv4(), name: "price", title: "Introduction form price low to high", value: "low_to_high", default: true },
      { id: uuidv4(), name: "price", title: "Introduction form price high to low", value: "high_to_low", default: false },
    ]
  } 
]

export const selectCountryOptions = [
  {
    id: uuidv4(),
    title: "ENG",
    countryCode: "en",
    icon: englandIcon
  },
  {
    id: uuidv4(),
    title: "UA",
    countryCode: "ua",
    icon: ukraineIcon
  }
];