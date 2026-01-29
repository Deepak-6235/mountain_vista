import React from 'react';

export default function ExperiencesSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
                <span className="text-[#CFA866] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Experiences</span>
                <h3 className="text-4xl md:text-5xl text-stone-900 font-light tracking-tight mb-6">Beyond the <span className="font-serif italic text-stone-500">Walls</span></h3>
                <p className="text-stone-500 font-light">The mountain is not just a view; it is a playground. Curated excursions for the brave and the curious.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Exp Card 1 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-sm mb-6 aspect-[4/3] relative">
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Hiking" />
                        <div className="absolute bottom-4 left-4 z-20">
                            {/* @ts-ignore */}
                            <iconify-icon icon="solar:hiking-minimalistic-linear" className="text-white bg-white/20 backdrop-blur-md p-2 rounded-full" width="24"></iconify-icon>
                        </div>
                    </div>
                    <h4 className="text-xl font-medium text-stone-900 mb-2 group-hover:text-[#CFA866] transition-colors">Guided Alpinism</h4>
                    <p className="text-sm text-stone-500 leading-relaxed border-l border-stone-300 pl-4">Traverse hidden ridges with expert guides. Equipment and gourmet packed lunch included.</p>
                </div>

                {/* Exp Card 2 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-sm mb-6 aspect-[4/3] relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1518115629910-449e7b26c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Skiing" />
                        <div className="absolute bottom-4 left-4 z-20">
                            {/* @ts-ignore */}
                            <iconify-icon icon="solar:snowflakes-linear" className="text-white bg-white/20 backdrop-blur-md p-2 rounded-full" width="24"></iconify-icon>
                        </div>
                    </div>
                    <h4 className="text-xl font-medium text-stone-900 mb-2 group-hover:text-[#CFA866] transition-colors">Private Heli-Skiing</h4>
                    <p className="text-sm text-stone-500 leading-relaxed border-l border-stone-300 pl-4">Access untouched powder. A private helicopter departs directly from the resort grounds.</p>
                </div>

                {/* Exp Card 3 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-sm mb-6 aspect-[4/3] relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1470246973918-29a53295c561?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Stargazing" />
                        <div className="absolute bottom-4 left-4 z-20">
                            {/* @ts-ignore */}
                            <iconify-icon icon="solar:telescope-linear" className="text-white bg-white/20 backdrop-blur-md p-2 rounded-full" width="24"></iconify-icon>
                        </div>
                    </div>
                    <h4 className="text-xl font-medium text-stone-900 mb-2 group-hover:text-[#CFA866] transition-colors">Midnight Astronomy</h4>
                    <p className="text-sm text-stone-500 leading-relaxed border-l border-stone-300 pl-4">Zero light pollution. Experience the milky way with our resident astronomer.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
