import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Heart, PlusSquare, User, Church, MessageCircle, PlaySquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background px-4 md:hidden">
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn("flex flex-col items-center justify-center space-y-1 transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")
        }
      >
        <Home className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          cn("flex flex-col items-center justify-center space-y-1 transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")
        }
      >
        <Search className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/reels"
        className={({ isActive }) =>
          cn("flex flex-col items-center justify-center space-y-1 transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")
        }
      >
        <PlaySquare className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/prayers"
        className={({ isActive }) =>
          cn("flex flex-col items-center justify-center space-y-1 transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")
        }
      >
        <Heart className="h-6 w-6" />
      </NavLink>
      <button className="flex flex-col items-center justify-center space-y-1 text-muted-foreground hover:text-primary">
        <PlusSquare className="h-6 w-6" />
      </button>
      <NavLink
        to="/messages"
        className={({ isActive }) =>
          cn("flex flex-col items-center justify-center space-y-1 transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")
        }
      >
        <MessageCircle className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          cn("flex flex-col items-center justify-center space-y-1 transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")
        }
      >
        <User className="h-6 w-6" />
      </NavLink>
    </div>
  );
};
