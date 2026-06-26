import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, User } from 'lucide-react';
import { Post } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAmened, setIsAmened] = useState(false);

  return (
    <Card className="mb-6 overflow-hidden border-none shadow-none md:border md:shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between p-4 space-y-0">
        <div className="flex items-center space-x-3">
          <Avatar className="h-9 w-9 ring-2 ring-primary/10">
            <AvatarImage src={post.user.avatar} />
            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold">{post.user.username}</span>
              {post.user.isVerified && (
                <div className="h-3 w-3 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="h-1 w-1 bg-white rounded-full" />
                </div>
              )}
            </div>
            {post.location && <span className="text-xs text-muted-foreground">{post.location}</span>}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      
      <div className="aspect-square w-full overflow-hidden bg-muted">
        <img 
          src={post.image} 
          alt="Post" 
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={cn("transition-colors", isLiked ? "text-red-500" : "hover:text-muted-foreground")}
            >
              <Heart className={cn("h-6 w-6", isLiked && "fill-current")} />
            </button>
            <button 
              onClick={() => setIsAmened(!isAmened)}
              className={cn("flex items-center gap-1.5 transition-colors text-sm font-medium px-2 py-1 rounded-full", 
                isAmened ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground")}
            >
              <span className={cn("text-lg", isAmened ? "grayscale-0" : "grayscale opacity-70")}>🙏</span>
              <span>Amen</span>
            </button>
            <button className="hover:text-muted-foreground">
              <MessageCircle className="h-6 w-6" />
            </button>
            <button className="hover:text-muted-foreground">
              <Send className="h-6 w-6" />
            </button>
          </div>
          <button className="hover:text-muted-foreground">
            <Bookmark className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-1">
          <p className="text-sm font-bold">{post.likes + (isLiked ? 1 : 0)} likes • {post.amens + (isAmened ? 1 : 0)} amens</p>
          <p className="text-sm">
            <span className="font-bold mr-2">{post.user.username}</span>
            {post.caption}
          </p>
          <button className="text-sm text-muted-foreground">View all comments</button>
          <p className="text-[10px] uppercase text-muted-foreground mt-1">{post.createdAt}</p>
        </div>
      </CardContent>
    </Card>
  );
};
