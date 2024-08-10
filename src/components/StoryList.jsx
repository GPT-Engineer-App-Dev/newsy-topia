import React from 'react';

const StoryList = ({ stories }) => {
  return (
    <ul className="space-y-8">
      {stories.map((story) => (
        <li key={story.objectID} className="border-b border-gray-800 pb-6">
          <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
          <div className="text-sm text-gray-500 mb-2">
            <span>{story.author}</span> | <span>{new Date(story.created_at).toLocaleDateString()}</span> | <span>{story.points} points</span>
          </div>
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors"
          >
            Read on Hacker News
          </a>
        </li>
      ))}
    </ul>
  );
};

export default StoryList;