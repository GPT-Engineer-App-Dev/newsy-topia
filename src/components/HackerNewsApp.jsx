import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import FeaturedStory from './FeaturedStory';
import TopStories from './TopStories';
import StoryStream from './StoryStream';
import MostPopular from './MostPopular';
import SearchBar from './SearchBar';

const fetchStories = async (searchQuery = '') => {
  const url = searchQuery
    ? `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(searchQuery)}&hitsPerPage=100`
    : 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch stories');
  }
  return response.json();
};

const HackerNewsApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['stories', searchQuery],
    queryFn: () => fetchStories(searchQuery),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const stories = data?.hits || [];
  const featuredStory = stories[0];
  const topStories = stories.slice(1, 6);
  const storyStreamStories = stories.slice(6, 10);
  const mostPopularStories = stories.slice(10, 13);

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <FeaturedStory story={featuredStory} />
          <StoryStream stories={storyStreamStories} />
        </div>
        <div className="lg:w-1/3">
          <TopStories stories={topStories} />
          <MostPopular stories={mostPopularStories} />
        </div>
      </div>
    </div>
  );
};

export default HackerNewsApp;