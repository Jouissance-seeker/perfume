import { AmazingOffer } from '@/containers/routes/home/amazing-offer';
import { Categories } from '@/containers/routes/home/categories';
import { HeroSection } from '@/containers/routes/home/hero-section';

export default function Page() {
  return (
    <>
      <HeroSection />
      <Categories />
      <AmazingOffer />
    </>
  );
}
