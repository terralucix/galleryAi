import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16', title: 'Retrato 1' },
  { id: 2, url: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d', title: 'Retrato 2' },
  { id: 3, url: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d', title: 'Retrato 3' },
  { id: 4, url: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d', title: 'Retrato 4' },
  { id: 5, url: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d', title: 'Retrato 5' }
];

export default function Gallery3() {
  return (
    <div className="gallery-container">
      <div className="gallery-title">
        <h1 className="title-animation-3">Galería Cartas</h1>
        <p>Efecto Baraja</p>
      </div>
      
      <div className="flex justify-center items-center h-[70vh]">
        <div className="w-[350px] h-[500px]">
          <Swiper
            modules={[EffectCards, Navigation, Pagination]}
            effect="cards"
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
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
