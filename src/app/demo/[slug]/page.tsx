import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Calendar, Clock, Flag, Locate, Share, Share2 } from 'lucide-react';

const DemoDetailPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const demo = await prisma.demonstration.findUnique({
    where: {
      slug,
    },
  });

  if (!demo) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-5xl font-bold">Demonstration not found...</h1>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold my-5">{demo.title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Calendar className="h-4 w-4 text-red-600" />
          <p>{format(demo.startAt, 'E, dd. MMM yyyy', { locale: de })}</p>
          <span>·</span>
          <Clock className="h-4 w-4 text-red-600" />
          <p>
            {demo.endAt
              ? format(demo.startAt, 'kk:mm', { locale: de }) +
                ' - ' +
                format(demo.endAt, 'kk:mm', { locale: de })
              : format(demo.startAt, 'kk:mm', { locale: de })}
          </p>
          <span>·</span>
          <Locate className="h-4 w-4 text-red-600" />
          <p>{demo.place + ', ' + demo.region}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant={'ghost'}
            className="text-slate-500"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Teilen
          </Button>
          <Button
            variant={'ghost'}
            className="text-slate-500"
          >
            <Flag className="mr-2 h-4 w-4" />
            Melden
          </Button>
        </div>
      </div>

      <h2 className="text-3xl font-semibold my-4">Beschreibung</h2>
      {demo.description ? (
        <p>{demo.description}</p>
      ) : (
        <p className="text-slate-500">
          Zu dieser Demonstration wurde keine Beschreibung angegeben.
        </p>
      )}

      <h2 className="text-3xl font-semibold my-4">Themen</h2>
      {demo.categories.length > 0 ? (
        <div className="space-x-1 overflow-x-auto flex">
          {demo.categories.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">
          Zu dieser Demonstration wurden keine Themen angegeben.
        </p>
      )}
    </div>
  );
};

export default DemoDetailPage;
