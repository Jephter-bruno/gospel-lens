import React, { useState, useRef, useEffect, useCallback } from 'react';
import { reels } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Send, Music, MoreHorizontal, Bookmark, Volume2, VolumeX, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Reels = () => {
  return (
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-2rem)] w-full flex flex-col items-center bg-black overflow-y-scroll snap-y snap-mandatory no-scrollbar -mx-4 md:mx-0">
      {reels.map((reel) => (
        <ReelItem key={reel.id} reel={reel} />
      ))}
    </div>
  );
};

const ReelItem = ({ reel }: { reel: typeof reels[0] }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAmened, setIsAmened] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showHeart, setShowHeart] = useState(false);
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastTap = useRef<number>(0);

  const handleVideoPress = (e: React.MouseEvent | React.TouchEvent) => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      // Double tap
      if (!isLiked) {
        setIsLiked(true);
        setShowHeart(true);
        setTimeout(() => setShowHeart(false), 1000);
      }
    } else {
      // Single tap
      togglePlay();
    }
    lastTap.current = now;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowPlayIcon(true);
      setTimeout(() => setShowPlayIcon(false), 500);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="relative h-full w-full max-w-[450px] snap-start bg-black flex items-center justify-center overflow-hidden md:rounded-xl shadow-2xl group">
      {/* Video element */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        className="h-full w-full object-cover cursor-pointer"
        loop
        autoPlay
        muted={isMuted}
        onClick={handleVideoPress}
        onTimeUpdate={handleTimeUpdate}
        playsInline
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* Mute Toggle Icon (top right) */}
      <button 
        onClick={toggleMute}
        className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white z-20 hover:bg-black/40 transition-colors"
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>

      {/* Play/Pause Visual Feedback */}
      <AnimatePresence>
        {showPlayIcon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute z-20 pointer-events-none"
          >
            <div className="bg-black/40 p-5 rounded-full backdrop-blur-sm">
              {!isPlaying ? <Play className="h-10 w-10 text-white fill-white" /> : <div className="h-10 w-10 flex items-center justify-center gap-1"><div className="w-2 h-8 bg-white rounded-full"/><div className="w-2 h-8 bg-white rounded-full"/></div>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Double Tap Heart Animation */}
      <AnimatePresence>
        {showHeart && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="absolute z-30 pointer-events-none"
          >
            <Heart className="h-24 w-24 text-white fill-white drop-shadow-lg" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Side Actions (Instagram Style) */}
      <div className="absolute right-2 bottom-20 flex flex-col items-center space-y-4 z-10">
        <div className="flex flex-col items-center">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="group/btn p-2"
          >
            <Heart className={cn("h-7 w-7 transition-all duration-200 active:scale-125", isLiked ? "text-red-500 fill-current" : "text-white hover:text-white/80")} />
          </button>
          <span className="text-white text-[13px] font-medium drop-shadow-sm">{reel.likes + (isLiked ? 1 : 0)}</span>
        </div>

        <div className="flex flex-col items-center">
          <button className="p-2 hover:opacity-80 transition-opacity">
            <MessageCircle className="h-7 w-7 text-white" />
          </button>
          <span className="text-white text-[13px] font-medium drop-shadow-sm">{reel.comments}</span>
        </div>

        <div className="flex flex-col items-center">
          <button 
            onClick={() => setIsAmened(!isAmened)}
            className="p-2 group/amen"
          >
            <span className={cn("text-2xl transition-all duration-200 block", isAmened ? "scale-110" : "grayscale opacity-80 hover:grayscale-0 hover:opacity-100")}>🙏</span>
          </button>
          <span className="text-white text-[13px] font-medium drop-shadow-sm">{reel.amens + (isAmened ? 1 : 0)}</span>
        </div>

        <button className="p-2 hover:opacity-80 transition-opacity">
          <Send className="h-7 w-7 text-white" />
        </button>

        <button className="p-2 hover:opacity-80 transition-opacity">
          <Bookmark className="h-7 w-7 text-white" />
        </button>

        <button className="p-2 hover:opacity-80 transition-opacity">
          <MoreHorizontal className="h-7 w-7 text-white" />
        </button>
      </div>

      {/* Bottom Content (Instagram Style) */}
      <div className="absolute bottom-4 left-4 right-16 text-white z-10 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 ring-1 ring-white/50">
            <AvatarImage src={reel.user.avatar} />
            <AvatarFallback>{reel.user.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm drop-shadow-sm">{reel.user.username}</span>
          <button className="text-[12px] font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-md hover:bg-white/20 transition-colors border border-white/20">
            Follow
          </button>
        </div>
        
        <p className="text-sm line-clamp-2 leading-snug drop-shadow-sm">{reel.caption}</p>
        
        <div className="flex items-center gap-2 text-[13px] bg-black/20 backdrop-blur-md w-fit px-2 py-1 rounded-full border border-white/10">
          <Music className="h-3 w-3" />
          <div className="overflow-hidden w-32 whitespace-nowrap mask-fade">
            <div className="animate-marquee inline-block mr-4">{reel.musicTitle}</div>
            <div className="animate-marquee inline-block">{reel.musicTitle}</div>
          </div>
        </div>
      </div>

      {/* Progress Bar (at the very bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-100" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
