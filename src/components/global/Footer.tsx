import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F9F7F2] pt-24 pb-12 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1">
          {/* Logo */}
          <div className="mb-6">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" className="text-[#CFA866]">
              <path d="M20 20L50 55L80 20V70H70V35L50 60L30 35V70H20V20Z" fill="currentColor"></path>
            </svg>
          </div>
          <h4 className="text-[#CFA866] text-2xl font-bold tracking-tight uppercase mb-6">Mountain Vista</h4>
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 stroke-stone-900 mt-1" />
                <div className="flex flex-col text-lg font-medium text-stone-800">
                  <span><a href="tel:902 1000 200">902 1000 200</a></span>
                  <span><a href="tel:939 1000 200">939 1000 200</a></span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 stroke-stone-900" />
                <a href="mailto:mountainvistaresorts@gmail.com" className="text-lg font-medium text-stone-800 hover:text-[#CFA866] transition-colors break-all">
                  mountainvistaresorts@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col items-start md:items-end justify-between">
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-stone-300 rounded-full hover:bg-stone-900 hover:border-stone-900 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="p-2 border border-stone-300 rounded-full hover:bg-stone-900 hover:border-stone-900 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 border border-stone-300 rounded-full hover:bg-stone-900 hover:border-stone-900 hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-400 text-xs tracking-widest uppercase">
        <p>© 2023 Mountain Vista Resorts. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-stone-600">Privacy</a>
          <a href="#" className="hover:text-stone-600">Terms</a>
          <a href="#" className="hover:text-stone-600">Credits</a>
        </div>
      </div>
    </footer>
  );
}
