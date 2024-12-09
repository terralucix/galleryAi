import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { 
    id: 1, 
    url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead', 
    title: 'Cyberpunk Vision 1',
    description: 'Digital Art Future'
  },
  { 
    id: 2, 
    url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', 
    title: 'Cyberpunk Vision 2',
    description: 'Future World'
  },
  { 
    id: 3, 
    url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead', 
    title: 'Cyberpunk Vision 3',
    description: 'Digital Dreams'
  },
  { 
    id: 4, 
    url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', 
    title: 'Cyberpunk Vision 4',
    description: 'Future Tech'
  },
  { 
    id: 5, 
    url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead', 
    title: 'Cyberpunk Vision 5',
    description: 'Digital World'
  }
];

export default function Gallery7() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbClick = (index) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900">
      <div className="text-center pt-16 pb-8">
        <h1 className="text-6xl font-bold title-animation-7 mb-4">
          Cyberpunk Gallery
        </h1>
        <p className="text-xl text-gray-300">
          Future Visions
        </p>
      </div>

      <div className="h-[60vh] px-8">
        <Swiper
          onSwiper={setSwiperRef}
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative h-full w-full group">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <div className="absolute bottom-8 left-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-lg text-gray-300">{image.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="px-8 pt-8">
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id}
              onClick={() => handleThumbClick(index)}
              className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-white scale-105' : 'hover:scale-105'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                activeIndex === index ? 'opacity-0' : 'opacity-50 hover:opacity-30'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-center font-bold px-2">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
