import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';

export default function ReviewPay() {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [isEntering, setIsEntering] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsEntering(false), 50);
    return () => clearTimeout(timer);
  }, []);

  // Read booking data from URL parameters
  const params = new URLSearchParams(window.location.search);
  const checkIn = params.get('checkIn') || '30/01/2026';
  const checkOut = params.get('checkOut') || '31/01/2026';
  const nights = params.get('nights') || '1';
  const roomsCount = parseInt(params.get('rooms') || '1');
  const adults = parseInt(params.get('adults') || '1');
  const children = parseInt(params.get('children') || '0');
  const roomName = params.get('roomName') || 'STUDIO ROOM';
  const roomPrice = parseInt(params.get('roomPrice') || '11800');
  const mealPlanName = params.get('mealPlanName') || 'ROOM ONLY';
  const mealPlanPrice = parseInt(params.get('mealPlanPrice') || '0');
  
  // Calculate totals
  const subtotal = roomPrice + mealPlanPrice;
  const taxes = Math.round(subtotal * 0.18); // 18% tax
  const totalCost = subtotal + taxes;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayNow = () => {
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    // Handle payment logic
    console.log('Processing payment...', formData);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen flex flex-col font-sans text-stone-600">
      <style>{`
        @keyframes fadeInSlide {
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
          animation: fadeInSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .content-exit {
          opacity: 0;
          transform: translateY(-20px) scale(0.98);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>
      <Navbar />
      
      {/* Steps Header */}
      <div className="bg-white/95 backdrop-blur-sm text-white pt-28 pb-4 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto scrollbar-hide">
            <div className="flex bg-white rounded-t-lg mx-auto w-full max-w-4xl border border-stone-200">
                 <div className="flex-1 text-center py-3 bg-white text-stone-400">
                    <span className="uppercase text-xs font-bold tracking-widest">Search</span>
                 </div>
                 <div className="flex-1 text-center py-3 bg-white text-stone-400">
                    <span className="uppercase text-xs font-bold tracking-widest">Rooms& Rates</span>
                 </div>
                 <div className="flex-1 text-center py-3 bg-[#8c7456] text-white relative">
                    <div className="absolute top-0 left-[-15px] w-0 h-0 border-t-[23px] border-t-transparent border-r-[15px] border-r-[#8c7456] border-b-[23px] border-b-transparent z-10"></div>
                    <span className="uppercase text-xs font-bold tracking-widest">Review & Pay</span>
                 </div>
            </div>
        </div>
      </div>

      {/* Booking Summary Header */}
      <div className="bg-stone-50 border-b border-stone-200 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">Check-In</span>
              <span className="font-medium text-stone-700">{checkIn}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">Check-Out</span>
              <span className="font-medium text-stone-700">{checkOut}</span>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">No. of Rooms/Villa : Total Pax</span>
                <span className="font-medium text-stone-700">1 ROOMS/VILLA : {adults} ADULTS + {children} CHILDREN</span>
              </div>
              <button 
                onClick={() => {
                  const searchParams = new URLSearchParams({
                    checkIn,
                    checkOut,
                    nights,
                    rooms: roomsCount.toString(),
                    adults: adults.toString(),
                    children: children.toString()
                  });
                  window.location.href = `/search?${searchParams.toString()}`;
                }}
                className="text-[#8c7456] text-xs uppercase tracking-widest font-bold flex items-center gap-2"
              >
                {/* @ts-ignore */}
                <iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
                Edit
              </button>
            </div>
          </div>
          
          <div className="bg-white border border-stone-200 rounded-md p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#8c7456] text-white w-8 h-8 rounded flex items-center justify-center">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 block">Rooms/Villa 1</span>
                <span className="font-medium text-stone-700">{roomName} {mealPlanName}</span>
              </div>
            </div>
            <button 
              onClick={() => {
                const roomsParams = new URLSearchParams({
                  checkIn,
                  checkOut,
                  nights,
                  rooms: roomsCount.toString(),
                  adults: adults.toString(),
                  children: children.toString()
                });
                window.location.href = `/rooms?${roomsParams.toString()}`;
              }}
              className="text-[#8c7456] text-xs uppercase tracking-widest font-bold flex items-center gap-2"
            >
              {/* @ts-ignore */}
              <iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-8 ${!isEntering ? 'content-enter' : 'opacity-0'} ${isExiting ? 'content-exit' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Guest Details Form */}
          <div className="lg:col-span-2">
            <h2 className="text-[#8c7456] uppercase tracking-widest text-sm font-bold mb-6">Enter Guest Details</h2>
            
            <div className="bg-white border border-stone-200 rounded-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-stone-600 font-medium block mb-2">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8c7456]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-stone-600 font-medium block mb-2">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8c7456]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-stone-600 font-medium block mb-2">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8c7456]"
                  required
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-stone-600 font-medium block mb-2">
                  Phone<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center border border-stone-300 rounded px-3 py-2 bg-stone-50">
                    <span className="text-2xl mr-2">🇮🇳</span>
                    <span className="text-sm text-stone-600">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8c7456]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-stone-600 font-medium block mb-2">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="e.g. estimated time of arrival, airport pick up and drop off details (for add-on services / packages availed), and other preferences"
                  className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8c7456] h-24 resize-none"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-xs text-stone-600">
                  I AGREE WITH THE{' '}
                  <a href="#" className="text-blue-600 hover:underline">TERMS AND CONDITIONS</a>
                  {' '}AND{' '}
                  <a href="#" className="text-blue-600 hover:underline">REFUND & CANCELLATION POLICY</a>
                  {' '}FOR THIS BOOKING.
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <h2 className="text-[#8c7456] uppercase tracking-widest text-sm font-bold mb-6">Booking Summary</h2>
            
            <div className="bg-white border border-stone-200 rounded-lg p-6 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">CHECK-IN:</span>
                  <span className="font-medium">{checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">CHECK-OUT:</span>
                  <span className="font-medium">{checkOut}</span>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">ROOMS/VILLA 1:</span>
                  <span className="font-medium">{roomName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">GUESTS:</span>
                  <span className="font-medium">{adults} ADULT</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-stone-500">•</span>
                  <span className="font-medium text-right flex-1">{mealPlanName}</span>
                  <span className="font-bold text-[#8c7456] ml-2">₹ {subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="I HAVE A PROMO CODE"
                    className="flex-1 border border-stone-300 rounded px-3 py-2 text-xs uppercase focus:outline-none focus:border-[#8c7456]"
                  />
                  <button className="bg-[#8c7456] text-white px-4 py-2 text-xs font-bold uppercase hover:bg-[#786146] transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600 font-medium">SUBTOTAL</span>
                  <span className="font-bold">₹ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-stone-600 font-medium">TOTAL TAXES</span>
                    {/* @ts-ignore */}
                    <iconify-icon icon="solar:info-circle-linear" width="14" className="text-stone-400"></iconify-icon>
                  </div>
                  <span className="font-bold">₹ {taxes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg border-t border-stone-200 pt-3">
                  <span className="text-stone-700 font-bold">TOTAL COST</span>
                  <span className="font-bold text-[#8c7456]">₹ {totalCost.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={() => navigate('/rooms')}
            className="bg-stone-500 text-white px-8 py-3 text-sm font-bold uppercase hover:bg-stone-600 transition-colors flex items-center gap-2"
          >
            {/* @ts-ignore */}
            <iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
            Back
          </button>
          <button 
            onClick={handlePayNow}
            className="bg-[#8c7456] text-white px-8 py-3 text-sm font-bold uppercase hover:bg-[#786146] transition-colors"
          >
            Pay Now
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
