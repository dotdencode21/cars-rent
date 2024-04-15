import { create } from "zustand";
import axios from "axios";

export const useCityStore = create((set) => ({
  cities: [],

  getCities: async () => {
    try {
      // const {
      //   data: { data: countries },
      // } = await axios.get("https://countriesnow.space/api/v0.1/countries");

      // const [allStates, allCities] = await Promise.all([
      //   axios.post("https://countriesnow.space/api/v0.1/countries/cities", {
      //     country: "Ukraine",
      //   }),
      //   axios.post(
      //     "https://countriesnow.space/api/v0.1/countries/population/cities/filter",
      //     { country: "Ukraine" }
      //   ),
      // ]);

      // const { data } = await axios.get(
        // "https://restcountries.com/v3.1/name/ukraine?fullText=true"
        // {
        //   country: "Nigeria",
        //   state: "Edo",
        // }
        // {
        //   params: {
        //     country: "Ukraine",
        //     state: "Kyiv",
        //   },
        // }
      // );

      // console.log(data);

      // const {
      //   data: { data: states },
      // } = allStates;
      // const {
      //   data: { data: cities },
      // } = allCities;

      // console.log(states);
      // console.log(cities);

      // const a = states.map((state) => ({
      //   name: state,
      //   type: cities.map(({ city }) => city).includes(state)
      //     ? "city"
      //     : "village",
      // }));

      // console.log(a);

      // console.log(countries);

      // set({
      //   cities: countries
      //     ? countries.filter((item) => item.country === "Ukraine")[0].cities
      //     : [],
      // });
    } catch (e) {
      throw e;
    }
  },
}));
