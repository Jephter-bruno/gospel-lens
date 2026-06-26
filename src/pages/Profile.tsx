import React from 'react';
import { currentUser, posts } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Settings, Grid, Heart, Bookmark } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Profile = () => {
  return (
    <div className="max-w-[900px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-12 px-4">
        <Avatar className="h-24 w-24 md:h-40 md:w-40 ring-4 ring-primary/5">
          <AvatarImage src={currentUser.avatar} />
          <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h2 className="text-xl md:text-2xl font-light">{currentUser.username}</h2>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" className="px-6">Edit Profile</Button>
              <Button size="icon" variant="ghost"><Settings className="h-5 w-5" /></Button>
            </div>
          </div>

          <div className="flex gap-8 text-sm md:text-base">
            <span><strong>12</strong> posts</span>
            <span><strong>850</strong> followers</span>
            <span><strong>420</strong> following</span>
          </div>

          <div className="space-y-1">
            <p className="font-bold">{currentUser.name}</p>
            <p className="text-sm whitespace-pre-wrap">{currentUser.bio}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="posts" className="w-full border-t">
        <TabsList className="w-full flex justify-center h-12 bg-transparent rounded-none p-0">
          <TabsTrigger value="posts" className="data-[state=active]:border-t data-[state=active]:border-foreground rounded-none h-full px-8 gap-2 uppercase text-[10px] tracking-widest bg-transparent">
            <Grid className="h-4 w-4" /> Posts
          </TabsTrigger>
          <TabsTrigger value="amened" className="data-[state=active]:border-t data-[state=active]:border-foreground rounded-none h-full px-8 gap-2 uppercase text-[10px] tracking-widest bg-transparent">
            <Heart className="h-4 w-4" /> Amened
          </TabsTrigger>
          <TabsTrigger value="saved" className="data-[state=active]:border-t data-[state=active]:border-foreground rounded-none h-full px-8 gap-2 uppercase text-[10px] tracking-widest bg-transparent">
            <Bookmark className="h-4 w-4" /> Saved
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="mt-4">
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {posts.map((post) => (
              <div key={post.id} className="aspect-square relative group cursor-pointer overflow-hidden rounded-md">
                <img 
                  src={post.image} 
                  alt="" 
                  className="h-full w-full object-cover" 
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="amened">
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Heart className="h-12 w-12 mb-4 opacity-20" />
            <p>Posts you've prayed for will appear here.</p>
          </div>
        </TabsContent>
        <TabsContent value="saved">
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Bookmark className="h-12 w-12 mb-4 opacity-20" />
            <p>Saved scriptures and devotionals.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
