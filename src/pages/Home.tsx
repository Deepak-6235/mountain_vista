import { useEffect } from 'react';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import HeroSection from '../components/sections/HeroSection';
import BookingBar from '../components/sections/BookingBar';
import PhilosophySection from '../components/sections/PhilosophySection';
import RoomsSection from '../components/sections/RoomsSection';
import DiningSection from '../components/sections/DiningSection';

export default function Home() {
  useEffect(() => {
    // Simple parallax effect script
    const handleScroll = () => {
      const parallaxImages = document.querySelectorAll('img');
      parallaxImages.forEach(img => {
        const speed = 0.05;
        const yPos = -(window.scrollY * speed);
        // Apply only to hero mainly to avoid jitter
        if (img.parentElement?.parentElement?.tagName === 'HEADER') {
          img.style.transform = `translateY(${yPos}px) scale(1.05)`;
        }
      });
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
      <DiningSection />
      <Footer />
    </div>
  );
}
