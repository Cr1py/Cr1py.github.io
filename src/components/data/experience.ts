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
      'Developed Python automation tools and SQL solutions to streamline Supply Chain Management workflows, automate repetitive tasks, and improve the efficiency of internal processes.',
    technologies: [
      'Python',
      'SQL',
      'Bash',
      'Excel',
      'Automation',
      'Data Processing',
    ],
    achievements: [
        ' Automated part identification, report generation, and email communications, reducing manual tasks by 5-10 minutes per item and significantly optimizing project timelines.'
    ],
    imageUrl: '/experience/general-dynamics.jpg',
  },

  {
    id: 'exp-3',
    title: 'Software Developer Intern',
    company: 'Goodself',
    location: 'Toronto, ON (Remote)',
    startDate: '2024-05',
    endDate: '2024-12',
    description:
      'Developed features and analytics for a React-based mobile and web application, using Mixpanel and Firebase to track user behaviour and identify opportunities to improve the user experience.',
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'Firebase',
      'Mixpanel',
      'Git',
    ],
    achievements: [
      'Implemented Mixpanel event tracking across 13 key pages of the React-based mobile and web application.',
      'Integrated Mixpanel with Firebase Analytics to enable detailed analysis of user behaviour and application usage.',
      'Analyzed user engagement data to identify areas for improvement and support increases in user retention.',
      'Conducted end-to-end and UAT testing across development, staging, and production environments to reduce production bugs.',
    ],
    imageUrl: '/experience/goodself.jpg',
  },

  {
    id: 'exp-2',
    title: 'Software Engineer Intern',
    company: 'FimiMall',
    location: 'Milton, ON (Remote)',
    startDate: '2024-01',
    endDate: '2024-04',
    description:
      'Worked on search optimization and backend development, improving product search functionality and data retrieval using Elasticsearch, MongoDB, and Java Spring Boot.',
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
      'Used Docker to access containerized database services locally during development.',
      'Integrated search phrase and search term queries into the Java Spring Boot backend to improve product ranking and search relevance.',
      'Used Postman to test REST API endpoints and validate HTTP requests, improving integration reliability.',
    ],
    imageUrl: '/experience/fimimall.jpg',
  },

  {
    id: 'exp-1',
    title: 'UX/UI Design Intern',
    company: 'Simulence',
    location: 'Toronto, ON (Remote)',
    startDate: '2022-06',
    endDate: '2022-09',
    description:
      'Conducted user research and designed user interfaces for a game development company, using feedback from experienced game developers to improve internal processes and the company website.',
    technologies: [
      'Figma',
      'User Research',
      'Surveys',
      'Prototyping',
    ],
    achievements: [
      'Conducted surveys and live interviews with 8 senior game developers to identify pain points in the game development process.',
      'Identified opportunities that led to 3 process improvements within the game development cycle.',
      'Designed the main website user interface in Figma, creating an intuitive and visually appealing experience.',
    ],
    imageUrl: '/experience/simulence.jpg',
  },
];