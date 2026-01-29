export default function HeroSection() {
  return (
    <header className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img src="./assets/images/top/topview12.png" alt="Mountain Landscape" className="w-full h-full object-cover scale-105 animate-float opacity-90 brightness-[0.6]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FDFBF7]"></div>
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        {/* Animated SVG Logo */}
        <div className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards] delay-300" style={{ animationFillMode: 'forwards', animationName: 'fadeUp' }}>
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="text-[#CFA866]">
            <path d="M20 20L50 55L80 20V70H70V35L50 60L30 35V70H20V20Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <h1 className="text-[#CFA866] text-5xl md:text-8xl font-medium tracking-tight uppercase mb-6 leading-none mix-blend-overlay">
          Mountain Vista
        </h1>
        <p className="text-white/90 font-serif text-2xl md:text-3xl font-light italic tracking-wide max-w-lg mx-auto leading-relaxed">
          Where the horizon meets heritage.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs tracking-[0.2em] uppercase">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </header>
  );
}
