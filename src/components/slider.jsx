"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function Slider() {
  return (
    <div className="flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ size: 20 }} // Adjust size here
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='w-full'
      >
        <SwiperSlide>
          <div className="aspect-[6/2]">
            <Image src={"/banner1.jpg"} alt='' layout="fill" objectFit="cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[6/2]">
            <Image src={"/banner1.jpg"} alt='' layout="fill" objectFit="cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[6/2]">
            <Image src={"/banner1.jpg"} alt='' layout="fill" objectFit="cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[6/2]">
            <Image src={"/banner1.jpg"} alt='' layout="fill" objectFit="cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
