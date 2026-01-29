import { useEffect } from 'react';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import HeroSection from '../components/sections/HeroSection';
import BookingBar from '../components/sections/BookingBar';
import PhilosophySection from '../components/sections/PhilosophySection';
import RoomsSection from '../components/sections/RoomsSection';
import DiningSection from '../components/sections/DiningSection';
import WellnessSection from '../components/sections/WellnessSection';
import ExperiencesSection from '../components/sections/ExperiencesSection';

export default function Home() {
  useEffect(() => {
    // Simple parallax logic for specific sections
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const heroImg = document.querySelector('header img') as HTMLElement;
        if(heroImg) {
            heroImg.style.transform = `scale(1.05) translateY(${scrollY * 0.1}px)`;
        }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FDFBF7] text-stone-800 font-sans antialiased overflow-x-hidden selection:bg-[#CFA866] selection:text-white">
      <Navbar />
      <HeroSection />
      <BookingBar />
      <PhilosophySection />
      <RoomsSection />
      <WellnessSection />
      <DiningSection />
      <ExperiencesSection />
      <Footer />
    </div>
  );
}
