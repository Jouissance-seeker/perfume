'use client';
import 'swiper/css';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroSlider } from '@/data/home/hero-slider';

export function HeroSection() {
  return (
    <section className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <Text />
      <Slider />
    </section>
  );
}

const Text = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="relative text-xl font-light text-blue-300 after:absolute after:-bottom-1 after:right-0 after:-z-10 after:h-4 after:w-[150px] after:rounded-full after:bg-blue-100 lg:text-3xl">
        با محصولات فروشگاه ما
      </p>
      <p className="font-pelak text-xl font-bold text-blue-300 lg:text-3xl">
        خوشـــبوتـرین فرد جمع باشید.
      </p>
      <p className="text-sm font-light leading-6 lg:text-base lg:font-normal">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.متن ساختگی با تولید سادگی
        نامفهوم از صنعت چاپ است.لکه روزنامه و مجله در ستون و سطرآنچنان که لازم
        است.
      </p>
      <div className="mt-3 flex justify-around">
        {[
          {
            title: 'رضایت مشتری',
            subtitle: 'مشتریانی از سراسر کشور',
            count: 270,
          },
          {
            title: 'محصول اصل',
            subtitle: 'محصولی از دل اروپا و آمریکا',
            count: 1000,
          },
          {
            title: 'کاربر فعال',
            subtitle: 'در سایت ما عضو شده اند',
            count: 200,
          },
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <div className="relative w-16 rounded-l-full bg-brown-100 py-4 text-center text-lg text-brown-300 after:absolute after:-right-2 after:bottom-2 after:h-3/4 after:w-2 after:rounded-r-md after:bg-brown-200 lg:font-medium">
              {item.count}
            </div>
            <p className="mb-2 mt-3 text-center text-smp font-medium text-brown-300 lg:text-base">
              {item.title}
            </p>
            <p className="text-center text-xs font-light text-brown-300 lg:text-sm">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Slider = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative flex size-full">
      {/* slides */}
      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={8}
        loop
        ref={swiperRef}
        id="hero-slider"
      >
        {heroSlider.map((item) => (
          <SwiperSlide
            key={item.id}
            className="relative flex h-auto w-full rounded-lg"
          >
            <div className="relative flex h-auto w-full justify-center">
              <Image
                src={item.image}
                alt="اسلاید"
                width={400}
                height={600}
                className="h-auto w-full max-w-[350px] object-contain sm:max-w-[450px] lg:max-w-[550px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* navigation */}
      <div className="absolute bottom-2 left-1/2 z-10 flex w-fit -translate-x-1/2 gap-2 transition-all lg:bottom-4">
        <button
          className="z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <ArrowRight2 size="32" className="fill-blue-300" variant="Bold" />
        </button>
        <button
          className="z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
          onClick={() => swiperRef.current.slideNext()}
        >
          <ArrowLeft2 size="32" className="fill-blue-300" variant="Bold" />
        </button>
      </div>
    </div>
  );
};
