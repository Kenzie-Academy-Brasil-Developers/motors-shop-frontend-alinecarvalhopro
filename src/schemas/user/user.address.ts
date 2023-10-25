import { z } from "zod";
import { IAddress } from "../../providers/UserContext";

export const addressSchema = z.object({
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
});

export type TAddressSchema = z.infer<typeof addressSchema>;

export type TUpdateAddress = Omit<IAddress, "id">;

export type TUpdateAddressPartial = Partial<TUpdateAddress>;

