import React from 'react';
import dining from '../../assets/images/dinning/dinning2.png';
import dining2 from '../../assets/images/dinning/dinning4.png';

export default function DiningSection() {
  return (
    <section id="dining" className="relative py-32 bg-[#1A1918] text-[#FDFBF7] overflow-hidden">
        {/* Background Grain/Texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                <div className="md:w-1/3 pt-12">
                     <span className="text-[#CFA866] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Gastronomy</span>
                    <h3 className="text-4xl md:text-6xl font-serif italic mb-6 leading-none">Foraged & <br/>Found</h3>
                    <p className="text-stone-400 font-light leading-relaxed mb-8 text-lg">
                        Executive Chef Marco Vitti interprets the mountain landscape through taste. Our tasting menu changes daily, dictated by what the forest yields and the season permits.
                    </p>
                    <ul className="space-y-4 text-sm tracking-wide text-stone-300 font-light mb-10">
                        <li className="flex items-center gap-4">
                            <span className="h-[1px] w-6 bg-stone-600"></span> 
                            The Summit Restaurant (Fine Dining)
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="h-[1px] w-6 bg-[#CFA866]"></span> 
                            Fireside Lounge (Cocktails & Small Plates)
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="h-[1px] w-6 bg-stone-600"></span> 
                            In-Residence Private Chef
                        </li>
                    </ul>
                    <a href="#" className="text-[#CFA866] uppercase text-xs tracking-[0.25em] border-b border-[#CFA866]/30 pb-2 hover:border-[#CFA866] transition-all">Reserve Table</a>
                </div>

                <div className="md:w-2/3 grid grid-cols-2 gap-4">
                    <div className="space-y-4 mt-12">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" className="w-full aspect-[3/4] object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-700" alt="Fine Dining Dish" />
                    
                        <p className="text-xs text-stone-500 uppercase tracking-widest text-right">Botanical Infusions</p>
                    </div>
                    <div className="space-y-4">
                        <img src={dining2} className="w-full aspect-[3/4] object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-700" alt="Cocktail" />
                        
                         <p className="text-xs text-stone-500 uppercase tracking-widest">Seasonal Plating</p>
                        </div>
                </div>
            </div>
        </div>
    </section>
  );
}
