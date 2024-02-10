'use client';
import React, { useEffect, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Input } from './ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { suggestLocations } from '@/lib/locationSearch';

type LocationPickerProps = {
  selectedId?: string;
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
  placeholder?: string;
};

const LocationPicker = ({
  selectedId,
  onChange,
  className,
  placeholder,
  ...props
}: LocationPickerProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const searchLocation = async () => {
      let results = [];
      setIsSearching(true);
      if (debouncedSearchTerm) {
        const suggestions = await suggestLocations(debouncedSearchTerm);
        results = suggestions || [];
      }

      setIsSearching(false);
      setResults(results);
      if (results.length > 0) {
        setOpen(true);
      }
    };

    searchLocation();
  }, [debouncedSearchTerm]);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <Input
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <PopoverContent>{JSON.stringify(results)}</PopoverContent>
    </Popover>
  );
};

export default LocationPicker;
