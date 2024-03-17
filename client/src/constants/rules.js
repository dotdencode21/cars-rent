import { v4 as uuidv4 } from "uuid";

export const rules = {
  familyCarRule: [
    {
      id: uuidv4(),
      title: "Does the car have a crossover body type?",
      mainRule: false,
      order: 0,
    },
    {
      id: uuidv4(),
      title: "Does the car have 4 or more seats?",
      mainRule: true,
      order: 1,
    },
    {
      id: uuidv4(),
      title: "Does the car have a powerful enough engine?",
      mainRule: true,
      order: 2,
    },
    {
      id: uuidv4(),
      title: "Does the car use gasoline as fuel?",
      mainRule: false,
      order: 3,
    },
  ],
  sportCarRule: [
    {
      id: uuidv4(),
      title: "Does the car have a sport car body type?",
      mainRule: false,
      order: 0,
    },
    {
      id: uuidv4(),
      title: "Does the car have at least 2 seats?",
      mainRule: true,
      order: 1,
    },
    {
      id: uuidv4(),
      title: "Is extreme driving possible in this car?",
      mainRule: true,
      order: 2,
    },
    {
      id: uuidv4(),
      title: "Does the car use diesel as fuel?",
      mainRule: false,
      order: 3,
    },
  ],
  economicalCarRule: [
    {
      id: uuidv4(),
      title: "Does the car have a hatchback body type?",
      mainRule: false,
      order: 0,
    },
    {
      id: uuidv4(),
      title: "Does the car have 2 or more seats?",
      mainRule: true,
      order: 1,
    },
    {
      id: uuidv4(),
      title: "Is a quiet ride preferable for this type of car?",
      mainRule: true,
      order: 2,
    },
    {
      id: uuidv4(),
      title: "Does the car use electric as fuel?",
      mainRule: false,
      order: 3,
    },
  ],
};
