import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "Title must be more than 2 characters"),
  price: z.coerce.number(),
  description: z
    .string()
    .max(50, "Description must be less than 50 characters"),
  category: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});
