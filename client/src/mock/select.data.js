import { v4 as uuidv4 } from "uuid";

import englandIcon from "@/assets/icons/countries/england.svg";
import ukraineIcon from "@/assets/icons/countries/ukraine.svg";

export const selectCountryOptions = [
  {
    id: uuidv4(),
    title: "ENG",
    countryCode: "en",
    icon: englandIcon,
  },
  {
    id: uuidv4(),
    title: "UA",
    countryCode: "ua",
    icon: ukraineIcon,
  },
];
