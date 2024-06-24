import { z } from "zod";

export const FormSchema = z.object({
  query: z.string().min(2, {
    message: "Query must have at least 2 characters.",
  }),
});
