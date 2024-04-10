import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const ExtraSchema = z.object({
  password: z.string().min(1, { message: requiredErrorMsg }),
});

export const ProfileSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: requiredErrorMsg,
    })
    .trim(),
  lastname: z.string().min(1, { message: requiredErrorMsg }).trim(),
  email: z
    .string()
    .min(1, { message: "Se requiere un correo electronico" })
    .email("Este no es un correo electrónico válido")
    .trim(),
});

const PhoneSchema = z.object({
  phone: z
    .string()
    .min(9, { message: "Ingrese un número de teléfono" })
    .max(9, { message: "Número de teléfono inválido" }),
});

export const UserSchema = z.intersection(ExtraSchema, ProfileSchema);
export const ProfileEditSchema = z.intersection(ProfileSchema, PhoneSchema)
