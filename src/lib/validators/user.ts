import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const UserSchema = z.object({
  name: z.string().min(4, {
    message: requiredErrorMsg,
  }).trim(),
  lastname: z.string().min(1, { message: requiredErrorMsg}).trim(),
  email: z.string().min(1, { message: "Se requiere un correo electronico"}).email("Este no es un correo electrónico válido").trim(),
  password: z.string().min(1, { message: requiredErrorMsg }),
  location: z.string().min(1, { message: "Selecciona un distrito" }),
});
