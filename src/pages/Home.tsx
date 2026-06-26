import React from 'react';
import { PostCard } from '@/components/feed/PostCard';
import { StoryBar } from '@/components/feed/StoryBar';
import { DailyVerse } from '@/components/feed/DailyVerse';
import { posts, stories } from '@/lib/mock-data';

export const Home = () => {
  return (
    <div className="max-w-[600px] mx-auto">
      <StoryBar stories={stories} />
      <DailyVerse />
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
