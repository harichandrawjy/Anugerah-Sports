import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, MapPin, Phone, Mail, Zap, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 selection:bg-[#E63946] selection:text-white">
      
      {/* NEWSLETTER BAR - High impact color block */}
      <div className="bg-[#E63946] py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-['Barlow_Condensed'] font-black text-3xl md:text-4xl uppercase text-white tracking-tight mb-2">
              Join the Roster
            </p>
            <p className="text-white/90 text-base font-medium">
              Subscribe for early access to sales, new arrivals & pro sports tips.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-0 shadow-2xl shadow-red-900/20">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 md:w-80 px-6 py-4 bg-white text-zinc-900 placeholder-zinc-400 text-base focus:outline-none border-none"
            />
            <button className="px-8 py-4 bg-zinc-900 text-white font-['Barlow_Condensed'] font-bold text-base tracking-widest uppercase hover:bg-black transition-colors flex items-center gap-2">
              Subscribe <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-[#E63946] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Zap size={20} className="text-white fill-white" />
              </div>
              <div>
                <span className="font-['Barlow_Condensed'] font-black text-2xl text-white uppercase tracking-wider leading-none block">ANUGERAH</span>
                <span className="block text-[11px] text-zinc-500 font-bold tracking-[0.3em] uppercase leading-none mt-1">SPORTS</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Equipping Malang's sporting community since 1974. Premium original products, guaranteed authenticity, and genuine passion for the game.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/anugerahsports" target="_blank" rel="noreferrer"
                className="w-10 h-10 border border-zinc-800 hover:border-[#E63946] hover:bg-[#E63946] text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                className="w-10 h-10 border border-zinc-800 hover:border-[#E63946] hover:bg-[#E63946] text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300">
                <MessageCircle size={18} />
              </a>
              <a href="https://shopee.co.id/anugerahsports" target="_blank" rel="noreferrer"
                className="w-10 h-10 border border-zinc-800 hover:border-[#E63946] hover:bg-[#E63946] text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300 font-['Barlow_Condensed'] font-bold text-sm tracking-wider">
                SP
              </a>
              <a href="https://tokopedia.com/anugerahsports" target="_blank" rel="noreferrer"
                className="w-10 h-10 border border-zinc-800 hover:border-[#E63946] hover:bg-[#E63946] text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300 font-['Barlow_Condensed'] font-bold text-sm tracking-wider">
                TP
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-['Barlow_Condensed'] font-black text-xl uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[['Home', '/'], ['Products', '/products'], ['Brands', '/brands'], ['Our Story', '/about'], ['Contact', '/contact']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-zinc-400 hover:text-white text-sm transition-colors flex items-center gap-3 group">
                    <span className="w-0 group-hover:w-4 h-px bg-[#E63946] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-['Barlow_Condensed'] font-black text-xl uppercase tracking-widest mb-6">Equipment</h4>
            <ul className="space-y-4">
              {['Badminton', 'Futsal', 'Football', 'Running', 'Jerseys', 'Accessories'].map((cat) => (
                <li key={cat}>
                  <Link to={`/products?category=${cat}`} className="text-zinc-400 hover:text-white text-sm transition-colors flex items-center gap-3 group">
                    <span className="w-0 group-hover:w-4 h-px bg-[#E63946] transition-all duration-300" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-['Barlow_Condensed'] font-black text-xl uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start group">
                <MapPin size={18} className="text-zinc-500 group-hover:text-[#E63946] mt-0.5 shrink-0 transition-colors" />
                <span className="text-zinc-400 text-sm leading-relaxed">Jl. Ahmad Yani No. 45<br/>Malang, Jawa Timur 65145</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Phone size={18} className="text-zinc-500 group-hover:text-[#E63946] shrink-0 transition-colors" />
                <span className="text-zinc-400 text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Mail size={18} className="text-zinc-500 group-hover:text-[#E63946] shrink-0 transition-colors" />
                <span className="text-zinc-400 text-sm">hello@anugerahsports.id</span>
              </li>
            </ul>
            <div className="mt-8 p-5 bg-zinc-900 border border-zinc-800">
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-2">Store Hours</p>
              <div className="space-y-1">
                <p className="text-sm text-zinc-300 flex justify-between"><span>Mon–Sat</span> <span className="font-medium text-white">08:00 – 20:00</span></p>
                <p className="text-sm text-zinc-300 flex justify-between"><span>Sunday</span> <span className="font-medium text-white">09:00 – 17:00</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-900 bg-[#0a0a0a] py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            © {currentYear} Anugerah Sports. All rights reserved. Est. 1974, Malang.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Return Policy'].map((item) => (
              <a key={item} href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      
    </footer>
  )
}