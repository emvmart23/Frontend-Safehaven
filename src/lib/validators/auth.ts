import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, { message: "campo requerido" }),
  password: z.string().min(1, { message: "campo requerido" }),
  remember: z.boolean().default(false),
});
