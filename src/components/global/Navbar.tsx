import { Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <div className="flex items-center gap-2">
        {/* Logo Icon */}
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M5 10L20 25L35 10V30H30V18L20 28L10 18V30H5V10Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase opacity-90">
        <a href="#philosophy" className="hover:text-[#CFA866] transition-colors duration-300">Vision</a>
        <a href="#rooms" className="hover:text-[#CFA866] transition-colors duration-300">Rooms</a>
        <a href="#dining" className="hover:text-[#CFA866] transition-colors duration-300">Dining</a>
      </div>

      <button className="group flex items-center gap-2">
        <span className="hidden md:block text-sm font-medium tracking-widest uppercase group-hover:text-[#CFA866] transition-colors">Book Now</span>
        <Calendar className="w-6 h-6 stroke-white group-hover:stroke-[#CFA866] transition-colors" />
      </button>
    </nav>
  );
}
