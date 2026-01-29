import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-300 mix-blend-difference text-white bg-gradient-to-b from-black/40 to-transparent">
        <div className="flex items-center gap-2">
            {/* Logo Icon */}
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M5 10L20 25L35 10V30H30V18L20 28L10 18V30H5V10Z" fill="currentColor"></path>
        </svg>
        </div>
        
        {/* Center Menu */}
        <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase opacity-90">
            <a href="#" className="hover:text-[#CFA866] transition-colors duration-300">Residences</a>
            <a href="#" className="hover:text-[#CFA866] transition-colors duration-300">Dining</a>
            <a href="#" className="hover:text-[#CFA866] transition-colors duration-300">Wellness</a>
            <a href="#" className="hover:text-[#CFA866] transition-colors duration-300">About</a>
            <a href="#" className="hover:text-[#CFA866] transition-colors duration-300">Journal</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300 group">
                <span className="text-xs font-semibold tracking-widest uppercase">Book Stay</span>
                {/* @ts-ignore */}
                <iconify-icon icon="solar:calendar-linear" width="16" height="16" class="group-hover:text-[#CFA866]"></iconify-icon>
            </button>

            <button className="group flex items-center gap-2 md:hidden">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28" class="text-white group-hover:text-[#CFA866] transition-colors"></iconify-icon>
            </button>
        </div>
    </nav>
  );
}
