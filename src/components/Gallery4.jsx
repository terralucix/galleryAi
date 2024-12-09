import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16', title: 'Paisaje 1' },
  { id: 2, url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', title: 'Paisaje 2' },
  { id: 3, url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', title: 'Paisaje 3' },
  { id: 4, url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', title: 'Paisaje 4' },
  { id: 5, url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', title: 'Paisaje 5' }
];

export default function Gallery4() {
  return (
    <div className="gallery-container">
      <div className="gallery-title">
        <h1 className="title-animation-4">Galería Coverflow</h1>
        <p>Efecto Profundidad</p>
      </div>
      
      <div className="h-[70vh] px-4">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
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
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg">
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
  );
}
