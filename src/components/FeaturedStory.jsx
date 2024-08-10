import React from 'react';

const FeaturedStory = ({ story }) => {
  return (
    <div className="mb-12 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-black flex items-center">
        <h1 className="text-6xl font-bold transform -rotate-90 whitespace-nowrap">Hacker News</h1>
      </div>
      <img 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Featured story" 
        className="w-3/4 ml-auto h-96 object-cover mb-4" 
      />
      <div className="ml-auto w-3/4">
        <h2 className="text-4xl font-bold mb-2 leading-tight">{story.title}</h2>
        <p className="text-gray-400 mb-4">
          {story.text ? story.text.slice(0, 150) + '...' : 'Click to read the full story on Hacker News.'}
        </p>
        <div className="text-sm text-gray-500">
          <span>{story.author}</span> | <span>{new Date(story.created_at).toLocaleString()}</span> | <span>{story.points} points</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;