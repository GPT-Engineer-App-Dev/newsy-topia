import React from 'react';
import { ExternalLink } from 'lucide-react';

const FeaturedStory = ({ story }) => {
  return (
    <div className="bg-verge-darkBlue p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-verge-lightBlue">{story.title}</h2>
      <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
        <span>
          {story.points} upvotes | by {story.author}
        </span>
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-verge-red hover:text-verge-lightBlue transition-colors flex items-center"
        >
          Read full story
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
      <p className="text-gray-300">
        {story.text ? story.text.slice(0, 200) + '...' : 'Click to read the full story on the original site.'}
      </p>
    </div>
  );
};

export default FeaturedStory;