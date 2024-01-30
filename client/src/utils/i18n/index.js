import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { resources } from "./resources/index";
// import * as resources from "./resources.json";
 
i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
  });

  export default i18n;