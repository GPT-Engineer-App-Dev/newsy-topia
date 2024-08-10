import React from 'react';

const MostPopular = ({ stories }) => {
  return (
    <div className="mb-8 bg-purple-900 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Most Popular</h2>
      <ul className="space-y-4">
        {stories.map((story, index) => (
          <li key={story.objectID}>
            <span className="text-purple-300 mr-2">{index + 1}</span>
            <span className="font-semibold">{story.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopular;