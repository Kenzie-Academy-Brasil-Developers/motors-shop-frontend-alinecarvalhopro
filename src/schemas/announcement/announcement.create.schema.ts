import { z } from "zod";
import { IAnnoucement } from "../../providers/AnnouncementsContext";

export const createAnnouncemetSchema = z.object({
  brand: z.string().min(1, "Campo obrigatório"),
  model: z.string().min(1, "Campo obrigatório"),
  mileage: z.number().min(1, "Campo obrigatório").positive().or(z.string()),
  color: z.string().min(1, "Campo obrigatório"),
  year: z.string().min(1, "Campo obrigatório"),
  price: z.number().min(1, "Campo obrigatório").positive().or(z.string()),
  list_price: z.number().min(1, "Campo obrigatório").positive().or(z.string()),
  description: z.string().min(1, "Campo obrigatório"),
  fuel: z.string().min(1, "Campo obrigatório"),
  images: z
    .object({
      url: z.string().optional(),
    })
    .optional()
    .array(),
});

export const updateAnnouncementSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  mileage: z.number().positive().or(z.string()).optional(),
  color: z.string().optional(),
  year: z.string().optional(),
  price: z.number().positive().or(z.string()).optional(),
  list_price: z.number().positive().or(z.string()).optional(),
  description: z.string().optional(),
  fuel: z.string().optional(),
  images: z
    .object({
      url: z.string().optional(),
    })
    .optional()
    .array(),
});

export type TCreateAnnouncemet = z.infer<typeof createAnnouncemetSchema>;

export type TUpdateAnnouncement = Omit<IAnnoucement, "id">;

export type TUpdateAnnouncementPartial = Partial<TUpdateAnnouncement>;

