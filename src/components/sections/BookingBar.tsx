import { ArrowRight } from 'lucide-react';

export default function BookingBar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl">
      <div className="backdrop-blur-xl bg-white/80 border border-white/20 shadow-2xl shadow-stone-900/10 rounded-full p-2 pl-6 flex items-center justify-between transition-all hover:bg-white/95">
        <div className="hidden md:flex items-center gap-8 divide-x divide-stone-200/50">
          <div className="flex flex-col cursor-pointer group">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium group-hover:text-[#CFA866] transition-colors">Check In</span>
            <span className="text-sm font-medium text-stone-800">Oct 24, 2023</span>
          </div>
          <div className="flex flex-col pl-8 cursor-pointer group">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium group-hover:text-[#CFA866] transition-colors">Check Out</span>
            <span className="text-sm font-medium text-stone-800">Oct 29, 2023</span>
          </div>
          <div className="flex flex-col pl-8 cursor-pointer group">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium group-hover:text-[#CFA866] transition-colors">Guests</span>
            <span className="text-sm font-medium text-stone-800">2 Adults</span>
          </div>
        </div>
        
        {/* Mobile Simple View */}
        <div className="flex md:hidden flex-col">
          <span className="text-[10px] uppercase tracking-widest text-[#CFA866] font-medium">Book Your Stay</span>
          <span className="text-sm font-medium text-stone-800">Select Dates</span>
        </div>

        <button className="bg-stone-900 text-[#FDFBF7] rounded-full px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-[#CFA866] hover:text-white transition-all duration-500 shadow-lg flex items-center gap-2">
          <span>Search</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
