import React from 'react';
import { Post } from '../../utils/api';

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-w-4 aspect-h-3">
        <img 
          src={post.download_url}
          alt={`Photo by ${post.author}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Photo id {post.id} by {post.author}</h3>
        <p className="text-sm text-gray-600">Original size: {post.width}x{post.height}</p>
        <a 
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
        >
          View original
        </a>
      </div>
    </div>
  );
};