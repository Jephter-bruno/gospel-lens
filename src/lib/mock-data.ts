import { User, Post, Story, PrayerRequest, Reel } from '../types';

export const currentUser: User = {
  id: 'me',
  username: 'grace_walker',
  name: 'Grace Walker',
  avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7bc94eb7-765f-431e-9a3e-98a033050953/avatar-1-c0d24ccc-1782433020283.webp',
  bio: 'Saved by Grace | Seeking truth every day 🙏',
};

export const users: User[] = [
  {
    id: 'u1',
    username: 'pastor_john',
    name: 'John Rivers',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7bc94eb7-765f-431e-9a3e-98a033050953/avatar-2-6d7fb50d-1782433018293.webp',
    isVerified: true,
  },
  {
    id: 'u2',
    username: 'sarah_faith',
    name: 'Sarah Faith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 'u3',
    username: 'worship_leader',
    name: 'David Song',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  }
];

export const stories: Story[] = [
  { id: 's1', user: users[0], image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=500', isUnread: true },
  { id: 's2', user: users[1], image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=500', isUnread: true },
  { id: 's3', user: users[2], image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=500', isUnread: false },
];

export const posts: Post[] = [
  {
    id: 'p1',
    user: users[0],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7bc94eb7-765f-431e-9a3e-98a033050953/post-1---church-interior-21f04753-1782433018607.webp',
    caption: 'Had a wonderful service today. The presence of God was truly felt! "Where two or three are gathered..." Matthew 18:20',
    likes: 124,
    amens: 86,
    comments: [],
    createdAt: '2 hours ago',
    location: 'Grace Community Church'
  },
  {
    id: 'p2',
    user: users[1],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7bc94eb7-765f-431e-9a3e-98a033050953/post-2---fellowship-ebe048c5-1782433018111.webp',
    caption: 'Blessed fellowship with the youth group this weekend. Community is so vital for our walk. ❤️',
    likes: 89,
    amens: 45,
    comments: [],
    createdAt: '5 hours ago'
  },
  {
    id: 'p3',
    user: users[2],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7bc94eb7-765f-431e-9a3e-98a033050953/post-4---worship-nature-6a10787a-1782433018394.webp',
    caption: "God's creation never ceases to amaze me. Praise Him in the heights! ⛰️✨",
    likes: 210,
    amens: 156,
    comments: [],
    createdAt: '1 day ago'
  }
];

export const prayerRequests: PrayerRequest[] = [
  {
    id: 'pr1',
    user: users[1],
    text: 'Please pray for my grandmother who is recovering from surgery. We trust in the Great Physician. 🙏',
    prayingCount: 32,
    createdAt: '1 hour ago'
  },
  {
    id: 'pr2',
    user: users[2],
    text: 'Seeking prayers for discernment in a major career decision. Wanting to follow where He leads.',
    prayingCount: 18,
    createdAt: '3 hours ago'
  }
];

export const reels: Reel[] = [
  {
    id: 'r1',
    user: users[0],
    videoUrl: 'https://assets.mixkit.io/videos/preview/mixkit-morning-sunlight-shining-through-leaves-12340-large.mp4',
    caption: 'His mercies are new every morning! ☀️ #blessed #faith',
    likes: 1540,
    amens: 1200,
    comments: 85,
    musicTitle: 'Original Audio - Morning Worship'
  },
  {
    id: 'r2',
    user: users[2],
    videoUrl: 'https://assets.mixkit.io/videos/preview/mixkit-church-bell-tower-in-the-sunset-41712-large.mp4',
    caption: 'The sound of grace. #church #sunday',
    likes: 2300,
    amens: 1800,
    comments: 120,
    musicTitle: 'Church Bells - David Song'
  }
];
