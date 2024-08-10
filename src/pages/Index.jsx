import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HackerNewsApp from '../components/HackerNewsApp';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-orange-500 text-white py-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Hacker News Top 100</h1>
          </div>
        </header>
        <main className="container mx-auto py-8">
          <HackerNewsApp />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default Index;