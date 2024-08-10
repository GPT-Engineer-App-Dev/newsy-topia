import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HackerNewsApp from '../components/HackerNewsApp';
import { Plus } from 'lucide-react';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black text-white">
        <header className="bg-black py-4 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <nav className="flex justify-center items-center space-x-6 text-sm">
              <h1 className="text-2xl font-bold tracking-tighter">HackerNews</h1>
              <span>/</span>
              <span>Tech</span>
              <span>/</span>
              <span>Startups</span>
              <span>/</span>
              <span>Programming</span>
              <span>/</span>
              <span>Science</span>
              <span>/</span>
              <span>AI</span>
              <span>/</span>
              <span className="flex items-center">
                More <Plus className="h-4 w-4 ml-1" />
              </span>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4">
          <HackerNewsApp />
        </main>
        <footer className="bg-black py-6 mt-12 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p>&copy; 2023 Hacker News. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default Index;