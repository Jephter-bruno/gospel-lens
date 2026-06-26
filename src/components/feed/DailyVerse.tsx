import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export const DailyVerse = () => {
  return (
    <Card className="mb-8 overflow-hidden border-none bg-primary/5 text-primary">
      <CardContent className="p-6 relative">
        <Quote className="absolute -top-2 -left-2 h-16 w-16 opacity-10 rotate-180" />
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60">Daily Verse</span>
          <p className="text-lg italic font-serif leading-relaxed">
            "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint."
          </p>
          <span className="text-sm font-bold">— Isaiah 40:31</span>
        </div>
      </CardContent>
    </Card>
  );
};
