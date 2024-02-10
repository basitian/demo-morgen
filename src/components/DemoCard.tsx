import React, { useCallback } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { format, formatDistance, endOfDay, isSameDay } from 'date-fns';
import { de } from 'date-fns/locale';
import { Calendar, Clock } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

type DemoCardProps = {
  title: string;
  place: string;
  region: string;
  startAt: Date;
  endAt: Date;
  categories: string[];
  slug: string;
  className?: string;
};

const DemoCard = ({
  title,
  place,
  region,
  startAt,
  endAt,
  categories,
  slug,
  className,
}: DemoCardProps) => {
  const formatTimeStatus = useCallback((startTs: Date, endTs: Date) => {
    const now = new Date();

    if (startTs <= now && endTs >= now) {
      return <p className="text-green-600">laufend</p>;
    }

    return (
      <p className="text-muted-foreground">
        {formatDistance(startTs, now, {
          locale: de,
          addSuffix: true,
        })}
      </p>
    );
  }, []);

  return (
    <Card className={cn('cursor-pointer hover:bg-secondary h-full', className)}>
      <a href={`/demo/${slug}`}>
        <CardHeader>
          <CardTitle
            title={title}
            className="line-clamp-2 leading-snug h-16"
          >
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-1">
            {place !== region ? place + ', ' + region : place}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 items-center">
            <Calendar className="h-4 w-4 text-red-600" />
            <p>{format(startAt, 'E, dd. MMM yyyy', { locale: de })}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Clock className="h-4 w-4 text-red-600" />
            <p>
              {isSameDay(startAt, endAt)
                ? format(startAt, 'kk:mm', { locale: de }) +
                  ' - ' +
                  format(endAt, 'kk:mm', { locale: de })
                : format(startAt, 'kk:mm', { locale: de })}
            </p>
          </div>
          {formatTimeStatus(startAt, endAt)}
        </CardContent>
        <CardFooter>
          <div className="space-x-1 overflow-x-auto flex">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </a>
    </Card>
  );
};

export default DemoCard;
