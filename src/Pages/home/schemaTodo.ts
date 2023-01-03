import { object, string } from "yup";

export const schemaTodo = object({
  title: string()
    .required("Required field.")
    .min(3, "You need to enter at least 3 characters.")
    .max(30, "Maximum 30 characters."),
  description: string().max(255, "Maximum 255 characters."),
});
