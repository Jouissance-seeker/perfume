'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionHead } from '@/components/section-head';

export function Categories() {
  const categories = [
    {
      id: 1,
      title: 'انواع عطر برند',
      subtitle: 'معروفتــرین برندهای عطر و ادکلن',
      image:
        'https://halochin.ir/perfume-shop/wp-content/uploads/2023/12/Frame-11-1.png',
    },
    {
      id: 2,
      title: 'انواع اسپری و بادی اسپلش',
      subtitle: 'معروفتــرین برندهای عطر و ادکلن',
      image:
        'https://halochin.ir/perfume-shop/wp-content/uploads/2023/12/Frame-12-1.png',
    },
    {
      id: 3,
      title: 'انواع ادکلن زنانه',
      subtitle: 'معروفتــرین برندهای عطر و ادکلن',
      image:
        'https://halochin.ir/perfume-shop/wp-content/uploads/2023/12/Group-5-1.png',
    },
    {
      id: 4,
      title: 'انواع ادکلن مردانه',
      subtitle: 'معروفتــرین برندهای عطر و ادکلن',
      image:
        'https://halochin.ir/perfume-shop/wp-content/uploads/2023/12/Frame-10-1.png',
    },
  ];

  return (
    <section className="container space-y-7">
      {/* head */}
      <SectionHead title="دستــه بندی محصــولات" spark="blue" />
      {/* body */}
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        spaceBetween={15}
        loop
      >
        {categories.map((item) => (
          <SwiperSlide
            key={item.id}
            className="relative flex h-auto w-full rounded-lg"
          >
            <div className="relative z-10 flex items-center gap-3 rounded-xl bg-blue-100 p-4 after:absolute after:right-5 after:top-6 after:-z-10 after:size-10 after:rounded-full after:bg-blue-200">
              <Image src={item.image} alt="اسلاید" width={50} height={50} />
              <div>
                <p className="font-bold text-gray-800">{item.title}</p>
                <p className="text-xsp">{item.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
