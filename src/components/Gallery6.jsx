import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { 
    id: 1, 
    url: 'https://source.unsplash.com/random/1600x900/?art,1', 
    title: 'Arte Digital 1'
  },
  { 
    id: 2, 
    url: 'https://source.unsplash.com/random/1600x900/?art,2', 
    title: 'Arte Digital 2'
  },
  { 
    id: 3, 
    url: 'https://source.unsplash.com/random/1600x900/?art,3', 
    title: 'Arte Digital 3'
  },
  { 
    id: 4, 
    url: 'https://source.unsplash.com/random/1600x900/?art,4', 
    title: 'Arte Digital 4'
  },
  { 
    id: 5, 
    url: 'https://source.unsplash.com/random/1600x900/?art,5', 
    title: 'Arte Digital 5'
  }
];

export default function Gallery6() {
  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Título */}
      <div className="text-center pt-16 pb-8">
        <h1 className="text-6xl font-bold text-white title-animation-6 mb-4">
          Galería 6
        </h1>
        <p className="text-xl text-gray-300">
          Arte Digital
        </p>
      </div>

      {/* Carrusel Principal */}
      <div className="flex-1 px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="h-full rounded-lg overflow-hidden"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative h-full w-full">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-3xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Miniaturas */}
      <div className="p-8">
        <div className="grid grid-cols-5 gap-4">
          {images.map((image) => (
            <div 
              key={image.id}
              className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-white/50 transition-all"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
