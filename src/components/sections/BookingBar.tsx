import React from 'react';

export default function BookingBar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl">
        <div className="backdrop-blur-xl bg-white/90 border border-white/40 shadow-2xl shadow-stone-900/10 rounded-full p-2 pl-8 flex items-center justify-between transition-all hover:bg-white/95">
            <div className="hidden md:flex items-center gap-10 divide-x divide-stone-200/50 w-full">
                {/* Check In */}
                <div className="flex flex-col cursor-pointer group flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:calendar-add-linear" class="text-stone-400 group-hover:text-[#CFA866]" width="14"></iconify-icon>
                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold group-hover:text-[#CFA866] transition-colors">Arrival</span>
                    </div>
                    <span className="text-sm font-medium text-stone-800 font-serif italic">Oct 24, 2023</span>
                </div>
                {/* Check Out */}
                <div className="flex flex-col pl-10 cursor-pointer group flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:calendar-check-linear" class="text-stone-400 group-hover:text-[#CFA866]" width="14"></iconify-icon>
                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold group-hover:text-[#CFA866] transition-colors">Departure</span>
                    </div>
                    <span className="text-sm font-medium text-stone-800 font-serif italic">Oct 29, 2023</span>
                </div>
                {/* Guests */}
                <div className="flex flex-col pl-10 cursor-pointer group flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:users-group-rounded-linear" class="text-stone-400 group-hover:text-[#CFA866]" width="14"></iconify-icon>
                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold group-hover:text-[#CFA866] transition-colors">Guests</span>
                    </div>
                    <span className="text-sm font-medium text-stone-800 font-serif italic">2 Adults, 0 Children</span>
                </div>
            </div>
            
            {/* Mobile Simple View */}
            <div className="flex md:hidden flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-[#CFA866] font-bold">Book Your Stay</span>
                <span className="text-xs font-serif italic text-stone-600">Best rates guaranteed</span>
            </div>

            <button className="bg-stone-900 text-[#FDFBF7] rounded-full h-12 w-12 md:w-auto md:px-8 md:py-3 text-sm font-medium tracking-wide uppercase hover:bg-[#CFA866] hover:text-white transition-all duration-500 shadow-lg flex items-center justify-center gap-2 shrink-0 ml-4">
                <span className="hidden md:inline">Check Availability</span>
                {/* @ts-ignore */}
                <iconify-icon icon="solar:arrow-right-linear" width="20" height="20"></iconify-icon>
            </button>
        </div>
    </div>
  );
}
