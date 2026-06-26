import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Heart, PlusSquare, User, Church, MessageCircle, MoreHorizontal, Cross, PlaySquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/explore' },
    { icon: PlaySquare, label: 'Reels', path: '/reels' },
    { icon: Heart, label: 'Prayers', path: '/prayers' },
    { icon: MessageCircle, label: 'Messages', path: '/messages' },
    { icon: Church, label: 'Churches', path: '/churches' },
    { icon: PlusSquare, label: 'Create', path: '/create' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="hidden h-screen w-64 flex-col border-r bg-background px-4 py-8 md:flex lg:w-72">
      <div className="mb-10 flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Cross className="h-5 w-5" />
        </div>
        <h1 className="text-xl font-bold tracking-tight">Covenant</h1>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-4 rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted",
                isActive ? "bg-muted text-primary" : "text-foreground"
              )
            }
          >
            <item.icon className="h-6 w-6" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-4">
        <button className="flex w-full items-center gap-4 rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted text-foreground">
          <MoreHorizontal className="h-6 w-6" />
          <span>More</span>
        </button>
      </div>
    </div>
  );
};
