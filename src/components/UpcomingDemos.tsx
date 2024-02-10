import React from 'react';
import DemoCarousel from './DemoCarousel';
import prisma from '@/lib/prisma';

const UpcomingDemos = async () => {
  const demosNext = await prisma.demonstration.findMany({
    where: {
      endAt: {
        gte: new Date(),
      },
      published: true,
    },
    orderBy: {
      startAt: 'asc',
    },
    take: 10,
  });

  return <DemoCarousel demos={demosNext} />;
};

export default UpcomingDemos;
