'use client';
import { cn } from '@/lib/utils';
import {
  DemonstrationSchemaType,
  demonstrationSchema,
} from '@/schemas/demonstration';
import { zodResolver } from '@hookform/resolvers/zod';
import { format, startOfDay } from 'date-fns';
import { de } from 'date-fns/locale';
import { CalendarIcon, Clock } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Textarea } from './ui/textarea';
import { TimePickerInput } from './ui/timepicker';
import { createDemonstration } from '@/actions/demonstration';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CategoriesSelector } from './CategoriesSelector';
import categories from '@/constants/categories';

const NewDemonstrationForm = () => {
  const startMinuteRef = React.useRef<HTMLInputElement>(null);
  const startHourRef = React.useRef<HTMLInputElement>(null);
  const endMinuteRef = React.useRef<HTMLInputElement>(null);
  const endHourRef = React.useRef<HTMLInputElement>(null);

  const router = useRouter();

  const form = useForm<DemonstrationSchemaType>({
    resolver: zodResolver(demonstrationSchema),
    defaultValues: {
      title: '',
      description: undefined,
      startAt: undefined,
      endAt: undefined,
      categories: [],
    },
  });

  const onSubmit = async (values: DemonstrationSchemaType) => {
    try {
      const demo = await createDemonstration(values);
      toast('Die Demonstration wurde erstellt.');
      router.push(`/demo/${demo.slug}`);
    } catch (error) {
      toast(
        'Fehler beim Erstellen der Demonstration. Versuche es später nochmal.'
      );
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-96 space-y-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titel</FormLabel>
              <FormControl>
                <Input
                  placeholder="Titel der Demonstration"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Gib der Veranstaltung einen Namen
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Beschreibung</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Beschreibung"
                  className="resize-y"
                  {...field}
                />
              </FormControl>
              <FormDescription>Beschreibe die Veranstaltung</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startAt"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Beginn</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPPP HH:mm', { locale: de })
                      ) : (
                        <span>Datum und Uhrzeit wählen</span>
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
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < startOfDay(new Date())}
                    initialFocus
                    weekStartsOn={1}
                    locale={de}
                  />
                  <div className="p-3 border-t border-border">
                    <div className="flex items-end gap-2">
                      <div className="grid gap-1 text-center">
                        <Label
                          htmlFor="hours"
                          className="text-xs"
                        >
                          Stunde
                        </Label>
                        <TimePickerInput
                          picker="hours"
                          date={field.value}
                          setDate={field.onChange}
                          ref={startHourRef}
                          onRightFocus={() => startMinuteRef.current?.focus()}
                        />
                      </div>
                      <div className="grid gap-1 text-center">
                        <Label
                          htmlFor="minutes"
                          className="text-xs"
                        >
                          Minute
                        </Label>
                        <TimePickerInput
                          picker="minutes"
                          date={field.value}
                          setDate={field.onChange}
                          ref={startMinuteRef}
                          onLeftFocus={() => startHourRef.current?.focus()}
                        />
                      </div>
                      <div className="flex h-10 items-center">
                        <Clock className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Wähle den Veranstaltungsbeginn aus
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endAt"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Ende</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPPP HH:mm', { locale: de })
                      ) : (
                        <span>Datum und Uhrzeit wählen</span>
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
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < startOfDay(form.getValues().startAt)
                    }
                    initialFocus
                    weekStartsOn={1}
                    locale={de}
                  />
                  <div className="p-3 border-t border-border">
                    <div className="flex items-end gap-2">
                      <div className="grid gap-1 text-center">
                        <Label
                          htmlFor="hours"
                          className="text-xs"
                        >
                          Stunde
                        </Label>
                        <TimePickerInput
                          picker="hours"
                          date={field.value}
                          setDate={field.onChange}
                          ref={endHourRef}
                          onRightFocus={() => endMinuteRef.current?.focus()}
                        />
                      </div>
                      <div className="grid gap-1 text-center">
                        <Label
                          htmlFor="minutes"
                          className="text-xs"
                        >
                          Minute
                        </Label>
                        <TimePickerInput
                          picker="minutes"
                          date={field.value}
                          setDate={field.onChange}
                          ref={endMinuteRef}
                          onLeftFocus={() => endHourRef.current?.focus()}
                        />
                      </div>
                      <div className="flex h-10 items-center">
                        <Clock className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Wähle das Veranstaltungsende aus
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Themen</FormLabel>
              <FormControl>
                <CategoriesSelector
                  selected={field.value}
                  options={categories}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Wähle Themen zu denen demonstriert wird aus
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Speichern
          </Button>
          <Button
            asChild
            variant={'secondary'}
            disabled={form.formState.isSubmitting}
          >
            <Link href="/">Abbrechen</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewDemonstrationForm;
