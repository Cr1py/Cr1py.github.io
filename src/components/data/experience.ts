import GDImg from "../../assets/GD.jpg";
import GoodSelfImg from "../../assets/goodself.jpg";
import FimiMallIMG from "../../assets/fimi.png";
import SimulenceIMG from "../../assets/simu.png";

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
  imageUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-4',
    title: 'Automation Developer Intern',
    company: 'General Dynamics Land Systems',
    location: 'London, ON',
    startDate: '2025-05',
    endDate: '2025-08',
    description:
      'Collaborated with departments such as Suppy Chain Management, HR, and Operations to identifiy pain points with their daily workflows. Developed Python automation tools, and SQL queries and schemas to streamline workflows, automate repetitive tasks, and improve the efficiency of internal processes.',
    technologies: [
      'Python',
      'SQL',
      'JSON',
      'Bash',
      'Excel',
      'Data Processing',
    ],
    achievements: [
        'Automated part identification, report generation, and email communications, reducing manual tasks by 5-10 minutes per item and significantly optimizing project timelines.',
    ],
    imageUrl: GDImg,
  },

  {
    id: 'exp-3',
    title: 'Software Developer Intern',
    company: 'Goodself',
    location: 'Toronto, ON (Remote)',
    startDate: '2024-05',
    endDate: '2024-12',
    description:
      'Worked closely with product, design, and engineering teams to understand the architecture and functionality of a React-based mobile and web application and identify opportunities for improvement. Contributed to the development of UI components using HTML and CSS based on Figma designs.',
    technologies: [
      'TypeScript',
      'HTML',
      'CSS',
      'React',
      'Node.js',
      'Firebase',
      'Mixpanel',
      'Git',
      'CI/CD',
      'TestFlight'
    ],
    achievements: [
      'Implemented Mixpanel event tracking across 13 key pages.',
      'Integrated Mixpanel with Firebase Analytics and created 18 metrics reports.',
      'Conducted unit, end-to-end, and UAT testing across development, staging, and production environments to reduce user bug reports by 80%.',
    ],
    imageUrl: GoodSelfImg,
  },

  {
    id: 'exp-2',
    title: 'Software Engineer Intern',
    company: 'FimiMall',
    location: 'Milton, ON (Remote)',
    startDate: '2024-01',
    endDate: '2024-04',
    description:
      'Contributed to the development of backend systems for an e-commerce platform, focusing on product search and data retrieval. Developed database queries to retrieve, rank, and filter products across multiple parameters, improving the relevance of search results. Integrated the search functionality into the backend to support reliable product retrieval and API services.',
    technologies: [
      'Java',
      'Spring Boot',
      'Elasticsearch',
      'MongoDB',
      'Docker',
      'Studio 3T',
      'Postman',
      'REST APIs',
      'Git',
    ],
    achievements: [
      'Optimized search data using MongoDB, Studio 3T, and Elasticsearch to improve data retrieval reliability.',
      'Integrated search phrase and search term queries into the backend to improve product ranking and search relevance.',
      'Used Postman to test REST API endpoints and validate HTTP requests, improving integration reliability.',
    ],
    imageUrl: FimiMallIMG,
  },

  {
    id: 'exp-1',
    title: 'UX/UI Design Intern',
    company: 'Simulence',
    location: 'Toronto, ON (Remote)',
    startDate: '2022-06',
    endDate: '2022-09',
    description:
      'Conducted user research and designed user interfaces for a video game development testing company, using feedback from experienced game developers to improve internal processes and the company website\'s design appeal.',
    technologies: [
      'Figma',
      'User Research',
      'Surveys',
      'Prototyping',
    ],
    achievements: [
      'Interviewed 8 senior game developers, identifying opportunities that led to 3 process improvements within the game development cycle.',
      'Updated the main website user interface design in Figma, creating a more intuitive and visually appealing experience.'
    ],
    imageUrl: SimulenceIMG,
  },
];