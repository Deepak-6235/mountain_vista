import { useState } from 'react';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

export default function Search() {
  // Mock state for Search Page - in a real app, this would come from URL params or Context
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date(new Date().setDate(new Date().getDate() + 5)));
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const [nights, setNights] = useState(5);
  const [rooms, setRooms] = useState(1);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen flex flex-col font-sans text-stone-600">
      <Navbar />
      
      {/* Search Header - Steps */}
      <div className="bg-white text-white pt-32 pb-4 px-6 md:px-12 sticky top-0 z-40 border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto scrollbar-hide">
            <div className="flex bg-white rounded-t-lg mx-auto w-full max-w-4xl border border-stone-200">
                 <div className="flex-1 text-center py-3 bg-[#8c7456] relative">
                    <span className="uppercase text-xs font-bold tracking-widest text-white">Search</span>
                    <div className="absolute top-0 right-[-14px] w-0 h-0 border-t-[20px] border-t-transparent border-l-[14px] border-l-[#8c7456] border-b-[20px] border-b-transparent z-10"></div>
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

      <div className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-12">
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
                            <input type="number" value={nights} onChange={(e) => setNights(Math.max(1, Number(e.target.value) || 1))} className="w-16 text-center text-sm font-bold text-stone-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-3" min="1" />
                            <button onClick={() => setNights(nights + 1)} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">+</button>
                         </div>
                    </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Rooms</label>
                         <div className="flex items-center justify-center bg-stone-100 rounded-md overflow-hidden">
                            <button onClick={() => setRooms(Math.max(1, rooms - 1))} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">-</button>
                            <input type="number" value={rooms} onChange={(e) => setRooms(Math.max(1, Number(e.target.value) || 1))} className="w-16 text-center text-sm font-bold text-stone-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-3" min="1" />
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
                                <input type="number" value={adults} onChange={(e) => setAdults(Math.max(1, Number(e.target.value) || 1))} className="w-16 text-center text-sm font-bold text-stone-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-3" min="1" />
                                <button onClick={() => setAdults(adults + 1)} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">+</button>
                            </div>
                        </div>
                         <div className="space-y-1">
                            <label className="text-[9px] uppercase tracking-widest text-stone-400">Children<br/><span className="lowercase font-normal">(6-12 yrs)</span></label>
                            <div className="flex items-center justify-center bg-stone-100 rounded-md overflow-hidden">
                                <button onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">-</button>
                                <input type="number" value={childrenCount} onChange={(e) => setChildrenCount(Math.max(0, Number(e.target.value) || 0))} className="w-16 text-center text-sm font-bold text-stone-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-3" min="0" />
                                <button onClick={() => setChildrenCount(childrenCount + 1)} className="px-4 py-3 hover:bg-stone-200 text-stone-600 font-bold flex items-center justify-center">+</button>
                            </div>
                        </div>
                    </div>
                 </div>

                 <button className="w-full md:w-auto bg-[#8c7456] text-white uppercase tracking-widest text-xs font-bold py-4 px-8 mt-4 hover:bg-[#786146] transition-colors shadow-lg">
                    Proceed
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
