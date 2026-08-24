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
    title: 'Western University - \"World\'s Challenge\" Challenge Finalist',
    organization: 'University of Western Ontario',
    date: 'March 2023',
    description: 'Placed top 10 in the University of Western Ontario\'s \"World\'s Challenge\" Challenge competition.',
    link: 'https://news.westernu.ca/2023/03/western-students-suggest-solutions-to-advance-un-sustainable-development-goals/',
  },
];