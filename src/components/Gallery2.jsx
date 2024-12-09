import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16', title: 'Abstracto 1' },
  { id: 2, url: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d', title: 'Abstracto 2' },
  { id: 3, url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4', title: 'Abstracto 3' },
  { id: 4, url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead', title: 'Abstracto 4' },
  { id: 5, url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', title: 'Abstracto 5' }
];

export default function Gallery2() {
  return (
    <div className="gallery-container">
      <div className="gallery-title">
        <h1 className="title-animation-2">Galería Cubo</h1>
        <p>Rotación 3D</p>
      </div>
      
      <div className="flex justify-center items-center h-[70vh]">
        <div className="w-[500px] h-[500px]">
          <Swiper
            modules={[EffectCube, Navigation, Pagination, Autoplay]}
            effect="cube"
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-10 left-10">
                      <h2 className="text-3xl font-bold text-white">{image.title}</h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
