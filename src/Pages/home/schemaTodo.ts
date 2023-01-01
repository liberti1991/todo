import { object, string } from "yup";

export const schemaTodo = object({
  title: string()
    .required("Campo obrigatório.")
    .min(3, "Você precisa inserir pelo menos 3 caracteres.")
    .max(30, "Máximo de 30 caracteres."),
  description: string().max(255, "Máximo de 255 caracteres."),
});
