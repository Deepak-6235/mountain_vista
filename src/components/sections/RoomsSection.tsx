import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function RoomsSection() {
  return (
    <section className="py-24 bg-stone-100/50">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 px-4 md:px-12">
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">
            Curated <span className="font-serif italic text-stone-600">Sanctuaries</span>
          </h3>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="p-4 border border-stone-200 rounded-full hover:border-[#CFA866] transition-colors"><ArrowLeft className="w-5 h-5" /></button>
            <button className="p-4 border border-stone-200 rounded-full hover:border-[#CFA866] transition-colors"><ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-8 pb-12 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide">
          
          {/* Card 1 */}
          <div className="min-w-[85vw] md:min-w-[40vw] snap-center group relative cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6">
              <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" alt="Vista Suite" />
            </div>
            <div className="flex justify-between items-start border-t border-stone-200 pt-6">
              <div>
                <h4 className="text-2xl font-serif italic text-stone-900 mb-1">The Vista Suite</h4>
                <p className="text-stone-500 text-sm font-light">Panoramic Mountain View • 120m²</p>
              </div>
              <span className="text-lg font-medium text-[#CFA866]">$850</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[85vw] md:min-w-[40vw] snap-center group relative cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" alt="Alpine Lodge" />
            </div>
            <div className="flex justify-between items-start border-t border-stone-200 pt-6">
              <div>
                <h4 className="text-2xl font-serif italic text-stone-900 mb-1">Alpine Lodge</h4>
                <p className="text-stone-500 text-sm font-light">Private Terrace • Fireplace • 180m²</p>
              </div>
              <span className="text-lg font-medium text-[#CFA866]">$1,200</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[85vw] md:min-w-[40vw] snap-center group relative cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6">
              <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" alt="Garden Villa" />
            </div>
            <div className="flex justify-between items-start border-t border-stone-200 pt-6">
              <div>
                <h4 className="text-2xl font-serif italic text-stone-900 mb-1">Garden Villa</h4>
                <p className="text-stone-500 text-sm font-light">Secluded Garden • Plunge Pool • 200m²</p>
              </div>
              <span className="text-lg font-medium text-[#CFA866]">$1,500</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
