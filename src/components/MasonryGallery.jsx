import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = Array(12).fill(null).map((_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/800/${i % 2 === 0 ? '600' : '800'}?random=${i + 30}`,
  title: `Obra ${i + 1}`,
  artist: `Artista ${i + 1}`
}));

export default function MasonryGallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="h-screen w-full bg-black relative p-8">
      <h2 className="text-white text-5xl font-bold mb-8 text-center">Galería Mosaico</h2>
      
      <Swiper
        modules={[Grid, Pagination, Navigation]}
        grid={{
          rows: 2,
          fill: true
        }}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="h-[80vh]"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div 
              className="relative group cursor-pointer h-full"
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-sm">{image.artist}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={activeImage.url}
              alt={activeImage.title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">{activeImage.title}</h3>
              <p className="text-lg">{activeImage.artist}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
