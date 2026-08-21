import type { IconType } from "react-icons";
import { FaPaintBrush, FaPaperPlane } from "react-icons/fa";
import { TbPlayCardStarFilled } from "react-icons/tb";
import { PiBowlFoodFill } from "react-icons/pi";

export interface Hobby {
  id: string;
  name: string;
  icon: IconType;
  description: string;
}

export const hobbies: Hobby[] = [
  {
    id: 'art',
    name: 'Art',
    icon: FaPaintBrush,
    description: 'I tend to collect and hoard a lot of card bulk, so one day I thought, why not paint on top of it?',
  },
  {
    id: 'baking',
    name: 'Baking',
    icon: PiBowlFoodFill,
    description: 'When I moved out for university I wanted to make friends, so I lured them in with sweet treats. Now I have friends!',
  },
  {
    id: 'tcgs',
    name: 'TCGs',
    icon: TbPlayCardStarFilled,
    description: 'I like art. I like strategy. And I LOVE gambling. Getting into trading card games might have been a mistake...',
  },
  {
    id: 'travel',
    name: 'Travel',
    icon: FaPaperPlane,
    description: 'My fun little photo dump of my travels. I\'ve been to a few places, but I\'m hoping to go to more in the future!',
  }
];