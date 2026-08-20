export interface CurrentPosition {
  title: string;
  company: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  email: string;
  location: string;
  currentPosition: CurrentPosition;
  socials: {
    github?: string;
    linkedin?: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: 'Christine Bautista',
  title: 'New Graduate from the University of Western Ontario',
  shortBio: '',
  email: 'cbautista2503@gmail.com',
  location: 'Vancouver, Canada',
  currentPosition: {
    title: 'Automation Developer Intern',
    company: 'General Dynamics Land Systems - Canada',
    location: 'London ON, Canada'
  },
  socials: {
    github: 'https://github.com/Cr1py',
    linkedin: 'https://www.linkedin.com/in/christine-bautista-3a926519b/',
  }
};