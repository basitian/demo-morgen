'use client';
import { cn } from '@/lib/utils';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Check, ChevronsUpDown, LucideIcon } from 'lucide-react';

export type OptionType = {
  label: string;
  icon: LucideIcon;
};

interface CategoriesSelectorProps {
  options: OptionType[];
  selected: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
}

const CategoriesSelector = React.forwardRef<
  HTMLButtonElement,
  CategoriesSelectorProps
>(({ options, selected, onChange, className, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'w-full justify-between h-10 font-normal pl-3 text-left',
            !selected.length && 'text-muted-foreground'
          )}
          onClick={() => setOpen(!open)}
        >
          {/* <div className="flex gap-1 flex-wrap">
            {selected.map((item) => (
              <Badge
                variant="secondary"
                key={item}
                className="mr-1 mb-1"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleUnselect(item);
                }}
              >
                {item}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(item);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleUnselect(item);
                  }}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground " />
                </button>
              </Badge>
            ))}
          </div> */}

          <p className="overflow-auto">
            {!selected.length ? 'Themen wählen' : selected.join(', ')}
          </p>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0">
        <Command className={className}>
          <CommandGroup className="max-h-64 overflow-auto">
            {options.map((option) => {
              const { label, icon: Icon } = option;

              return (
                <CommandItem
                  key={label}
                  onSelect={() => {
                    onChange(
                      selected.includes(label)
                        ? selected.filter((item) => item !== label)
                        : [...selected, label]
                    );
                    setOpen(true);
                  }}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <div className="flex">
                    <Icon className="mr-4 h-4 w-4" />
                    {label}
                  </div>
                  <Check
                    className={cn(
                      'h-4 w-4',
                      selected.includes(label) ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
});
CategoriesSelector.displayName = 'CategoriesSelector';

export { CategoriesSelector };
