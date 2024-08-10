import React from 'react';

const FeaturedStory = ({ story }) => {
  return (
    <div className="mb-12">
      <img src="/placeholder.svg" alt="Featured story" className="w-full h-96 object-cover mb-4" />
      <h2 className="text-4xl font-bold mb-2 leading-tight">{story.title}</h2>
      <p className="text-gray-400 mb-4">
        {story.text ? story.text.slice(0, 150) + '...' : 'Click to read the full story on Hacker News.'}
      </p>
      <div className="text-sm text-gray-500">
        <span>{story.author}</span> | <span>{new Date(story.created_at).toLocaleDateString()}</span> | <span>{story.points} points</span>
      </div>
    </div>
  );
};

export default FeaturedStory;