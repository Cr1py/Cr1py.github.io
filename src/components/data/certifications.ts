export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  date?: string;
  description?: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'IBM Z Xplore - Advanced',
    description: 'Demonstrated advanced IBM Z skills to solve complex system problems and orchestrate system activities.',
    link: 'https://www.credly.com/badges/999cbdb5-3787-4f96-8b61-053c98d869c7'
  }
];