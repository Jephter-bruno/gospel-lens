import React from 'react';
import { Input } from '@/components/ui/input';
import { Search, Church, Users, BookOpen, Music } from 'lucide-react';
import { posts } from '@/lib/mock-data';

export const Explore = () => {
  const categories = [
    { icon: Church, label: 'Churches' },
    { icon: Users, label: 'Fellowships' },
    { icon: BookOpen, label: 'Bible Studies' },
    { icon: Music, label: 'Worship' },
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input 
          placeholder="Search ministries, people, or scripture..." 
          className="pl-10 h-12 bg-muted/50 border-none rounded-xl"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button 
            key={cat.label}
            className="flex flex-none items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors whitespace-nowrap"
          >
            <cat.icon className="h-4 w-4" />
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {[...posts, ...posts, ...posts].map((post, i) => (
          <div key={i} className="aspect-square relative group cursor-pointer overflow-hidden rounded-md md:rounded-lg">
            <img 
              src={post.image} 
              alt="" 
              className="h-full w-full object-cover transition-transform group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <span className="flex items-center gap-2 font-bold">🙏 {post.amens}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
