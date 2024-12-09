import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GalleryBase({ 
  title, 
  subtitle, 
  images, 
  titleClass, 
  SwiperComponent,
  additionalModules = [],
  swiperParams = {} 
}) {
  return (
    <div className="gallery-container">
      <div className="gallery-title">
        <h1 className={titleClass}>
          {title}
        </h1>
        <p>{subtitle}</p>
      </div>

      <div className="swiper-container">
        <SwiperComponent
          modules={[Navigation, Pagination, Autoplay, ...additionalModules]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          {...swiperParams}
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
                <div className="slide-content">
                  <div className="slide-title">
                    <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                    {image.description && (
                      <p className="text-lg text-gray-300">{image.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>

      <div className="thumbnails-grid">
        {images.map((image) => (
          <div key={image.id} className="thumbnail group">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="thumbnail-overlay">
              <p className="text-white font-bold text-center px-2">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
