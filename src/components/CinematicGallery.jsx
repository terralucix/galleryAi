import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = Array(10).fill(null).map((_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/1920/1080?random=${i + 40}`,
  title: `Escena ${i + 1}`,
  description: `Descripción cinematográfica ${i + 1}`
}));

export default function CinematicGallery() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-40" />
      
      <div className="relative h-full flex flex-col justify-center">
        <h2 className="text-white text-5xl font-bold text-center mb-12">Galería Cinematográfica</h2>
        
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          className="w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative aspect-video">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg">
                  <div className="absolute bottom-8 left-8 text-white max-w-md">
                    <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-80">{image.description}</p>
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
