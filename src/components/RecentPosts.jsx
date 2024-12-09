import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Getting Started with AI Image Generation',
    excerpt: 'Learn how to create stunning AI-generated images...',
    image: 'https://source.unsplash.com/random/400x300?ai=1'
  },
  {
    id: 2,
    title: 'The Future of AI Art',
    excerpt: 'Exploring the possibilities of AI-generated artwork...',
    image: 'https://source.unsplash.com/random/400x300?ai=2'
  }
];

export default function RecentPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <a
              href={`/posts/${post.id}`}
              className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Read More
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
