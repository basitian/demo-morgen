import {
  Bike,
  Bus,
  GraduationCap,
  Handshake,
  Heart,
  HeartPulse,
  Home,
  Landmark,
  Leaf,
  Microscope,
  Palette,
  Squirrel,
  Users,
  Zap,
} from 'lucide-react';

const categories = [
  {
    label: 'Bildung',
    icon: GraduationCap,
  },
  {
    label: 'Gesundheit',
    icon: HeartPulse,
  },
  {
    label: 'Sport',
    icon: Bike,
  },
  {
    label: 'Wissenschaft',
    icon: Microscope,
  },
  {
    label: 'Energie',
    icon: Zap,
  },
  {
    label: 'Kultur',
    icon: Palette,
  },
  {
    label: 'Umwelt',
    icon: Leaf,
  },
  {
    label: 'Frieden',
    icon: Heart,
  },
  {
    label: 'Tierwohl',
    icon: Squirrel,
  },
  {
    label: 'Lokal',
    icon: Home,
  },
  {
    label: 'Verkehr',
    icon: Bus,
  },
  {
    label: 'Gesellschaft',
    icon: Users,
  },
  {
    label: 'Politik',
    icon: Landmark,
  },
  {
    label: 'Wirtschaft',
    icon: Handshake,
  },
];

export default categories;
