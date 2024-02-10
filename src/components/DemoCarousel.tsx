import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import DemoCard from './DemoCard';
import { Demonstration } from '@prisma/client';

type DemoCarouselProps = {
  demos: Demonstration[];
};

const DemoCarousel = ({ demos }: DemoCarouselProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {demos.map((demo) => (
          <CarouselItem
            key={demo.id}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <DemoCard
              title={demo.title}
              slug={demo.slug}
              place={demo.place}
              region={demo.region}
              startAt={demo.startAt}
              endAt={demo.endAt}
              categories={demo.categories}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default DemoCarousel;
