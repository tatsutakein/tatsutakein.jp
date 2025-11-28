export interface Work {
  status: 'In Progress' | 'Done';
  href: string | null;
  title: string;
  description: string;
  src: string;
  techs: string[];
}
