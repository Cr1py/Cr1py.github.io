import capstoneImg from "../../assets/capstoneImg.png";
import riipenLogo from "../../assets/Riipen-Logo.png";
import mcGroundFloor from "../../assets/MC-groundfloor.png";
import customDiscordImg1 from "../../assets/customDiscordImg1.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  docUrl?: string;
  featured: boolean;
  category?: 'Personal' | 'Freelance' | 'School';
  date?: string; // Format: "YYYY-MM"
}

export const projects: Project[] = [
  {
    id: 'proj-autograder',
    title: 'Western University Course Auto Grader',
    description:
      'A modular Python autograder system developed as a group capstone project for Western University, designed to securely automate assignment grading through Gradescope.',
    shortDescription:
      'Modular Python autograder system for Gradescope',
    longDescription:
      'Designed and developed a modular Python autograder system with a custom KDL-based configuration file. Built isolated Python code execution with resource limits and a Pydantic-validated data pipeline between the sandbox and host process. Generated detailed grading reports with expected vs. actual output comparisons and exception handling using Jinja and HTML/CSS.',
    technologies: [
      'Python',
      'KDL',
      'Docker',
      'Jinja',
      'HTML',
      'CSS',
      'Pydantic',
      'pytest',
      'Gradescope API',
      'Git'
    ],
    imageUrl: capstoneImg,
    docUrl: 'https://docs.google.com/document/d/1O5qf_DMcFqYfs4oCuyddA4Y3oEUy9TBw4a7ZQiWutMM/edit?tab=t.rm89jsjypd',
    category: 'School',
    featured: true,
    date: '2026-04'
  },
  {
    id: 'proj-nlp',
    title: 'Riipen NLP Project',
    description:
      'A data processing and natural language processing Riipen project, focused on transforming unstructured web data into structured datasets for NLP analysis.',
    shortDescription:
      'Web data pipeline and NLP preprocessing project',
    longDescription:
      'Built a data pipeline to scrape, parse, and clean unstructured web data into structured datasets using Beautiful Soup 4 and Pandas. Implemented text preprocessing techniques including regular expressions and tokenization with NLTK to support downstream NLP feature extraction across multiple datasets.',
    technologies: [
      'Python',
      'NLTK',
      'Pandas',
      'Beautiful Soup 4',
      'Google Colab'
    ],
    imageUrl: riipenLogo,
    category: 'Freelance',
    featured: true,
    date: '2024-03'
  },
  {
    id: 'proj-picams',
    title: 'Natural Language Processing',
    description:
      'A data processing and natural language processing Riipen project, focused on transforming unstructured web data into structured datasets for NLP analysis.',
    shortDescription:
      'Web data pipeline and NLP preprocessing project',
    longDescription:
      'Built a data pipeline to scrape, parse, and clean unstructured web data into structured datasets using Beautiful Soup 4 and Pandas. Implemented text preprocessing techniques including regular expressions and tokenization with NLTK to support downstream NLP feature extraction across multiple datasets.',
    technologies: [
      'Python',
      'NLTK',
      'Pandas',
      'Beautiful Soup 4',
      'Google Colab'
    ],
    imageUrl: riipenLogo,
    category: 'School',
    featured: false,
    date: '2023-09'
  },
  {
    id: 'proj-western-maps',
    title: 'Campus Building Map',
    description:
      'A campus mapping application developed as a group project to provide an interactive interface for navigating Western University buildings and points of interest.',
    shortDescription:
      'Interactive campus building and point-of-interest map',
    longDescription:
      'Built a REST API using GET and POST requests to handle data exchange between the frontend and building and point-of-interest datasets. Developed the frontend user interface using Java, JavaScript, HTML, and CSS as part of a group project.',
    technologies: [
      'Java',
      'JavaScript',
      'HTML',
      'CSS',
      'REST API'
    ],
    imageUrl: mcGroundFloor,
    githubUrl: 'https://github.com/Cr1py/Western_Maps',
    category: 'School',
    featured: true,
    date: '2022-09'
  },
  {
    id: 'proj-custom-discord',
    title: 'Custom Discord UI',
    description:
      'Used Better Discord plugin to add a custom CSS theme to my Discord client.',
    shortDescription:
      'Custom Discord user interface',
    longDescription:
      'Used Better Discord plugin to add a custom CSS theme to my Discord client.',
    technologies: [
      'CSS',
      'Better Discord'
    ],
    imageUrl: customDiscordImg1,
    category: 'Personal',
    featured: true,
    date: '2021-11'
  }
];