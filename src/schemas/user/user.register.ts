import { z } from "zod";
import { addressSchema } from "./user.address";

export const registerSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Forneça um e-mail válido"),
    cpf: z.string().max(11, "Forneça um CPF válido"),
    phone_number: z.string().max(11, "Forneça um número válido"),
    birth: z.string().min(10, "Data de nascimento é obrigatória"),
    description: z.string().min(1, "Insira uma descrição"),
    address: addressSchema,
    seller: z.boolean().nullish(),
    password: z
      .string()
      .min(7, "A senha precisa conter pelo menos 7 caracteres.")
      .max(120, "A senha pode conter no máximo 120 carácteres")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos 1 letra maiúscula.")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos 1 letra minúscula.")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos 1 número")
      .regex(
        /(?=.?[`!@#$%^&()_+\-=[\]{};':"\\|,.<>/?~*])/,
        "Pelo menos um caracter especial"
      ),
    confirmPassword: z.string().min(1, "Confirmar a senha é obrigatório."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });

export type TRegisterSchema = z.infer<typeof registerSchema>;
