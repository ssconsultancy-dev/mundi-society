import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    image: "/images/happyLohri.jpg",
    title: 'Happy Lohri'
  },
  {
    image: '/images/lohriCelebration.jpg',
    title: 'Lohri Celebration'
  },
  {
    image: '/images/jagrata.jpg',
    title: 'Jagrata Program'
  },
  {
    image: '/images/jagrataNight.jpg',
    title: 'Jagrata Night'
  },
  {
    image: '/images/gurbaniPath.jpg',
    title: 'Gurbani Path'
  },
  {
    image: '/images/path.jpg',
  },
  {
    image: '/images/langar.jpg',
  }
];

const ImageSlider = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Society Events & Activities</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="rounded-xl overflow-hidden shadow-2xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSlider;