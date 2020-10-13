import { Divider } from '@/components/Divider';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { IntroCards } from '@/components/IntroCards';
import { ServicesDescription } from '@/components/ServicesDescription';
import { TopContactIcons } from '@/components/TopContactIcons';

export default function Home() {
  return (
    <div className="pt__main_container md:container bg-white mx-auto p-0 m-0">
      <TopContactIcons />

      <Hero />

      <Divider />

      <IntroCards />

      <Divider />

      <ServicesDescription />

      <Footer />
    </div>
  );
}
