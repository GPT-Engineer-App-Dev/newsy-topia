import React from 'react';

const StoryStream = ({ stories }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-green-400">Today's Storystream</h2>
      <ul className="space-y-4">
        {stories.map((story) => (
          <li key={story.objectID} className="border-b border-gray-800 pb-4">
            <h3 className="font-semibold mb-1">{story.title}</h3>
            <p className="text-sm text-gray-500">
              {story.author} | {new Date(story.created_at).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoryStream;