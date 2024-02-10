'use server';

import prisma from '@/lib/prisma';
import { slugify } from '@/lib/slugifyer';
import {
  DemonstrationSchemaType,
  demonstrationSchema,
} from '@/schemas/demonstration';

export async function createDemonstration(data: DemonstrationSchemaType) {
  const validation = demonstrationSchema.safeParse(data);
  if (!validation.success)
    throw new Error('Die eingegebenen Daten sind ungültig!');

  const { title, description, startAt, endAt, categories } = data;

  const demo = await prisma.demonstration.create({
    data: {
      address: 'test',
      latitude: 0,
      longitude: 0,
      place: 'test',
      postcode: '1234',
      region: 'Test',
      title,
      description,
      startAt,
      endAt,
      categories: categories.sort(),
      published: false,
      slug: slugify(title),
    },
  });

  if (!demo) throw new Error('Fehler beim Speichern!');

  return demo;
}
