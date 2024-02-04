import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import DemoCard from './DemoCard';

type DemoCarouselProps = {
  heading: string;
};

const DemoCarousel = ({ heading }: DemoCarouselProps) => {
  return (
    <>
      <h1 className="text-3xl text-primary">{heading}</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <DemoCard
              title="Nie wieder ist Jetzt!"
              location="Berlin"
              timestamp={new Date()}
              tags={['Gesellschaft', 'Politik']}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <DemoCard
              title="Nie wieder ist Jetzt!"
              location="Berlin"
              timestamp={new Date()}
              tags={['Gesellschaft', 'Politik']}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <DemoCard
              title="Nie wieder ist Jetzt!"
              location="Berlin"
              timestamp={new Date()}
              tags={['Gesellschaft', 'Politik']}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <DemoCard
              title="Nie wieder ist Jetzt!"
              location="Berlin"
              timestamp={new Date()}
              tags={['Gesellschaft', 'Politik']}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default DemoCarousel;
