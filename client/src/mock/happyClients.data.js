import { v4 as uuidv4 } from "uuid";

import userAvatarOne from "@/assets/imgs/avatars/user-1.jpg";
import userAvatarTwo from "@/assets/imgs/avatars/user-2.jpg";
import userAvatarThree from "@/assets/imgs/avatars/user-3.jpg";
import userAvatarFour from "@/assets/imgs/avatars/user-4.jpg";

export const happyClientsData = [
  {
    id: uuidv4(),
    username: "Catherine Williams",
    avatar: userAvatarOne,
    status: "Regular client",
    comment: "This is my second time booking with you. Not only are you the best on the coast but you have the best prices and the friendliest staff. I will be renting a car from your company now."
  },
  {
    id: uuidv4(),
    username: "Samantha Brown",
    avatar: userAvatarTwo,
    status: "Regular client",
    comment: "I have rented a car quite a few times in LA and cannot fault any of the services. Your staff is wonderful, the process is easy, and prices are very affordable. I’m glad to recommend your services!"
  },
  {
    id: uuidv4(),
    username: "Rupert Wood",
    avatar: userAvatarThree,
    status: "Regular client",
    comment: "Cars Rent is one of the best car rental services in our city. I had a fantastic experience with them this year. They provided me with a reliable and affordable car that was just what I asked for."
  },
  {
    id: uuidv4(),
    username: "Sam Peterson",
    avatar: userAvatarFour,
    status: "Regular client",
    comment: "I use the services of Cars Rent all the time when I am in town for business and pleasure and I find their solutions and fleet impeccable. I highly recommend them to all my friends."
  }
];
