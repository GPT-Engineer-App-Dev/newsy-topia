import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HackerNewsApp from '../components/HackerNewsApp';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black text-white">
        <header className="bg-verge-red py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-4xl font-bold tracking-tight">Hacker News!</h1>
            <Button variant="ghost" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>
        <nav className="bg-verge-darkBlue py-2">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-4 overflow-x-auto">
              <li className="text-verge-lightBlue hover:text-white transition-colors whitespace-nowrap">Top Stories</li>
              <li className="text-verge-lightBlue hover:text-white transition-colors whitespace-nowrap">New</li>
              <li className="text-verge-lightBlue hover:text-white transition-colors whitespace-nowrap">Ask HN</li>
              <li className="text-verge-lightBlue hover:text-white transition-colors whitespace-nowrap">Show HN</li>
              <li className="text-verge-lightBlue hover:text-white transition-colors whitespace-nowrap">Jobs</li>
            </ul>
          </div>
        </nav>
        <div className="bg-gradient-to-r from-verge-red to-verge-darkBlue py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-4">Top Tech Stories</h2>
            <p className="text-xl">Curated by the Hacker News community, styled by The Verge</p>
          </div>
        </div>
        <main className="container mx-auto py-8 px-4">
          <HackerNewsApp />
        </main>
        <footer className="bg-verge-darkBlue py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-verge-lightBlue">
            <p>&copy; 2023 The Verge x Hacker News. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default Index;