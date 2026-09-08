import floorPlanImg from "../../assets/floorPlanImg.png";
import capstoneImg from "../../assets/capstoneImg.png";
import capstoneDemo from "../../assets/preview.html?url";
import piCamsImg from "../../assets/piCams.png";
import riipenLogo from "../../assets/Riipen-Logo.png";
import uxl2024 from "../../assets/uxl2024.png";
import myCity from "../../assets/myCity.png";
import sightBridge from "../../assets/sightBridge.png";
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
  category?: 'Personal' | 'Freelance' | 'School' | 'Hackathon';
  date?: string; // Format: "YYYY-MM"
}

export const projects: Project[] = [
    {
    id: 'ai-room-layout-preview',
    title: 'AI Room Layout Preview',
    description:
      'Inspired by my obsession of the Feng Shui guy and sims 4, this app allows the user to upload a blank floor plan and receive a render of what the place may look like when furnished. This project is mostly just for me to explore puter and integrating ai models in a project.',
    shortDescription:
      'AI powered floor plan renderer built with React and Puter.js',
    longDescription: [
      'The user can drag a floor plan into the upload area or click to select a file. The file is then prepared for processing, and a short progress animation is shown.',
      'Once the upload is finished, the floor plan is saved and displayed as a preview. Any previous results or error messages are cleared, and the “Generate 3D View” button becomes available.',
      'The user clicks “Generate 3D View.” If they are not logged in, they will be prompted to log in because the generation is Handled by Puter which requires signing in. The system then sends the uploaded floor plan to the AI for processing.',
      'The AI analyzes the floor plan and creates a 3D-style version.',
      'Once the AI finishes, the generated image is displayed. If something goes wrong, an error message is shown instead.',
      'The user can compare the original floor plan with the AI-generated version using a slider. After generating a result, the button changes to “Regenerate,” allowing the user to create a new version and replace the previous result.',
    ],
      technologies: [
      'Puter.js',
      'React', 
      'TypeScript',
      'HTML',
      'CSS',
      'Tailwind',
      'Vite',
      'Git'
    ],
    imageUrl: floorPlanImg,
    githubUrl: 'https://github.com/Cr1py/AI-Room-Layout-Preview',
    demoUrl: 'https://cr1py.github.io/AI-Room-Layout-Preview/',
    category: 'Personal',
    featured: true,
    date: '2026-08'
  },

  {
    id: 'proj-autograder',
    title: 'Western Course Auto Grader',
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
    date: '2025-09'
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
    featured: false,
    date: '2024-03'
  },

  {
    id: 'uxl-2024',
    title: 'Buns',
    description:
      'A social media app for pregnant and new mothers to connect and build community.',
    shortDescription:
      '(FINALIST) UXL 2024 Designathon Submission',
    longDescription: [
      'My groups finalist submission for the Wilfred Laurier UXL 2024 Designathon.',
      'Colour scheme was made in Coolors.',
      'Icons and assets designed in Canva and Figma.',
      'Wireframes and slide deck was made in Figma.',
    ],
      technologies: [
      'Figma',
      'Coolors',
      'Canva',
    ],
    imageUrl: uxl2024,
    demoUrl: 'https://www.figma.com/proto/GvsFBz3tPERqmeqXFshqtw/2024-Designathon?node-id=305-1075&p=f&t=8jFXVnq6RuNWJgX0-0&scaling=contain&content-scaling=fixed&page-id=17%3A42',
    category: 'Hackathon',
    featured: false,
    date: '2024-03'
  },

  {
    id: 'proj-picams',
    title: 'Pi\n Cams',
    description:
      'A group project focused on developing a Raspberry Pi-based surveillance system that uses real-time video processing and facial recognition to monitor activity and provide security alerts.',
    shortDescription:
      'A Raspberry Pi suveillance application built with C++, Python and OpenCV.',
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
    id: 'sight-bridge',
    title: 'Sight Bridge AI',
    description:
      'Product .',
    shortDescription:
      '(FINALIST) Western University World\'s Challenge Challenge 2023 Submission',
    longDescription: [
      'My teams pitch for the 2023 World\'s Challenge Challenge hosted by Western Univeristy.',
      'This is a branch of the Global Challenge stream.',
    ],
      technologies: [
      'AI',
      'Product Design',
      'Hardware',
      'User Research',
    ],
    imageUrl: sightBridge,
    docUrl: 'https://news.westernu.ca/2023/03/western-students-suggest-solutions-to-advance-un-sustainable-development-goals/',
    demoUrl: 'https://www.canva.com/design/DAFcBDp0LnE/BmEcGzV5GJfHlgNAxnj-aA/edit?ui=eyJEIjp7IlAiOnsiQiI6ZmFsc2V9fX0',
    category: 'Hackathon',
    featured: false,
    date: '2023-03'
  },

  {
    id: 'my-city',
    title: 'My City',
    description:
      'Mobile app project that aims to provide the everyday citizen the ability to share their ideas for developing their city.',
    shortDescription:
      'Google Impact Challenge 2023 Submission',
    longDescription: [
      'My teams submission for the 2023 Google Impact Challenge.',
      'Users can place tiles representing sidewalks, houses, apartments, stores, roads, trees, parks, and (generic) buildings in a grid to simulate planning their city.',
      'Users can then share their ideal city with others to hopefully spread awareness of missing or problematic infrastructure in their city.',
    ],
      technologies: [
      'Dart',
      'Flutter',
      'Node.js',
      'Android Studio',
      'Firebase',
      'HTML',
      'CSS',
    ],
    imageUrl: myCity,
    demoUrl: 'https://canva.link/b77yu6hny6kq6zl',
    githubUrl: 'https://github.com/Cr1py/My-City',
    category: 'Hackathon',
    featured: false,
    date: '2023-01'
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
    featured: false,
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
    featured: false,
    date: '2021-11'
  }
];