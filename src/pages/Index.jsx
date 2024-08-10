import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HackerNewsApp from '../components/HackerNewsApp';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black text-white">
        <header className="bg-verge-red py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight">Hacker News!</h1>
          </div>
        </header>
        <nav className="bg-verge-darkBlue py-2">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-4">
              <li className="text-verge-lightBlue hover:text-white transition-colors">Tech</li>
              <li className="text-verge-lightBlue hover:text-white transition-colors">Reviews</li>
              <li className="text-verge-lightBlue hover:text-white transition-colors">Science</li>
              <li className="text-verge-lightBlue hover:text-white transition-colors">Entertainment</li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto py-8 px-4">
          <HackerNewsApp />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default Index;