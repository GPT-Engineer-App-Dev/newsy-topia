import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80"
];

const TopStories = ({ stories }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-green-400">Top Stories</h2>
      <ul className="space-y-4">
        {stories.map((story, index) => (
          <li key={story.objectID} className="flex items-start">
            <span className="text-gray-500 mr-4">{index + 1}</span>
            <div className="flex-grow">
              <h3 className="font-semibold mb-1">{story.title}</h3>
              <p className="text-sm text-gray-500">{story.author}</p>
            </div>
            <img src={images[index]} alt={story.title} className="w-16 h-16 object-cover ml-4" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopStories;