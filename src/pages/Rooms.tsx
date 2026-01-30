import { useState } from 'react';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';

// Import bedroom images
import bedroom1 from '../assets/images/bedroom/bedroom.png';
import bedroom2 from '../assets/images/bedroom/bedroom2.png';
import bedroom3 from '../assets/images/bedroom/bedroom3.png';
import bedroom4 from '../assets/images/bedroom/bedroom4.png';
import bedroom5 from '../assets/images/bedroom/bedroom5.png';

const rooms = [
  {
    id: 1,
    name: 'Studio Room',
    image: bedroom1,
    price: 11800,
    description: 'Cozy studio with modern amenities'
  },
  {
    id: 2,
    name: 'Suite Room',
    image: bedroom2,
    price: 14160,
    description: 'Spacious suite with premium facilities'
  },
  {
    id: 3,
    name: 'Premium Villa',
    image: bedroom3,
    price: 17110,
    description: 'Luxurious villa with stunning views'
  },
  {
    id: 4,
    name: 'Jacuzzi Villa',
    image: bedroom4,
    price: 25370,
    description: 'Private villa with jacuzzi and garden'
  },
  {
    id: 5,
    name: 'Pool Villa',
    image: bedroom5,
    price: 28910,
    description: 'Exclusive villa with private pool'
  }
];

