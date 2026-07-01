export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'development' | 'archived';
  year: number;
  tags: string[];
  image?: string;
  link?: string;
  note?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}