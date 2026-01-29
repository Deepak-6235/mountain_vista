import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import vistaSuite from '../../assets/images/bedroom/bedroom3.png';
import alpineLodge from '../../assets/images/livingarea/livingarea.png';
import gardenVilla from '../../assets/images/pool/pool.png';
import summitPenthouse from '../../assets/images/bedroom/bedroom4.png';
import forestRetreat from '../../assets/images/bedroom/bedroom5.png';
import azureSanctuary from '../../assets/images/pool/pool2.png';
import heritageSuite from '../../assets/images/bedroom/bedroom6.png';
import canyonView from '../../assets/images/bedroom/bedroom7.png';
import serenityLoft from '../../assets/images/bedroom/bedroom8.png';
import presidentialVilla from '../../assets/images/bedroom/bedroom9.png';

const rooms = [
  {
    id: 1,
    title: "The Vista Suite",
    description: "Panoramic Mountain View • 120m²",
    price: "$850",
    image: vistaSuite
  },
  {
    id: 2,
    title: "Alpine Lodge",
    description: "Private Terrace • Fireplace • 180m²",
    price: "$1,200",
    image: alpineLodge
  },
  {
    id: 3,
    title: "Garden Villa",
    description: "Secluded Garden • Plunge Pool • 200m²",
    price: "$1,500",
    image: gardenVilla
  },
  {
    id: 4,
    title: "Summit Penthouse",
    description: "Private Balcony • Sky Views • 220m²",
    price: "$2,100",
    image: summitPenthouse
  },
  {
    id: 5,
    title: "Forest Retreat",
    description: "Nature Immersion • Glass Walls • 90m²",
    price: "$750",
    image: forestRetreat
  },
  {
    id: 6,
    title: "Azure Sanctuary",
    description: "Infinity Pool • Sunset View • 300m²",
    price: "$3,200",
    image: azureSanctuary
  },
  {
    id: 7,
    title: "The Heritage Suite",
    description: "Colonial Architecture • 110m²",
    price: "$980",
    image: heritageSuite
  },
  {
    id: 8,
    title: "Canyon View Room",
    description: "Dramatic Scenery • Stone Bath • 65m²",
    price: "$600",
    image: canyonView
  },
  {
    id: 9,
    title: "Serenity Loft",
    description: "Minimalist Design • Meditation Space • 85m²",
    price: "$720",
    image: serenityLoft
  },
  {
    id: 10,
    title: "Presidential Villa",
    description: "Private Wing • Butler Service • 450m²",
    price: "$5,000",
    image: presidentialVilla
  }
];

export default function RoomsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.4;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-stone-100/50">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 px-4 md:px-12">
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">
            Curated <span className="font-serif italic text-stone-600">Sanctuaries</span>
          </h3>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button onClick={() => scroll('left')} className="p-4 border border-stone-200 rounded-full hover:border-[#CFA866] transition-colors"><ArrowLeft className="w-5 h-5" /></button>
            <button onClick={() => scroll('right')} className="p-4 border border-stone-200 rounded-full hover:border-[#CFA866] transition-colors"><ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div ref={scrollContainerRef} className="flex overflow-x-auto gap-8 pb-12 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide">
          {rooms.map((room) => (
            <div key={room.id} className="min-w-[85vw] md:min-w-[40vw] snap-center group relative cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6">
                <img 
                  src={room.image} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 will-change-transform" 
                  alt={room.title} 
                />
              </div>
              <div className="flex justify-between items-start border-t border-stone-200 pt-6">
                <div>
                  <h4 className="text-2xl font-serif italic text-stone-900 mb-1">{room.title}</h4>
                  <p className="text-stone-500 text-sm font-light">{room.description}</p>
                </div>
                <span className="text-lg font-medium text-[#CFA866]">{room.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
