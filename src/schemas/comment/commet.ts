import { z } from "zod";

export const commentSchema = z.object({
  comment: z.string().min(1, "Insira um commentário válido"),
});

export type TCommentSchema = z.infer<typeof commentSchema>;
