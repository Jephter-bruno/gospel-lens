import React, { useState } from 'react';
import { PrayerRequest } from '@/types';
import { prayerRequests, currentUser } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { HandHelping, MessageSquare, Send } from 'lucide-react';

export const Prayers = () => {
  const [requests, setRequests] = useState<PrayerRequest[]>(prayerRequests);
  const [newRequest, setNewRequest] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRequest.trim()) return;

    const request: PrayerRequest = {
      id: Math.random().toString(36).substr(2, 9),
      user: currentUser,
      text: newRequest,
      prayingCount: 0,
      createdAt: 'Just now'
    };

    setRequests([request, ...requests]);
    setNewRequest('');
  };

  return (
    <div className="max-w-[600px] mx-auto pb-10">
      <h1 className="text-2xl font-bold mb-6">Prayer Wall</h1>
      
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={currentUser.avatar} />
                <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
              </Avatar>
              <Textarea 
                placeholder="Share a prayer request..." 
                className="flex-1 bg-background border-none shadow-none resize-none focus-visible:ring-1"
                value={newRequest}
                onChange={(e) => setNewRequest(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={!newRequest.trim()}>
                Post Request
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardHeader className="flex flex-row items-center gap-3 p-4 space-y-0">
              <Avatar className="h-9 w-9">
                <AvatarImage src={request.user.avatar} />
                <AvatarFallback>{request.user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{request.user.username}</p>
                <p className="text-[10px] text-muted-foreground uppercase">{request.createdAt}</p>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-2">
              <p className="text-sm leading-relaxed">{request.text}</p>
            </CardContent>
            <CardFooter className="px-4 py-3 flex items-center gap-6 border-t mt-2">
              <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span className="text-lg">🙏</span>
                <span>{request.prayingCount} Praying</span>
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span>Comments</span>
              </button>
              <button className="ml-auto text-muted-foreground hover:text-primary transition-colors">
                <Send className="h-4 w-4" />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
