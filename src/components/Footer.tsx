import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, MapPin, Phone, Mail, Zap, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-zinc-900">
      {/* Newsletter Bar */}
      <div className="bg-[#AAFF00] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-['Barlow_Condensed'] font-bold text-2xl uppercase text-black tracking-wider">Get Exclusive Deals</p>
            <p className="text-black/70 text-sm font-['Barlow']">Subscribe for promo, new arrivals & sports tips</p>
          </div>
          <div className="flex w-full md:w-auto gap-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 px-4 py-3 bg-black text-white placeholder-zinc-500 text-sm font-['Barlow'] outline-none rounded-l-lg border border-black focus:border-black"
            />
            <button className="px-5 py-3 bg-black text-[#AAFF00] font-['Barlow_Condensed'] font-bold text-sm tracking-wider uppercase rounded-r-lg hover:bg-zinc-900 transition-colors flex items-center gap-2">
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-[#AAFF00] rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-black fill-black" />
              </div>
              <div>
                <span className="font-['Oswald'] font-bold text-lg text-white tracking-wider">ANUGERAH</span>
                <span className="block text-[10px] text-[#AAFF00] font-['Barlow_Condensed'] font-semibold tracking-[4px] uppercase leading-none">SPORTS</span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed font-['Barlow'] mb-6">
              Toko olahraga terpercaya di Malang sejak 1974. Menyediakan produk original dengan harga terbaik untuk komunitas olahraga Indonesia.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/anugerahsports" target="_blank" rel="noreferrer"
                className="w-9 h-9 bg-zinc-900 hover:bg-[#AAFF00] hover:text-black text-zinc-400 rounded-lg flex items-center justify-center transition-all duration-200">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                className="w-9 h-9 bg-zinc-900 hover:bg-[#AAFF00] hover:text-black text-zinc-400 rounded-lg flex items-center justify-center transition-all duration-200">
                <MessageCircle size={16} />
              </a>
              <a href="https://shopee.co.id/anugerahsports" target="_blank" rel="noreferrer"
                className="w-9 h-9 bg-zinc-900 hover:bg-[#AAFF00] hover:text-black text-zinc-400 rounded-lg flex items-center justify-center transition-all duration-200 font-['Barlow_Condensed'] font-bold text-xs">
                SP
              </a>
              <a href="https://tokopedia.com/anugerahsports" target="_blank" rel="noreferrer"
                className="w-9 h-9 bg-zinc-900 hover:bg-[#AAFF00] hover:text-black text-zinc-400 rounded-lg flex items-center justify-center transition-all duration-200 font-['Barlow_Condensed'] font-bold text-xs">
                TP
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[['Home', '/'], ['Products', '/products'], ['Brands', '/brands'], ['About Us', '/about'], ['Contact', '/contact']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-zinc-500 hover:text-[#AAFF00] text-sm font-['Barlow'] transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#AAFF00] transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-widest mb-5">Categories</h4>
            <ul className="space-y-3">
              {['Badminton', 'Futsal', 'Football', 'Running', 'Jerseys', 'Accessories'].map((cat) => (
                <li key={cat}>
                  <Link to={`/products?category=${cat}`} className="text-zinc-500 hover:text-[#AAFF00] text-sm font-['Barlow'] transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#AAFF00] transition-all duration-200" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#AAFF00] mt-0.5 shrink-0" />
                <span className="text-zinc-500 text-sm font-['Barlow'] leading-relaxed">Jl. Ahmad Yani No. 45, Malang, Jawa Timur 65145</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#AAFF00] shrink-0" />
                <span className="text-zinc-500 text-sm font-['Barlow']">+62 812-3456-7890</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#AAFF00] shrink-0" />
                <span className="text-zinc-500 text-sm font-['Barlow']">hello@anugerahsports.id</span>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <p className="text-xs text-zinc-500 font-['Barlow'] mb-1">Store Hours</p>
              <p className="text-sm text-white font-['Barlow_Condensed'] font-semibold">Mon–Sat: 08:00 – 20:00</p>
              <p className="text-sm text-white font-['Barlow_Condensed'] font-semibold">Sunday: 09:00 – 17:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs font-['Barlow']">© 2024 Anugerah Sports. All rights reserved. Est. 1974, Malang.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-zinc-600 hover:text-zinc-400 text-xs font-['Barlow'] transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}