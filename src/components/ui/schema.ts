import { requiredStringField, optionalStringField} from "./reusableSchemes";
import {z} from "zod";

const emailRegex = /^(?![-.])[\w.-]+@(?![-.])[\w.-]+\.[a-zA-Z]{2,}$/;

export const contactFormSchema = z.object({
  name: requiredStringField(1, 255, "Por favor, digite seu nome."),
  email: requiredStringField(1, 255, "O email não pode estar vazio").refine(
    (value) => value === null || emailRegex.test(value || "") || value === "",
    {
      message: "Email inválido",
    },
  ),
  phone:  requiredStringField(15, 255, "Digite o telefone"),
  message:  requiredStringField(1, 2126, "Por favor, explique o motivo do contato."),
});
