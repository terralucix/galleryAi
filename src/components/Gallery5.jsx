import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', title: 'Arte Moderno 1' },
  { id: 2, url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', title: 'Arte Moderno 2' },
  { id: 3, url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', title: 'Arte Moderno 3' },
  { id: 4, url: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d', title: 'Arte Moderno 4' },
  { id: 5, url: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d', title: 'Arte Moderno 5' }
];

export default function Gallery5() {
  return (
    <div className="gallery-container">
      <div className="gallery-title">
        <h1 className="title-animation-5">Galería Creativa</h1>
        <p>Transiciones Dinámicas</p>
      </div>
      
      <div className="h-[70vh] px-4">
        <Swiper
          modules={[EffectCreative, Navigation, Pagination, Autoplay]}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-120%', 0, -500],
            },
            next: {
              shadow: true,
              translate: ['120%', 0, -500],
            },
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