export default function Rooms() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [mealPlanQuantities, setMealPlanQuantities] = useState<{[key: string]: number}>({
    'room-only': 1,
    'breakfast': 1,
    'breakfast-lunch-dinner': 1,
    'breakfast-lunch-and-dinner': 1
  });

  // Read booking data from URL parameters
  const params = new URLSearchParams(window.location.search);
  const checkIn = params.get('checkIn') || '01/30/2026';
  const checkOut = params.get('checkOut') || '01/31/2026';
  const nights = params.get('nights') || '1';
  const roomsCount = parseInt(params.get('rooms') || '1');
  const adults = parseInt(params.get('adults') || '1');
  const children = parseInt(params.get('children') || '0');

  const mealPlans = [
    { id: 'room-only', name: 'ROOM ONLY', basePrice: 0 },
    { id: 'breakfast', name: 'BREAKFAST', basePrice: 2614 },
    { id: 'breakfast-lunch-dinner', name: 'BREAKFAST AND LUNCH/DINNER', basePrice: 4012 },
    { id: 'breakfast-lunch-and-dinner', name: 'BREAKFAST,LUNCH AND DINNER', basePrice: 4720 }
  ];

  const handleReserve = (room: typeof rooms[0]) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  const handleBookMealPlan = (plan: typeof mealPlans[0]) => {
    if (!selectedRoom) return;
    
    // Pass all booking data to review-pay page
    const reviewParams = new URLSearchParams({
      checkIn,
      checkOut,
      nights,
      rooms: roomsCount.toString(),
      adults: adults.toString(),
      children: children.toString(),
      roomId: selectedRoom.id.toString(),
      roomName: selectedRoom.name,
      roomPrice: selectedRoom.price.toString(),
      mealPlanId: plan.id,
      mealPlanName: plan.name,
      mealPlanPrice: plan.basePrice.toString()
    });
    window.location.href = `/review-pay?${reviewParams.toString()}`;
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen flex flex-col font-sans text-stone-600">
      <Navbar />
      
      {/* Steps Header */}
      <div className="bg-white/95 backdrop-blur-sm text-white pt-28 pb-4 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto scrollbar-hide">
            <div className="flex bg-white rounded-t-lg mx-auto w-full max-w-4xl border border-stone-200">
                 <div className="flex-1 text-center py-3 bg-white text-stone-400 relative">
                    <span className="uppercase text-xs font-bold tracking-widest">Search</span>
                 </div>
                 <div className="flex-1 text-center py-3 bg-[#8c7456] text-white relative">
                    <div className="absolute top-0 left-[-15px] w-0 h-0 border-t-[23px] border-t-transparent border-r-[15px] border-r-[#8c7456] border-b-[23px] border-b-transparent z-10"></div>
                    <span className="uppercase text-xs font-bold tracking-widest">Rooms& Rates</span>
                    <div className="absolute top-0 right-[-15px] w-0 h-0 border-t-[23px] border-t-transparent border-l-[15px] border-l-[#8c7456] border-b-[23px] border-b-transparent z-10"></div>
                 </div>
                 <div className="flex-1 text-center py-3 bg-white text-stone-400">
                    <span className="uppercase text-xs font-bold tracking-widest">Review & Pay</span>
                 </div>
            </div>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="bg-stone-50 border-b border-stone-200 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">Check-In</span>
              <span className="font-medium text-stone-700">{checkIn}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">Check-Out</span>
              <span className="font-medium text-stone-700">{checkOut}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">No. of Rooms/Villa : Total Pax</span>
              <span className="font-medium text-stone-700">{roomsCount} ROOMS/VILLA : {adults} ADULTS + {children} CHILDREN</span>
            </div>
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

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-8">
        {/* Header with View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[#8c7456] uppercase tracking-widest text-sm font-bold mb-2">Rooms/Villa 1</h2>
            <p className="text-stone-500 text-xs uppercase tracking-widest">Select Rooms/Villa Category, Package & Add Ons</p>
          </div>
          <div className="flex items-center gap-1 bg-stone-100 border border-stone-200 rounded-lg p-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-[#8c7456] text-white shadow-sm' : 'text-stone-500 hover:bg-white hover:text-[#8c7456]'}`}
              title="Grid View"
            >
              {/* @ts-ignore */}
              <iconify-icon icon="solar:widget-4-bold" width="18"></iconify-icon>
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-[#8c7456] text-white shadow-sm' : 'text-stone-500 hover:bg-white hover:text-[#8c7456]'}`}
              title="List View"
            >
              {/* @ts-ignore */}
              <iconify-icon icon="solar:hamburger-menu-bold" width="18"></iconify-icon>
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif text-stone-700 tracking-wide">ROOMS/VILLA</h3>
          <div className="w-32 h-px bg-[#8c7456] mx-auto mt-2"></div>
        </div>

        {/* Room Cards Grid */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {rooms.map((room) => (
            <div key={room.id} className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h4 className="text-stone-700 font-medium text-lg mb-2">{room.name}</h4>
                <p className="text-stone-500 text-sm mb-4">{room.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 block">From</span>
                    <span className="text-[#8c7456] font-bold text-xl">₹ {room.price.toLocaleString()}</span>
                    <span className="text-stone-400 text-xs ml-1">per night</span>
                    <p className="text-[9px] text-stone-400 mt-1">*incl. taxes</p>
                  </div>
                  <button 
                    onClick={() => handleReserve(room)}
                    className="bg-[#8c7456] text-white uppercase tracking-widest text-xs font-bold py-3 px-6 hover:bg-[#786146] transition-colors"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Booking Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-stone-200 p-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-stone-700">{selectedRoom.name}</h3>
              <button onClick={closeModal} className="text-stone-400 hover:text-stone-600">
                {/* @ts-ignore */}
                <iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Room Image */}
                <div>
                  <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full rounded-lg" />
                </div>

                {/* Meal Plans */}
                <div>
                  <h4 className="text-stone-600 uppercase tracking-widest text-sm font-bold mb-4">Best Available Rate</h4>
                  <div className="space-y-3">
                    {mealPlans.map((plan) => {
                      const totalPrice = selectedRoom.price + plan.basePrice;
                      return (
                        <div key={plan.id} className="flex items-center justify-between py-3 border-b border-stone-200">
                          <div className="flex-1">
                            <span className="text-stone-600 text-sm font-medium">{plan.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[#8c7456] font-bold">₹ {totalPrice.toLocaleString()}</span>
                            <button 
                              onClick={() => handleBookMealPlan(plan)}
                              className="bg-[#8c7456] text-white text-xs font-bold px-4 py-2 hover:bg-[#786146] transition-colors"
                            >
                              BOOK
                            </button>

                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-xs text-stone-400 mt-4">*incl taxes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
