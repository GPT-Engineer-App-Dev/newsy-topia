import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HackerNewsApp from '../components/HackerNewsApp';
import { MoreHorizontal } from 'lucide-react';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black text-white">
        <header className="bg-black py-4 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center">
              <h1 className="text-2xl font-bold tracking-tighter">The Verge</h1>
              <ul className="hidden md:flex space-x-6 text-sm">
                <li>Tech</li>
                <li>Reviews</li>
                <li>Science</li>
                <li>Entertainment</li>
                <li>AI</li>
                <li className="flex items-center">
                  More <MoreHorizontal className="h-4 w-4 ml-1" />
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <HackerNewsApp />
          </div>
          <aside className="lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Top Stories</h2>
            {/* Top stories will be populated here */}
          </aside>
        </main>
        <footer className="bg-black py-6 mt-12 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p>&copy; 2023 The Verge x Hacker News. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default Index;