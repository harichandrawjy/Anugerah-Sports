import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { brands } from '../data'

export default function Brands() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      className="pt-20 min-h-screen">

      {/* Header */}
      <div className="relative bg-[#0d0d0d] border-b border-zinc-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(170,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-3">Official Reseller</p>
          <h1 className="font-['Barlow_Condensed'] font-black text-6xl lg:text-8xl uppercase text-white leading-tight">
            Our Brands
          </h1>
          <p className="text-zinc-400 mt-4 font-['Barlow'] max-w-xl mx-auto">
            We carry only the world's most trusted sports brands — all 100% original and guaranteed authentic.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                to={`/products?brand=${brand.name}`}
                className="group block p-6 bg-[#111] border border-zinc-900 hover:border-[#AAFF00]/30 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(170,255,0,0.07)]"
              >
                {/* Brand Logo */}
                <div className="mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-['Oswald'] font-bold text-2xl text-white mb-3 transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: brand.color + '22', color: brand.color }}
                  >
                    {brand.logo}
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-black text-2xl uppercase text-white group-hover:text-[#AAFF00] transition-colors">{brand.name}</h3>
                </div>

                <p className="text-zinc-500 text-sm font-['Barlow'] leading-relaxed mb-5">{brand.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
                  <span className="text-zinc-600 text-xs font-['Barlow_Condensed'] font-semibold uppercase">{brand.productCount} Products</span>
                  <span className="flex items-center gap-1 text-[#AAFF00] text-xs font-['Barlow_Condensed'] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Brand Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-10 bg-[#AAFF00]/5 border border-[#AAFF00]/20 rounded-3xl text-center"
        >
          <h2 className="font-['Barlow_Condensed'] font-black text-3xl uppercase text-white mb-3">100% Original Products</h2>
          <p className="text-zinc-400 font-['Barlow'] max-w-xl mx-auto mb-6">
            Every product we sell comes with an authenticity guarantee. We are official authorized resellers for all brands we carry.
          </p>
          <Link to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#AAFF00] text-black font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-colors">
            Browse All Products <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}