import capstoneImg from "../../assets/capstoneImg.png";
import capstoneDemo from "../../assets/preview.html?url";
import piCamsImg from "../../assets/piCams.png";
import riipenLogo from "../../assets/Riipen-Logo.png";
import mcGroundFloor from "../../assets/MC-groundfloor.png";
import customDiscordImg1 from "../../assets/customDiscordImg1.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  longDescription?: string[];
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
    title: 'Course Auto Grader',
    description:
      'Built in collaboration within a team of 3, and supervised by Dr. Daniel Servos, this modular Python autograder system was developed as a group capstone project for Western University. This system is designed to automate the process of grading Python programming assignments through Gradescope.',
    shortDescription:
      'Python autograder system for a Western University 1st Year Course',
    longDescription: [
      'A reusable custom KDL based configuration file was defined for the professor and teaching assistants to set test cases for the assignment that needed to be graded.',
      'A configuration parser interpreted instructor defined grading specifications written in KDL and made test cases, inputs, expected outputs, and grading requirements available to other modules.',
      'The runner executed student submissions within an isolated sandbox, provided configured test inputs, and captured program output, while the output checker compared student results against expected outputs to determine test performance.',
      'The Gradescope output formatter converted test results into a .json file (the format required by Gradescope) and generated an HTML/CSS interface that allowed students to review their test results and identify errors.',
    ],
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
    demoUrl: capstoneDemo,
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
    longDescription: [
      'Built a data pipeline to scrape, parse, and clean unstructured web data into structured datasets using Beautiful Soup 4 and Pandas.',
      'Implemented text preprocessing techniques including regular expressions and tokenization with NLTK to support downstream NLP feature extraction across multiple datasets.',
    ],
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
    title: 'Pi\n Cams',
    description:
      'A group project focused on developing a Raspberry Pi-based surveillance system that uses real-time video processing and facial recognition to monitor activity and provide security alerts.',
    shortDescription:
      'A Raspberry Pi suveillance application built with ',
    longDescription: [
      'Connected and configured a camera with a Raspberry Pi, using C++ and Python to support video capture, motion detection, and real-time processing.',
      'Developed a React web interface with TypeScript that allowed users to monitor the surveillance system, receive security alerts, and interact with system controls.',
      'Uses MySQL for storing and managing system data.',
      'Uses real-time video processing with Python and OpenCV to capture camera footage and analyze frames for motion and facial detection.',
    ],
      technologies: [
      'Python',
      'C++',
      'React',
      'TypeScript',
      'MySQL',
      'Raspberry Pi',
      'OpenCV'
    ],
    imageUrl: piCamsImg,
    githubUrl: 'https://github.com/Cr1py/Pi-Cams',
    docUrl: 'https://docs.google.com/document/d/1E7uFqbcq4rbA7CDt9fvQErw7aQOaYISQcTtDdHzvz8g/edit?tab=t.0',
    category: 'School',
    featured: true,
    date: '2023-09'
  },
  {
    id: 'proj-western-maps',
    title: 'Campus Building Map',
    description:
      'A campus mapping application developed as a group project to provide an interactive interface for navigating Western University buildings and points of interest.',
    shortDescription:
      'Interactive campus building and point-of-interest map',
    longDescription: [
      'Built a REST API using GET and POST requests to handle data exchange between the frontend and building and point-of-interest datasets.', 
      'Developed the frontend user interface using Java, JavaScript, HTML, and CSS as part of a group project.',
    ],
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
    longDescription: [
      'Used Better Discord plugin to add a custom CSS theme to my Discord client.',
    ],
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