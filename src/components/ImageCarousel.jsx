import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleries = [
  {
    id: 1,
    title: "Abstract Dreams",
    subtitle: "AI-Generated Masterpieces",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      url: `https://source.unsplash.com/random/800x600?abstract=${i + 1}`,
      title: `Abstract ${i + 1}`
    }))
  },
  {
    id: 2,
    title: "Digital Landscapes",
    subtitle: "Future Worlds",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      url: `https://source.unsplash.com/random/800x600?landscape=${i + 1}`,
      title: `Landscape ${i + 1}`
    }))
  },
  {
    id: 3,
    title: "AI Portraits",
    subtitle: "Digital Souls",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      url: `https://source.unsplash.com/random/800x600?portrait=${i + 1}`,
      title: `Portrait ${i + 1}`
    }))
  }
];

export default function ImageCarousel() {
  return (
    <div className="space-y-24">
      {galleries.map((gallery) => (
        <motion.div
          key={gallery.id}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="card p-8"
        >
          <div className="mb-12 text-center">
            <motion.h2 
              className="font-display text-5xl md:text-6xl font-bold title-gradient mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {gallery.title}
            </motion.h2>
            <p className="text-xl text-gray-400">{gallery.subtitle}</p>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="gallery-swiper"
          >
            {gallery.images.map((image) => (
              <SwiperSlide key={image.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-medium text-white">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      ))}
    </div>
  );
}
