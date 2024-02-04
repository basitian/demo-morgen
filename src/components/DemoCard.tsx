import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import React from 'react';

type DemoCardProps = {
  title: string;
  location: string;
  timestamp: Date;
  tags: string[];
};

const DemoCard = ({ title, location, timestamp, tags }: DemoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{timestamp.toLocaleDateString()}</p>
      </CardContent>
      <CardFooter>
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </CardFooter>
    </Card>
  );
};

export default DemoCard;
