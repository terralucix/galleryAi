import React from 'react';
import Masonry from 'react-masonry-css';

const images = [
  {
    id: 1,
    url: 'https://source.unsplash.com/random/800x600?ai=1',
    title: 'AI Generated Landscape',
    description: 'A beautiful landscape created by AI'
  },
  {
    id: 2,
    url: 'https://source.unsplash.com/random/600x800?ai=2',
    title: 'Digital Portrait',
    description: 'An AI generated portrait'
  },
  // Add more images as needed
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
};

export default function ImageGallery() {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {images.map((image) => (
        <div key={image.id} className="mb-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
              <p className="text-gray-600">{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  );
}
