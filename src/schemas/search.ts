import * as z from 'zod';

export const searchSchema = z.object({
  date: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .optional(),
  categories: z.array(z.string()),
  locationId: z.string().optional(),
});

export type SearchSchemaType = z.infer<typeof searchSchema>;
