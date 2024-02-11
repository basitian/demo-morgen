import { ArrowRight, Plus } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white"
          role="alert"
        >
          <span className="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3">
            Hinweis
          </span>{' '}
          <span className="text-sm font-medium">
            Wir sind mitten im Aufbau der Seite
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Von Menschen für Mensch und Demokratie
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          #EhrenamtIstLeidenschaft
        </p>
        <div className="flex flex-col lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button
            size={'lg'}
            asChild
          >
            <Link href="/search">
              Demo finden
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </Link>
          </Button>
          <Button
            variant={'secondary'}
            size={'lg'}
            asChild
          >
            <Link href={'/new'}>
              <Plus className="mr-2 -ml1 w-5 h-5" />
              Demo hinzufügen
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
