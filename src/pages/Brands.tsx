import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { brands } from '../data'

// Premium easing curve to match the global design system
const springEase = [0.16, 1, 0.3, 1]

export default function Brands() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.3 }}
      className="pt-24 min-h-screen bg-white text-zinc-900 selection:bg-[#E63946] selection:text-white"
    >
      {/* HEADER SECTION - Editorial & Clean */}
      <section className="relative pb-20 overflow-hidden max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl relative z-10 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: springEase }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-0.5 w-12 bg-[#E63946]" />
            <span className="font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-widest text-zinc-500">
              Official Partners
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: springEase }}
            className="font-['Barlow_Condensed'] font-black text-6xl md:text-7xl lg:text-[7rem] uppercase text-zinc-900 leading-[0.85] tracking-tight mb-8"
          >
            The World's <br/>
            <span className="text-zinc-400">
              Best Brands
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-zinc-500 text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            We partner exclusively with industry leaders to bring you gear that performs as hard as you do. Authentic equipment engineered for champions.
          </motion.p>
        </div>
      </section>

      {/* BRAND GRID - Minimalist cards with sharp hover states */}
      <section className="bg-zinc-50 py-24 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: springEase }}
              >
                <Link
                  to={`/products?brand=${brand.name}`}
                  className="group block h-full p-8 bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative flex flex-col overflow-hidden"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-zinc-100 group-hover:bg-[#E63946] transition-colors duration-500" />

                  {/* Logo & Product Count */}
                  <div className="mb-10 flex items-start justify-between">
                    <div 
                      className="w-16 h-16 bg-zinc-50 flex items-center justify-center font-['Oswald'] font-bold text-3xl group-hover:scale-110 transition-transform duration-500"
                      style={{ color: brand.color || '#18181b' }}
                    >
                      {brand.logo}
                    </div>
                    <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest group-hover:text-zinc-900 transition-colors mt-2">
                      {brand.productCount} Items
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="font-['Barlow_Condensed'] font-black text-3xl uppercase text-zinc-900 mb-4">
                    {brand.name}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                    {brand.description}
                  </p>

                  {/* Action Link */}
                  <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-wider text-sm group-hover:text-[#E63946] transition-colors">
                    Explore Collection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PROMISE BANNER - High-contrast striking section */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: springEase }}
          className="relative bg-zinc-900 overflow-hidden flex flex-col lg:flex-row items-center p-12 lg:p-24 shadow-2xl"
        >
          {/* Subtle background graphic */}
          <div className="absolute -right-20 -bottom-20 opacity-5 text-white pointer-events-none transform -rotate-12">
            <ShieldCheck size={500} strokeWidth={1} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block py-1 px-3 bg-white text-zinc-900 font-bold text-xs uppercase tracking-widest mb-6">
              Our Guarantee
            </span>
            <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-7xl uppercase text-white leading-[0.9] tracking-tight mb-8">
              Authentic Gear. <br/> 
              <span className="text-[#E63946]">Zero Compromise.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mb-10 leading-relaxed">
              Every product on our shelves comes directly from the manufacturer. We are official authorized resellers for every brand we carry, ensuring you get peak performance and full warranties.
            </p>
            <Link to="/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E63946] text-white font-['Barlow_Condensed'] font-bold text-base uppercase tracking-widest rounded-full hover:bg-white hover:text-zinc-900 transition-colors shadow-lg shadow-red-500/20"
            >
              Shop All Brands <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
      
    </motion.div>
  )
}