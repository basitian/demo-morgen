import prisma from '@/lib/prisma';
import React from 'react';
import DemoCard from './DemoCard';

type DemoGridProps = {
  categories: string[];
  from?: Date;
  to?: Date;
};

const DemoGrid = async ({ categories, from, to }: DemoGridProps) => {
  const demos = await prisma.demonstration.findMany({
    where: {
      endAt: {
        lte: to,
        gte: from ?? new Date(),
      },
      categories: {
        hasEvery: categories,
      },
      published: true,
    },
    orderBy: {
      startAt: 'asc',
    },
    take: 10,
  });

  return (
    <>
      <p className="my-4">{`${demos.length} Demonstrationen gefunden`}</p>
      <div className="grid gap-4 grid-cols-3">
        {demos.map((demo) => (
          <DemoCard
            title={demo.title}
            categories={demo.categories}
            endAt={demo.endAt}
            startAt={demo.startAt}
            place={demo.place}
            key={demo.id}
            region={demo.region}
            slug={demo.slug}
          />
        ))}
      </div>
    </>
  );
};

export default DemoGrid;
