

export default function Footer() {
  return (
    <footer className="bg-[#F9F7F2] pt-24 pb-12 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-1">
                <div className="mb-6 text-[#CFA866]">
                     {/* @ts-ignore */}
                     <iconify-icon icon="solar:mountains-linear" width="48" height="48"></iconify-icon>
                </div>
                <h4 className="text-[#CFA866] text-2xl font-bold tracking-tight uppercase mb-6">Mountain Vista</h4>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                    An sanctuary designed for the soul, built of stone and silence, reaching for the sky.
                </p>
            </div>

            <div className="md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h5 className="text-stone-900 font-medium uppercase tracking-widest text-xs">Contact</h5>
                        <div className="flex items-start gap-3 text-stone-600">
                            {/* @ts-ignore */}
                            <iconify-icon icon="solar:phone-calling-linear" width="18" class="mt-1"></iconify-icon>
                            <div className="flex flex-col text-sm">
                                <a href="tel:9021000200" className="hover:text-[#CFA866] transition-colors">902 1000 200</a>
                                <a href="tel:9391000200" className="hover:text-[#CFA866] transition-colors">939 1000 200</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-stone-600">
                            {/* @ts-ignore */}
                            <iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                            <a href="mailto:mountainvistaresorts@gmail.com" className="text-sm hover:text-[#CFA866] transition-colors break-all">
                                concierge@mountainvista.com
                            </a>
                        </div>
                        <div className="flex items-start gap-3 text-stone-600">
                            {/* @ts-ignore */}
                            <iconify-icon icon="solar:map-point-linear" width="18" class="mt-1"></iconify-icon>
                            <span className="text-sm">Alpine Route 4, Aspen Highlands,<br/>Colorado 81611</span>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <h5 className="text-stone-900 font-medium uppercase tracking-widest text-xs">Menu</h5>
                        <ul className="space-y-2 text-sm text-stone-500">
                            <li><a href="#" className="hover:text-[#CFA866] transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-[#CFA866] transition-colors">Suites & Villas</a></li>
                            <li><a href="#" className="hover:text-[#CFA866] transition-colors">Gastronomy</a></li>
                            <li><a href="#" className="hover:text-[#CFA866] transition-colors">Wellness</a></li>
                            <li><a href="#" className="hover:text-[#CFA866] transition-colors">Sustainability</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="md:col-span-1 flex flex-col items-start md:items-end justify-between">
                <div className="flex gap-4">
                    <a href="#" className="p-2 border border-stone-300 rounded-full text-stone-500 hover:bg-stone-900 hover:border-stone-900 hover:text-white transition-all">
                        {/* @ts-ignore */}
                        <iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
                    </a>
                    <a href="#" className="p-2 border border-stone-300 rounded-full text-stone-500 hover:bg-stone-900 hover:border-stone-900 hover:text-white transition-all">
                        {/* @ts-ignore */}
                        <iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
                    </a>
                </div>
                <div className="mt-8 md:mt-0">
                     <button className="text-xs uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-[#CFA866] hover:text-[#CFA866] transition-colors">Newsletter Signup</button>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-400 text-[10px] tracking-widest uppercase">
            <p>© 2023 Mountain Vista Resorts.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-stone-600">Privacy</a>
                <a href="#" className="hover:text-stone-600">Terms</a>
                <a href="#" className="hover:text-stone-600">Credits</a>
            </div>
        </div>
    </footer>
  );
}
