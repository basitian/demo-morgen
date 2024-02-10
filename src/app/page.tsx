import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import { SkeletonCarousel } from '@/components/SkeletonCards';
import UpcomingDemos from '@/components/UpcomingDemos';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <div className="my-8">
        <h1 className="text-3xl text-primary mb-4">Demnächst</h1>
        <Suspense fallback={<SkeletonCarousel />}>
          <UpcomingDemos />
        </Suspense>
      </div>
    </>
  );
}
