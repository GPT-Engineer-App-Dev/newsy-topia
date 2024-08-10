import React from 'react';
import { ExternalLink } from 'lucide-react';

const StoryList = ({ stories }) => {
  return (
    <ul className="space-y-8">
      {stories.map((story) => (
        <li key={story.objectID} className="border-b border-gray-800 pb-6">
          <h2 className="text-2xl font-bold mb-2 text-verge-lightBlue">{story.title}</h2>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>
              {story.points} upvotes | by {story.author}
            </span>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-verge-red hover:text-verge-lightBlue transition-colors flex items-center"
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