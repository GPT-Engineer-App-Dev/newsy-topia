import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StoryList from './StoryList';
import StorySkeletonList from './StorySkeletonList';
import FeaturedStory from './FeaturedStory';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100');
  if (!response.ok) {
    throw new Error('Failed to fetch top stories');
  }
  return response.json();
};

const HackerNewsApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  const filteredStories = data?.hits.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const featuredStory = filteredStories[0];
  const remainingStories = filteredStories.slice(1);

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="mb-6 flex">
        <Input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2 bg-gray-900 text-white border-gray-700 focus:border-purple-500"
        />
        <Button variant="outline" className="bg-purple-600 text-white hover:bg-purple-700">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      {isLoading ? (
        <StorySkeletonList />
      ) : (
        <>
          {featuredStory && <FeaturedStory story={featuredStory} />}
          <StoryList stories={remainingStories} />
        </>
      )}
    </div>
  );
};

export default HackerNewsApp;