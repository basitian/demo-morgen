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
  heading: string;
  demos: Demonstration[];
};

const DemoCarousel = ({ heading, demos }: DemoCarouselProps) => {
  return (
    <div className="my-8">
      <h1 className="text-3xl text-primary mb-4">{heading}</h1>
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
    </div>
  );
};

export default DemoCarousel;
