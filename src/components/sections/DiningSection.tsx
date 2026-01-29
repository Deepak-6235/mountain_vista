export default function DiningSection() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1519608487953-e999c9cdc291?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover object-center" style={{ transform: 'scale(1.1)' }} alt="Lobby" />
        <div className="absolute inset-0 bg-stone-900/30"></div>
      </div>
      <div className="relative z-10 text-center text-white p-8 border border-white/20 backdrop-blur-sm bg-white/5 max-w-2xl">
        <h3 className="text-4xl md:text-6xl font-serif italic mb-6">Culinary Altitude</h3>
        <p className="text-lg md:text-xl font-light mb-8 opacity-90">
          Experience gastronomy elevated. Local ingredients, world-class techniques, and a view that seasons every bite.
        </p>
        <button className="bg-white text-stone-900 px-8 py-3 rounded-sm text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#CFA866] hover:text-white transition-colors">
          Reserve a Table
        </button>
      </div>
    </section>
  );
}
