import React from 'react';
import { Button } from './ui/button';
import { Plus, Search } from 'lucide-react';
import { Input } from './ui/input';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 px-7 py-5 border-b shadow-sm z-50 bg-white">
      <nav className="flex justify-between items-center">
        <a
          href="/"
          className=""
        >
          <span className="border-4 border-primary text-primary py-1 px-2 border-black items-center justify-center italic font-extrabold text-3xl">
            DMHT
          </span>
        </a>
        <div className="flex gap-2">
          <Input
            className="w-80 rounded-full"
            placeholder="Suche"
          />
          <Button
            size="icon"
            className="rounded-full -ml-12"
          >
            <Search className="h-3 w-3" />
          </Button>
        </div>
        <Button asChild>
          <Link href={'/new'}>
            <Plus className="mr-2 h-4 w-4" />
            Demo hinzufügen
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
