import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    })
    .trim(),
  email: z
    .string()
    .min(1, { message: "Se requiere un correo electronico" })
    .email("Este no es un correo electrónico válido")
    .trim(),
  message: z
    .string()
    .max(160)
    .min(4)
    .trim(),
  phone: z
    .string()
    .min(9, { message: "Ingrese un número de teléfono" })
    .max(9, { message: "Número de teléfono inválido" }),
});

export default contactSchema;
