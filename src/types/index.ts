export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio?: string;
  isVerified?: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  amens: number;
  comments: Comment[];
  createdAt: string;
  location?: string;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  createdAt: string;
}

export interface PrayerRequest {
  id: string;
  user: User;
  text: string;
  prayingCount: number;
  createdAt: string;
  isAnswered?: boolean;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  isUnread: boolean;
}

export interface Reel {
  id: string;
  user: User;
  videoUrl: string;
  caption: string;
  likes: number;
  amens: number;
  comments: number;
  musicTitle: string;
}
