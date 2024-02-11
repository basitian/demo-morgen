import DemoGrid from '@/components/DemoGrid';
import SearchBar from '@/components/SearchBar';
import { Suspense } from 'react';

type SearchPageParams = {
  from?: Date;
  to?: Date;
  categories?: string;
};

const SearchPage = ({ searchParams }: { searchParams: SearchPageParams }) => {
  return (
    <div className="mb-8 mt-8 space-y-5">
      <h1 className="text-4xl font-bold">Suche</h1>
      <SearchBar />
      <Suspense>
        <DemoGrid
          categories={
            searchParams.categories ? searchParams.categories.split(',') : []
          }
          from={searchParams.from}
          to={searchParams.to}
        />
      </Suspense>
    </div>
  );
};

export default SearchPage;
