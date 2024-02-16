import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1, {}),
  lastname: z.string().min(1, {}),
  email: z.string().min(1, { message: "campo requerido" }),
  password: z.string().min(1, { message: "campo requerido" }),
  location: z.string().min(1, { message: "d" })
});
