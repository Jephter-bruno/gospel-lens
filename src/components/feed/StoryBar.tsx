import React from 'react';
import { Story } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

interface StoryBarProps {
  stories: Story[];
}

export const StoryBar = ({ stories }: StoryBarProps) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4 pt-2 no-scrollbar">
      <div className="flex flex-col items-center space-y-1 min-w-[72px]">
        <div className="relative">
          <Avatar className="h-16 w-16 p-0.5 border">
            <AvatarImage src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7bc94eb7-765f-431e-9a3e-98a033050953/avatar-1-c0d24ccc-1782433020283.webp" />
            <AvatarFallback>Me</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 rounded-full bg-primary p-0.5 ring-2 ring-background">
            <Plus className="h-4 w-4 text-primary-foreground" />
          </div>
        </div>
        <span className="text-xs truncate w-full text-center">Your Story</span>
      </div>

      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center space-y-1 min-w-[72px]">
          <div className={cn(
            "rounded-full p-[2px]",
            story.isUnread ? "bg-gradient-to-tr from-yellow-400 to-primary" : "bg-muted"
          )}>
            <Avatar className="h-16 w-16 p-0.5 bg-background">
              <AvatarImage src={story.user.avatar} />
              <AvatarFallback>{story.user.name[0]}</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-xs truncate w-full text-center">{story.user.username}</span>
        </div>
      ))}
    </div>
  );
};
