import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const LoginSchema = z.object({
  email: z.string().min(1, { message: requiredErrorMsg}).email("Este no es un correo electrónico válido"),
  password: z.string().min(1, { message: requiredErrorMsg }),
  remember: z.boolean().default(false),
});
