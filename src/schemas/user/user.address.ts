import { z } from "zod";

export const addressSchema = z.object({
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
});

export type TAddressSchema = z.infer<typeof addressSchema>;
