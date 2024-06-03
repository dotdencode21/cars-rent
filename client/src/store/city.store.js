import { create } from "zustand";
import { CityService } from "@/services/city.service";

export const useCityStore = create((set) => ({
  cities: [],

  getCities: async () => {
    const { data } = await CityService.getCitites();

    set({
      cities: data
        .filter(
          (city) =>
            !city.includes("Raion") &&
            !city.includes("Rayon") &&
            !city.includes("rayon") &&
            !city.includes("Mis'ka Rada") &&
            !city.includes("Mis’krada") &&
            !city.includes("Mis’ka Rada")
        )
        .map((city) => {
          return {
            name: city,
            type: [
              "Kyiv",
              "Kharkiv",
              "Odessa",
              "Dnipro",
              "Donetsk",
              "Lviv",
              "Zaporozhe",
              "Zaporizhia",
              "Sevastopol",
              "Mariupol",
              "Lugansk",
              "Vinnytsya",
              "Makiyivka",
              "Simferopol",
              "Chernihiv",
              "Poltava",
              "Kherson",
              "Khmelnytskyi",
              "Cherkasy",
              "Chernivtsi",
              "Zhytomyr",
              "Sumy",
              "Rivne",
              "Gorlovka",
              "Ivano-Frankivsk",
              "Ternopil",
              "Kropyvnytskyi",
              "Lutsk",
              "Kremenchuk",
              "Bila Tserkva",
              "Kerch",
              "Melitopol",
              "Kramatorsk",
              "Uzhgorod",
              "Brovary",
              "Yevpatoriya",
              "Berdyansk",
              "Alchevs’k",
              "Nikopol",
              "Slavyansk",
              "Pavlograd",
              "Lisichansk",
              "Yenakiyeve",
              "Aleksandriya",
              "Konstantinovka",
            ].includes(city)
              ? "city"
              : "village",
          };
        }),
    });
  },
}));
