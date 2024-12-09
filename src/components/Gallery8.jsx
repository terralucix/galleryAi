import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { 
    id: 1, 
    url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', 
    title: 'Future World 1',
    description: 'Digital Exploration'
  },
  { 
    id: 2, 
    url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead', 
    title: 'Future World 2',
    description: 'Virtual Reality'
  },
  { 
    id: 3, 
    url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', 
    title: 'Future World 3',
    description: 'Digital Space'
  },
  { 
    id: 4, 
    url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead', 
    title: 'Future World 4',
    description: 'Tech Dreams'
  },
  { 
    id: 5, 
    url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', 
    title: 'Future World 5',
    description: 'Digital Future'
  }
];

export default function Gallery8() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbClick = (index) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900">
      <div className="text-center pt-16 pb-8">
        <h1 className="text-6xl font-bold title-animation-8 mb-4">
          Future Gallery
        </h1>
        <p className="text-xl text-blue-300">
          Digital Dimensions
        </p>
      </div>

      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-[80%] max-w-4xl">
          <Swiper
            onSwiper={setSwiperRef}
            modules={[EffectFlip, Navigation, Pagination, Autoplay]}
            effect="flip"
            flipEffect={{
              slideShadows: true,
              limitRotation: true
            }}
            grabCursor={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative w-full h-[60vh] group">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-8 left-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                      <p className="text-lg text-blue-300">{image.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="px-8 pt-8">
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id}
              onClick={() => handleThumbClick(index)}
              className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-blue-400 scale-105' : 'hover:scale-105'
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
