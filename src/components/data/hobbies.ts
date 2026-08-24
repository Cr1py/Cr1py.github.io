export interface Hobby {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const hobbies: Hobby[] = [
  {
    id: 'art',
    name: 'Art',
    icon: '🎨',
    description: 'I tend to collect and hoard a lot of card bulk, so one day I thought, why not paint on top of it?',
  },
  {
    id: 'baking',
    name: 'Baking',
    icon: '🍰',
    description: 'When I moved out for university I wanted to make friends, so I lured them in with sweet treats. Now I have friends!',
  },
  {
    id: 'tcgs',
    name: 'TCGs',
    icon: '🃏',
    description: 'I like art. I like strategy. And I LOVE gambling. Getting into trading card games might have been a mistake...',
  }
];