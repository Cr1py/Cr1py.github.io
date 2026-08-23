export interface Honour {
  id: string;
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  link?: string;
}

export const honours: Honour[] = [
  {
    id: 'honour-1',
    title: 'Filler text',
    description: 'Winner of test'
  },
];