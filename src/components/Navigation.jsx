import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-4 right-4 z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex space-x-6">
        <a href="/gallery" className="text-white hover:text-purple-400 transition-colors">
          Galería 1
        </a>
        <a href="/gallery2" className="text-white hover:text-purple-400 transition-colors">
          Galería 2
        </a>
      </div>
    </nav>
  );
}
