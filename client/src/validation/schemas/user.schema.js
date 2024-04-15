import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  firstName: Yup.string().trim().required("First name field is required"),
  lastName: Yup.string().trim().required("Last name field is required"),
  location: Yup.string().trim().required("Location field is required"),
});
