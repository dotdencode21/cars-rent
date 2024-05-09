import * as Yup from "yup";

export const createCarSchema = Yup.object().shape({
  name: Yup.string().required("Name field is required"),
  type: Yup.string().required("Type field is required"),
  pricePerHour: Yup.string().required("Price field is required"),
  brand: Yup.string().required("Brand field is required"),
});
