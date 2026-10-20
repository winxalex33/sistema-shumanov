export type Language = 'mk' | 'latin';

export interface ScheduleItem {
  id: string;
  day: string;
  time: string;
  title: string;
  type: 'indoor' | 'outdoor' | 'private';
  location: string;
  address: string;
  coach: string;
  description: string;
  capacity: string;
}

export interface TrainingPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  highlightText: string;
  description: string;
  keyBenefits: string[];
  icon: string;
}

export interface MethodCard {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  imagePlaceholderTitle: string;
}
