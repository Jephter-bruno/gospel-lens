# Plan: Christian Social Media Platform (Instagram Clone)

Building a faith-centered social media platform that mirrors Instagram's core functionality while adding community-specific features like prayer requests, daily verses, and church event discovery.

## Scope Summary
- **Core Instagram Features:** Photo/Video feed, Stories, Profile pages, Discovery, Direct Messaging, Likes, Comments, and Following/Followers.
- **Christian-Specific Features:** 
    - **Prayer Requests:** A dedicated section for sharing and responding to prayers ("I prayed for this").
    - **Daily Verse:** A prominent widget showing a daily scripture.
    - **Church/Ministry Discovery:** Find local churches or online ministries.
    - **Devotional Content:** Support for longer-form "Sermon Notes" or "Devotionals" in the feed.
- **Tech Stack:** React, Tailwind CSS, Lucide Icons, Shadcn UI (existing), Framer Motion for transitions.
- **Persistence:** Client-side only (localStorage/SessionStorage) for this phase as per session constraints.

## Non-Goals
- Real-time backend synchronization (No Supabase/Database in this session).
- Actual file uploads to a server (will use `URL.createObjectURL` or placeholder images).
- Verified badges for real entities.

## Assumptions
- The application will be a Single Page Application (SPA).
- We will mock the "Auth" state to simulate a logged-in user experience.

## Affected Areas
- **UI Components:** New layout with navigation (bottom bar for mobile, sidebar for desktop).
- **Feed Logic:** Managing posts, likes, and comments in local state.
- **Prayer Wall:** A new module for prayer interactions.
- **Discovery:** Filtering by "Trending Faith" or "Local Churches".

## Phases

### Phase 1: Foundation & Layout
- Set up routing (React Router) and the main shell.
- Create the navigation system (Instagram-style).
- Define the theme (Light/Dark mode) with a clean, reverent aesthetic.
- **Owner:** frontend_engineer

### Phase 2: Feed & Stories
- Implement the main feed component.
- Build the "Story" circle component for top-of-feed.
- Create "Post" components (Photo, Caption, Comments, Prayer button).
- **Owner:** frontend_engineer

### Phase 3: Prayer & Faith Features
- Build the "Prayer Wall" page where users can post requests.
- Add the "Daily Verse" component to the home or discovery page.
- Implement "Ministry Discovery" as a category in Search.
- **Owner:** frontend_engineer

### Phase 4: Profile & Messaging
- Create the User Profile page (Grid view of posts).
- Build a simplified Direct Message (DM) interface.
- Add "Edit Profile" forms.
- **Owner:** frontend_engineer

### Phase 5: Polishing & Interactive Elements
- Add animations (Framer Motion) for switching tabs and opening stories.
- Final CSS adjustments and responsive fixes.
- **Owner:** quick_fix_engineer

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the core application shell and feed infrastructure.
2. quick_fix_engineer — Refine UI, fix typos, and polish transitions.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4
- **Scope:** 
    - Install `lucide-react`, `framer-motion`, and `react-router-dom`.
    - Create a layout with a Sidebar (Desktop) and Bottom Nav (Mobile).
    - Build the Home Feed, Stories bar, and Prayer Wall.
    - Use mock data for all posts and user profiles.
    - Ensure the "Amen/Prayed" button exists on posts alongside the "Like" button.
- **Files:** `src/App.tsx`, `src/components/`, `src/pages/`
- **Depends on:** none
- **Acceptance criteria:** App is navigable, feed shows posts with "Like" and "Amen" buttons, Prayer wall displays text requests, mobile view is functional.

### 2. quick_fix_engineer
- **Phases:** 5
- **Scope:** 
    - Fix any CSS overflows.
    - Polish the "Daily Verse" card styling.
    - Ensure font sizes and colors align with a "Christian/Peaceful" brand identity.
- **Files:** `src/index.css`, various components.
- **Depends on:** frontend_engineer
- **Acceptance criteria:** UI feels smooth, no visual bugs, and the Christian-specific icons (Cross, Hands praying) are correctly aligned.
