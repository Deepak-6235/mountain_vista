import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

export default function Search() {
  const navigate = useNavigate();

  // Read URL parameters
  const params = new URLSearchParams(window.location.search);

  // Parse dates from URL or use defaults
  const parseDate = (dateStr: string | null) => {
    if (!dateStr) return null;
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      // Format is DD/MM/YYYY
      return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    }
    return null;
  };

  const urlCheckIn = parseDate(params.get('checkIn'));
  const urlCheckOut = parseDate(params.get('checkOut'));
  const urlAdults = parseInt(params.get('adults') || '2');
  const urlChildren = parseInt(params.get('children') || '0');

  const [checkInDate, setCheckInDate] = useState<Date | null>(urlCheckIn || new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(urlCheckOut || new Date(new Date().setDate(new Date().getDate() + 5)));
  const [adults, setAdults] = useState(urlAdults);
  const [childrenCount, setChildrenCount] = useState(urlChildren);
  const [nights, setNights] = useState(parseInt(params.get('nights') || '5'));
  const [rooms, setRooms] = useState(parseInt(params.get('rooms') || '1'));
  const [isNavigating, setIsNavigating] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsEntering(false), 50);
    return () => clearTimeout(timer);
  }, []);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen flex flex-col font-sans text-stone-600">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .content-enter {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .content-exit {
          opacity: 0;
          transform: translateY(-20px) scale(0.98);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>
      <Navbar />
      
      {/* Search Header - Steps - NO ANIMATION */}
      <div className="bg-white/95 backdrop-blur-sm text-white pt-28 pb-4 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto scrollbar-hide">
            <div className="flex bg-white rounded-t-lg mx-auto w-full max-w-4xl border border-stone-200">
                 <div className="flex-1 text-center py-3 bg-[#8c7456] relative">
                    <span className="uppercase text-xs font-bold tracking-widest text-white">Search</span>
                    <div className="absolute top-0 right-[-15px] w-0 h-0 border-t-[23px] border-t-transparent border-l-[15px] border-l-[#8c7456] border-b-[23px] border-b-transparent z-10"></div>
                 </div>
                 <div className="flex-1 text-center py-3 bg-white text-stone-400">
                    <span className="uppercase text-xs font-bold tracking-widest">Rooms& Rates</span>
                 </div>
                 <div className="flex-1 text-center py-3 bg-white text-stone-400 border-l border-stone-200">
                    <span className="uppercase text-xs font-bold tracking-widest">Review & Pay</span>
                 </div>
            </div>
        </div>
      </div>

      <div className={`flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-12 ${!isEntering ? 'content-enter' : 'opacity-0'} ${isExiting ? 'content-exit' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Controls */}
            <div className="lg:col-span-4 space-y-8">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Check-In</label>
                        <div className="bg-stone-100 p-3 rounded-md flex items-center justify-between text-sm font-medium text-stone-700">
                            {checkInDate ? format(checkInDate, 'dd/MM/yyyy') : 'Select'}
                            {/* @ts-ignore */}
                            <iconify-icon icon="solar:calendar-linear"></iconify-icon>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Check-Out</label>
                        <div className="bg-stone-100 p-3 rounded-md flex items-center justify-between text-sm font-medium text-stone-700">
                             {checkOutDate ? format(checkOutDate, 'dd/MM/yyyy') : 'Select'}
                             {/* @ts-ignore */}
                            <iconify-icon icon="solar:calendar-linear"></iconify-icon>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Nights</label>
                         <div className="flex items-center justify-center bg-stone-100 rounded-md overflow-hidden">
                            <button onClick={() => setNights(Math.max(1, nights - 1))} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">-</button>
                            <input type="number" value={nights} onChange={(e) => { const val = e.target.value; setNights(val === '' ? 1 : Math.max(1, parseInt(val) || 1)); }} className="w-16 text-center text-sm font-bold text-stone-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-3" min="1" />
                            <button onClick={() => setNights(nights + 1)} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">+</button>
                         </div>
                    </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Rooms</label>
                         <div className="flex items-center justify-center bg-stone-100 rounded-md overflow-hidden">
                            <button onClick={() => setRooms(Math.max(1, rooms - 1))} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">-</button>
                            <input type="number" value={rooms} onChange={(e) => { const val = e.target.value; setRooms(val === '' ? 1 : Math.max(1, parseInt(val) || 1)); }} className="w-16 text-center text-sm font-bold text-stone-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-3" min="1" />
                            <button onClick={() => setRooms(rooms + 1)} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">+</button>
                         </div>
                    </div>
                </div>

                 <div className="space-y-4 pt-4 border-t border-stone-200">
                    <div className="grid grid-cols-2 gap-3">
                         <div className="space-y-1">
                            <label className="text-[9px] uppercase tracking-widest text-stone-400">Adults<br/><span className="lowercase font-normal">(13 yrs & above)</span></label>
                            <div className="flex items-center justify-center bg-stone-100 rounded-md overflow-hidden">
                                <button onClick={() => setAdults(Math.max(1, adults - 1))} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">-</button>
                                <input type="number" value={adults} onChange={(e) => { const val = e.target.value; setAdults(val === '' ? 1 : Math.max(1, parseInt(val) || 1)); }} className="w-16 text-center text-sm font-bold text-stone-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-3" min="1" />
                                <button onClick={() => setAdults(adults + 1)} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">+</button>
                            </div>
                        </div>
                         <div className="space-y-1">
                            <label className="text-[9px] uppercase tracking-widest text-stone-400">Children<br/><span className="lowercase font-normal">(6-12 yrs)</span></label>
                            <div className="flex items-center justify-center bg-stone-100 rounded-md overflow-hidden">
                                <button onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">-</button>
                                <input type="number" value={childrenCount} onChange={(e) => { const val = e.target.value; setChildrenCount(val === '' ? 0 : Math.max(0, parseInt(val) || 0)); }} className="w-16 text-center text-sm font-bold text-stone-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-3" min="0" />
                                <button onClick={() => setChildrenCount(childrenCount + 1)} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">+</button>
                            </div>
                        </div>
                    </div>
                 </div>

                 <button
                    onClick={() => {
                      if (isNavigating) return;

                      setIsNavigating(true);
                      const params = new URLSearchParams({
                        checkIn: checkInDate ? format(checkInDate, 'dd/MM/yyyy') : '',
                        checkOut: checkOutDate ? format(checkOutDate, 'dd/MM/yyyy') : '',
                        nights: nights.toString(),
                        rooms: rooms.toString(),
                        adults: adults.toString(),
                        children: childrenCount.toString()
                      });

                      // Start exit animation
                      setTimeout(() => {
                        setIsExiting(true);
                      }, 300);

                      // Navigate after exit animation completes
                      setTimeout(() => {
                        navigate(`/rooms?${params.toString()}`);
                      }, 800);
                    }}
                    disabled={isNavigating}
                    className={`
                      w-full md:w-auto bg-[#8c7456] text-white uppercase tracking-widest text-xs font-bold
                      py-4 px-8 mt-4 shadow-lg relative overflow-hidden
                      transition-all duration-200 ease-out
                      ${isNavigating
                        ? 'scale-95 opacity-90 bg-[#786146]'
                        : 'hover:bg-[#786146] hover:shadow-xl hover:scale-[1.02] active:scale-95'
                      }
                      transform will-change-transform
                    `}
                 >
                    <span className={`
                      inline-block transition-all duration-200 ease-out
                      ${isNavigating ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}
                    `}>
                      Proceed
                    </span>
                    {isNavigating && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </span>
                    )}
                 </button>

                 <div className="mt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="border-2 border-stone-300 rounded-full w-24 h-24 flex flex-col items-center justify-center p-2 transform rotate-[-12deg] mx-auto opacity-50">
                        <span className="text-[8px] uppercase tracking-widest text-center font-bold">Best Price</span>
                        <span className="text-2xl font-serif font-bold">$</span>
                        <span className="text-[8px] uppercase tracking-widest text-center font-bold">Guarantee</span>
                    </div>
                 </div>
            </div>

            {/* Right Column - Calendar */}
            <div className="lg:col-span-8">
                 <div className="flex items-center justify-between mb-6">
                     <h3 className="text-stone-500 uppercase tracking-widest text-sm">Property Availability</h3>
                 </div>
                 
                 <div className="bg-white p-6 shadow-sm border border-stone-100 rounded-lg">
                    <style>{`
                        .react-datepicker { font-family: 'Manrope', sans-serif; border: none; width: 100%; display: flex; justify-content: center; }
                        .react-datepicker__month-container { width: 48%; float: none; display: inline-block; margin: 0 1%; }
                        .react-datepicker__header { background: #8c7456; border-radius: 0; padding: 10px 0; }
                        .react-datepicker__current-month { color: white; font-family: 'Manrope', sans-serif; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; }
                        .react-datepicker__day-name { color: white; opacity: 0.7; width: 2.5rem; }
                        .react-datepicker__day { width: 2.5rem; line-height: 2.5rem; margin: 0.2rem; border-radius: 0; color: #a8a29e; font-size: 0.85rem; }
                        .react-datepicker__day:hover { background-color: #f5f5f4; color: #8c7456; border-radius: 50%; }
                        .react-datepicker__day--selected, .react-datepicker__day--in-range { background-color: #8c7456 !important; color: white !important; border-radius: 0; }
                         .react-datepicker__day--keyboard-selected { background-color: transparent; color: inherit; }
                        .react-datepicker__navigation-icon::before { border-color: white; }
                        /* Custom price tag on date */
                        .date-price { display: block; font-size: 0.55rem; line-height: 1; margin-top: -4px; opacity: 0.8; }
                    `}</style>
                    <DatePicker
                        selected={checkInDate}
                        onChange={onChange}
                        startDate={checkInDate}
                        endDate={checkOutDate}
                        selectsRange
                        inline
                        monthsShown={2}
                        minDate={new Date()}
                        renderDayContents={(day) => {
                            return (
                                <div className="flex flex-col items-center justify-center h-full">
                                    <span>{day}</span>
                                </div>
                            )
                        }}
                    />
                    
                    <div className="mt-8 flex items-center justify-center gap-8 text-xs text-stone-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-[#8c7456]"></div>
                            <span>Selected</span>
                        </div>
                         <div className="flex items-center gap-2">
                             {/* @ts-ignore */}
                            <iconify-icon icon="solar:close-circle-bold" class="text-stone-300" width="16"></iconify-icon>
                            <span>Unavailable</span>
                        </div>
                    </div>
                     <p className="text-[10px] text-stone-400 mt-6 text-center max-w-2xl mx-auto">
                        ** Rates shown on the calendar are lowest possible rates (excluding taxes) which might not be available for your selected travel dates.
                    </p>
                 </div>
            </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
