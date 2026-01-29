
import bedroom from '../../assets/images/bedroom/bedroom.png';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-32 px-6 md:px-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 md:col-start-2 z-10">
                    <span className="text-[#CFA866] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block flex items-center gap-2">
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:leaf-linear"></iconify-icon> The Philosophy
                    </span>
                    <h2 className="text-stone-900 text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                        Architectural <br/>
                        <span className="font-serif italic text-5xl md:text-7xl ml-8 text-stone-800">Silence.</span>
                    </h2>
                    <p className="text-stone-500 text-lg md:text-xl leading-relaxed font-light mb-8 max-w-md">
                        We believe luxury is the absence of noise. Every angle, texture, and vista is curated to disconnect you from the world and reconnect you with the elemental.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-300 pb-1 hover:border-[#CFA866] hover:text-[#CFA866] transition-all duration-300 text-sm uppercase tracking-widest">
                        Read Our Story
                    </a>
                </div>
                <div className="md:col-span-6 relative">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
                        <img src={bedroom} alt="Interior Design" className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
