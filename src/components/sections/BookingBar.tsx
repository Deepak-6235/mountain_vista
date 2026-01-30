import { useState, forwardRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function BookingBar() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date(new Date().setDate(new Date().getDate() + 5)));
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const ArrivalInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <div className="flex flex-col cursor-pointer group flex-1" onClick={onClick} ref={ref}>
        <div className="flex items-center gap-2 mb-1">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:calendar-add-linear" class="text-stone-400 group-hover:text-[#CFA866]" width="14"></iconify-icon>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold group-hover:text-[#CFA866] transition-colors">Arrival</span>
        </div>
        <span className="text-sm font-medium text-stone-800 font-serif italic">{value ? value : "Select Date"}</span>
    </div>
  ));

  const DepartureInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <div className="flex flex-col pl-10 cursor-pointer group flex-1" onClick={onClick} ref={ref}>
        <div className="flex items-center gap-2 mb-1">
            {/* @ts-ignore */}
            <iconify-icon icon="solar:calendar-check-linear" class="text-stone-400 group-hover:text-[#CFA866]" width="14"></iconify-icon>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold group-hover:text-[#CFA866] transition-colors">Departure</span>
        </div>
        <span className="text-sm font-medium text-stone-800 font-serif italic">{value ? value : "Select Date"}</span>
    </div>
  ));

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl">
        <div className="backdrop-blur-xl bg-white/90 border border-white/40 shadow-2xl shadow-stone-900/10 rounded-full p-2 pl-8 flex items-center justify-between transition-all hover:bg-white/95 relative">
            <div className="hidden md:flex items-center gap-10 divide-x divide-stone-200/50 w-full">
                {/* Check In */}
                <div className="flex-1">
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date: Date | null) => setCheckInDate(date)}
                        dateFormat="MMM dd, yyyy"
                        customInput={<ArrivalInput />}
                        minDate={new Date()}
                    />
                </div>

                {/* Check Out */}
                <div className="flex-1">
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date: Date | null) => setCheckOutDate(date)}
                        dateFormat="MMM dd, yyyy"
                        customInput={<DepartureInput />}
                        minDate={checkInDate || new Date()}
                    />
                </div>

                {/* Guests */}
                <div className="flex flex-col pl-10 cursor-pointer group flex-1 relative">
                    <div className="flex items-center gap-2 mb-1" onClick={() => setIsGuestOpen(!isGuestOpen)}>
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:users-group-rounded-linear" class="text-stone-400 group-hover:text-[#CFA866]" width="14"></iconify-icon>
                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold group-hover:text-[#CFA866] transition-colors">Guests</span>
                    </div>
                    <span className="text-sm font-medium text-stone-800 font-serif italic" onClick={() => setIsGuestOpen(!isGuestOpen)}>
                        {adults} Adults, {childrenCount} Children
                    </span>
                    
                    {isGuestOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsGuestOpen(false)}></div>
                            <div className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-xl border border-stone-100 p-4 w-64 z-20">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-stone-800 font-medium font-serif">Adults</span>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#CFA866] hover:text-[#CFA866] transition-colors">-</button>
                                        <span className="w-4 text-center text-sm">{adults}</span>
                                        <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#CFA866] hover:text-[#CFA866] transition-colors">+</button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-stone-800 font-medium font-serif">Children</span>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#CFA866] hover:text-[#CFA866] transition-colors">-</button>
                                        <span className="w-4 text-center text-sm">{childrenCount}</span>
                                        <button onClick={() => setChildrenCount(childrenCount + 1)} className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#CFA866] hover:text-[#CFA866] transition-colors">+</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            
            {/* Mobile Simple View */}
            <div className="flex md:hidden flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-[#CFA866] font-bold">Book Your Stay</span>
                <span className="text-xs font-serif italic text-stone-600">Best rates guaranteed</span>
            </div>

            <button 
              onClick={() => {
                const params = new URLSearchParams({
                  checkIn: checkInDate ? checkInDate.toLocaleDateString('en-GB').replace(/\//g, '/') : '',
                  checkOut: checkOutDate ? checkOutDate.toLocaleDateString('en-GB').replace(/\//g, '/') : '',
                  adults: adults.toString(),
                  children: childrenCount.toString()
                });
                window.location.href = `/search?${params.toString()}`;
              }}
              className="bg-stone-900 text-[#FDFBF7] rounded-full h-12 w-12 md:w-auto md:px-8 md:py-3 text-sm font-medium tracking-wide uppercase hover:bg-[#CFA866] hover:text-white transition-all duration-500 shadow-lg flex items-center justify-center gap-2 shrink-0 ml-4 z-20"
            >
                <span className="hidden md:inline">Check Availability</span>
                {/* @ts-ignore */}
                <iconify-icon icon="solar:arrow-right-linear" width="20" height="20"></iconify-icon>
            </button>
        </div>
    </div>
  );
}
