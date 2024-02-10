'use client';

import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ScanSearch } from 'lucide-react';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Über',
    href: '/ueber',
    description: 'Wie funktioniert demoheute.de?',
  },
  {
    title: 'Nutzungsbedingungen',
    href: '/suche',
    description: 'Bedingungen zur Nutzung der demoheute.de Webseite.',
  },
  {
    title: 'Impressum',
    href: '/suche',
    description: 'Demonstrationen die grade oder demnächst starten.',
  },
  {
    title: 'Datenschutz',
    href: '/suche',
    description: 'Alles rund um das Thema Datenschutz auf demoheute.de',
  },
];

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Demonstrationen finden</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/suche"
                  >
                    <ScanSearch className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">Suche</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Finde für dich interessante Demonstrationen anhand von
                      Orten, Themen, und Zeiten
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/suche"
                title="Demnächst"
              >
                Demonstrationen die grade laufen oder demnächst starten
              </ListItem>
              <ListItem
                href="/suche"
                title="In deiner Nähe"
              >
                Veranstaltungen in deiner Nähe
              </ListItem>
              <ListItem
                href="/suche?categories=Gesellschaft"
                title="Thema Gesellschaft"
              >
                Entdecke Demonstrationen zum Thema &quot;Gesellschaft&quot;
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Informationen</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="mailto:kontakt@demoheute.de"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Kontakt
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
