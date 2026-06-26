import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { users } from '@/lib/mock-data';
import { MessageCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const Messages = () => {
  return (
    <div className="max-w-[800px] mx-auto h-[calc(100vh-8rem)] flex flex-col md:border rounded-xl bg-background overflow-hidden">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="text-xl font-bold">Messages</h2>
        <button className="text-primary font-medium hover:underline">New Prayer Thread</button>
      </div>
      
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search threads..." className="pl-10 bg-muted/50 border-none" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 cursor-pointer transition-colors">
            <div className="relative">
              <Avatar className="h-14 w-14">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-1 right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center">
                <p className="font-bold truncate">{user.name}</p>
                <span className="text-xs text-muted-foreground">2h</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">Peace be with you! Just checking in on...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
