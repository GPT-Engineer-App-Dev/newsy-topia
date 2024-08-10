import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';

const StoryList = ({ stories }) => {
  return (
    <ul className="space-y-4 mt-4">
      {stories.map((story) => (
        <li key={story.objectID} className="border-b border-gray-800 pb-4">
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-4">
              <ArrowUp className="text-verge-red" />
              <span className="text-sm text-gray-400">{story.points}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-verge-lightBlue">{story.title}</h3>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-4">by {story.author}</span>
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-verge-red hover:text-verge-lightBlue transition-colors flex items-center"
                >
                  Read more
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoryList;