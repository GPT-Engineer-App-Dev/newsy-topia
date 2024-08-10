import React from 'react';
import { ExternalLink } from 'lucide-react';

const StoryList = ({ stories }) => {
  return (
    <ul className="space-y-4">
      {stories.map((story) => (
        <li key={story.objectID} className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              {story.points} upvotes | by {story.author}
            </span>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              Read more
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoryList;