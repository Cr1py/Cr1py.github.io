export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string[];
  focus?: string[];
}

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: "Bachelor of Science - Honours Specialization in Computer Science",
    school: 'University of Western Ontario',
    location: 'London, Ontario CA',
    period: '2021 - 2026',
    description: [
      'Enrolled in the Honours program which required a 70% average and at least a 60% in every required course.',
      'Enrolled in the co-op program and was placed in an 8 month co-op role during the summer and fall of 2024.',
      'Completed Capstone project titled \'CS1026 Autograder\' and supervised by Dr. Daniel Servos.'
    ],
    focus: ['Data Structures and Algorithms', 'Object Oriented Design and Analysis', 'Computer Organization and Architecture', 'Computer Theory', 'Computer Networks', 'Databases and Data Management', 'Operating Systems'],
  },
  {
    id: 'edu-2',
    degree: "High School Diploma",
    school: 'Windermere Secondary School',
    location: 'Vancouver, British Columbia CA',
    period: '2016 - 2021',
    description: [
      'Schulich Leader Nominee.',
      'VP of \'Better Tomorrow\'s\' mental health club.',
      'COO of the \'Windermere Marketing Group\' club.',
    ],
  },
];