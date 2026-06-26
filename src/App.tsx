import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AppLayout } from '@/components/layout/AppLayout';
import { Home } from '@/pages/Home';
import { Explore } from '@/pages/Explore';
import { Prayers } from '@/pages/Prayers';
import { Messages } from '@/pages/Messages';
import { Profile } from '@/pages/Profile';
import { Reels } from '@/pages/Reels';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/prayers" element={<Prayers />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/profile" element={<Profile />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AppLayout>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
