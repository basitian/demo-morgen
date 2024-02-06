import DemoCarousel from '@/components/DemoCarousel';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import prisma from '@/lib/prisma';
import { addDays } from 'date-fns';

export default async function Home() {
  const now = new Date();
  const demosNext = await prisma.demonstration.findMany({
    where: {
      OR: [
        {
          startAt: {
            gte: now,
            lte: addDays(now, 1),
          },
        },
        {
          endAt: {
            gte: now,
          },
          startAt: {
            lte: now,
          },
        },
      ],
      published: true,
    },
    orderBy: {
      startAt: 'asc',
    },
  });

  return (
    <>
      <Hero />
      <DemoCarousel
        heading="Demnächst"
        demos={demosNext}
      />
    </>
  );
}
