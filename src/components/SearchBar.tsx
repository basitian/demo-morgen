'use client';
import { cn } from '@/lib/utils';
import { SearchSchemaType, searchSchema } from '@/schemas/search';
import { zodResolver } from '@hookform/resolvers/zod';
import { format, startOfToday } from 'date-fns';
import { de } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CategoriesSelector } from './CategoriesSelector';
import categories from '@/constants/categories';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
  const form = useForm<SearchSchemaType>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      date: undefined,
      categories: [],
      locationId: undefined,
    },
  });

  const searchHandler = (values: SearchSchemaType) => {
    router.push(
      `/suche?${
        values.categories.length > 0
          ? `categories=${values.categories.join(',')}`
          : ''
      }${values.date?.from ? `&from=${values.date.from.toISOString()}` : ''}${
        values.date?.to ? `&to=${values.date.to.toISOString()}` : ''
      }`
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(searchHandler)}
        className="p-1 bg-primary gap-1 rounded-lg flex items-center justify-between"
      >
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'pl-3 text-left font-normal w-full',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value?.from ? (
                          field.value.to ? (
                            <>
                              {format(field.value.from, 'PPP', {
                                locale: de,
                              })}{' '}
                              - {format(field.value.to, 'PPP', { locale: de })}
                            </>
                          ) : (
                            format(field.value.from, 'PPP', { locale: de })
                          )
                        ) : (
                          <span>Zeitraum wählen</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0"
                    align="start"
                  >
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value?.from}
                      numberOfMonths={2}
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < startOfToday()}
                      weekStartsOn={1}
                      locale={de}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <CategoriesSelector
                  selected={field.value}
                  options={categories}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {/*  <FormField
          control={form.control}
          name="locationId"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <LocationPicker
                  placeholder="Adresse"
                  selectedId={field.value}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        /> */}
        <Button variant={'secondary'}>Suchen</Button>
      </form>
    </Form>
  );
};

export default SearchBar;
