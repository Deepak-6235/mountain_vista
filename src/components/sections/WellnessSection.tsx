import pool from '../../assets/images/pool/pool.png';

export default function WellnessSection() {
  return (
    <section id="wellness" className="py-32 px-6 md:px-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[1px] w-8 bg-[#CFA866]"></div>
                        <span className="text-[#CFA866] text-xs font-semibold tracking-[0.2em] uppercase">Pool</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-8 leading-tight">
                        Reconnect with <br/><span className="font-serif italic text-stone-500">The Elemental Self</span>
                    </h3>
                    <p className="text-stone-500 text-lg font-light leading-relaxed mb-10">
                        Our spa is carved into the mountainside, utilizing local minerals, glacial water, and high-altitude botanicals. Experience treatments designed not just to relax, but to ground your spirit in the earth beneath you.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-stone-50 text-[#CFA866]">
                                {/* @ts-ignore */}
                                <iconify-icon icon="solar:bath-linear" width="24" height="24"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="text-stone-900 font-medium mb-1">Thermal Baths</h4>
                                <p className="text-sm text-stone-500">Outdoor heated pools with panoramic views.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-stone-50 text-[#CFA866]">
                                {/* @ts-ignore */}
                                <iconify-icon icon="solar:leaf-linear" width="24" height="24"></iconify-icon>
                            </div>
                            <div>
                                <h4 className="text-stone-900 font-medium mb-1">Botanical Therapy</h4>
                                <p className="text-sm text-stone-500">Treatments using alpine herbs and flowers.</p>
                            </div>
                        </div>
                    </div>

                    <button className="group inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase border border-stone-200 px-8 py-4 rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300">
                        <span>View Spa Menu</span>
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:arrow-right-linear" width="16" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                    </button>
                </div>

                {/* Image Composition */}
                <div className="order-1 lg:order-2 relative">
                    <div className="aspect-[4/5] rounded-t-full overflow-hidden relative">
                        <img src={pool} alt="Spa Treatment" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
                    </div>
                    {/* Floating Badge */}
                    
                </div>
            </div>
        </div>
    </section>
  );
}
