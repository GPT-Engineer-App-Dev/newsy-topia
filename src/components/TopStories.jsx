import React from 'react';

const TopStories = ({ stories }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-green-400">Top Stories</h2>
      <ul className="space-y-4">
        {stories.map((story, index) => (
          <li key={story.objectID} className="flex items-start">
            <span className="text-gray-500 mr-4">{index + 1}</span>
            <div>
              <h3 className="font-semibold mb-1">{story.title}</h3>
              <p className="text-sm text-gray-500">{story.author}</p>
            </div>
            <img src="/placeholder.svg" alt={story.title} className="w-16 h-16 object-cover ml-4" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopStories;