export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  date: string;
  location?: string;
  tags: string[];
  story?: string;
}

export interface Hobby {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  level?: string;
  startedAt?: string;
  photos?: string[]; // photo IDs
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  primary?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  bio: {
    short: string;
    full: string;
  };
  socials: SocialLink[];
  interests: string[];
  values: string[];
  currentFocus?: string;
}