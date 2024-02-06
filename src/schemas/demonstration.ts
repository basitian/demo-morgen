import { startOfToday } from 'date-fns';
import * as z from 'zod';

export const demonstrationSchema = z
  .object({
    title: z
      .string()
      .min(3, 'Der Titel muss mindestens drei Zeichen lang sein.')
      .max(255, 'Der Titel darf maximal 255 Zeichen lang sein.'),
    description: z.string().optional(),
    startAt: z
      .date({ required_error: 'Der Veranstaltungsbeginn muss gewählt werden.' })
      .min(
        startOfToday(),
        'Der Veranstaltungsbeginn darf nicht in der Vergangenheit liegen.'
      ),
    endAt: z
      .date({ required_error: 'Das Veranstaltungsende muss gewählt werden.' })
      .min(
        new Date(),
        'Das Veranstaltungsende darf nicht in der Vergangenheit liegen.'
      ),
    categories: z.array(z.string()),
  })
  .refine((data) => data.endAt > data.startAt, {
    message: 'Veranstaltungsende darf nicht vor dem Start liegen.',
    path: ['endAt'],
  });

export type DemonstrationSchemaType = z.infer<typeof demonstrationSchema>;
