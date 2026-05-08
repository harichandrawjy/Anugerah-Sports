import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ShieldCheck, Truck, Star, Award, Users, TrendingUp, MessageCircle } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, brands, categories, testimonials } from '../data'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <span ref={ref}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {target}{suffix}
        </motion.span>
      ) : '0'}
    </span>
  )
}

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547491689-1f5c4f5671f1?w=1600&h=900&fit=crop"
            alt="Athlete"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </div>

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(170,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Green accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#AAFF00]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-0.5 w-10 bg-[#AAFF00]" />
              <span className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px]">Malang's #1 Sports Store</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Barlow_Condensed'] font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.9] text-white mb-6"
            >
              Trusted<br />
              <span className="text-[#AAFF00]">Sports</span><br />
              Store
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-zinc-400 text-lg max-w-xl mb-10 font-['Barlow'] leading-relaxed"
            >
              Serving Malang's sporting community since 1974. Original products, best prices, and genuine passion for sports.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products"
                className="px-8 py-4 bg-[#AAFF00] text-black font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-all duration-200 flex items-center gap-2 hover:gap-3">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/brands"
                className="px-8 py-4 bg-transparent border border-zinc-600 text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-xl hover:border-[#AAFF00] hover:text-[#AAFF00] transition-all duration-200">
                Explore Brands
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-8 mt-16 pt-8 border-t border-zinc-800"
            >
              {[
                { value: 50, suffix: '+', label: 'Years Trusted' },
                { value: 500, suffix: '+', label: 'Products' },
                { value: 10, suffix: 'K+', label: 'Happy Customers' },
              ].map(({ value, suffix, label }) => (
                <div key={label}>
                  <p className="font-['Barlow_Condensed'] font-black text-3xl text-white">
                    <Counter target={value} suffix={suffix} />
                  </p>
                  <p className="text-zinc-500 text-xs font-['Barlow'] uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-12 right-8 lg:right-16 hidden md:flex flex-col items-center gap-2 p-4 bg-[#111]/80 backdrop-blur rounded-2xl border border-zinc-800"
        >
          <div className="w-12 h-12 rounded-xl bg-[#AAFF00]/10 flex items-center justify-center">
            <ShieldCheck size={24} className="text-[#AAFF00]" />
          </div>
          <p className="text-white font-['Barlow_Condensed'] font-bold text-sm text-center">100%<br/>Original</p>
        </motion.div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#111111] border-y border-zinc-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={20} />, title: '100% Original', desc: 'Guaranteed authentic products' },
              { icon: <Truck size={20} />, title: 'Fast Delivery', desc: 'Same-day Malang area' },
              { icon: <Award size={20} />, title: 'Best Price', desc: 'Price match guarantee' },
              { icon: <Users size={20} />, title: 'Community', desc: 'Trusted since 1974' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#AAFF00]/10 rounded-lg flex items-center justify-center text-[#AAFF00] shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-white font-['Barlow_Condensed'] font-bold text-sm uppercase">{title}</p>
                  <p className="text-zinc-500 text-xs font-['Barlow']">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-2">Browse by Sport</p>
            <h2 className="text-4xl lg:text-5xl text-white font-['Barlow_Condensed'] font-black uppercase">Categories</h2>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-wider transition-colors">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/products?category=${cat.name}`}
                className="relative block rounded-2xl overflow-hidden aspect-[3/4] group"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-[#AAFF00]/0 group-hover:bg-[#AAFF00]/10 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-2xl mb-1">{cat.icon}</p>
                  <p className="text-white font-['Barlow_Condensed'] font-bold text-base uppercase">{cat.name}</p>
                  <p className="text-zinc-400 text-xs font-['Barlow']">{cat.count} items</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-2">Handpicked for You</p>
              <h2 className="text-4xl lg:text-5xl text-white font-['Barlow_Condensed'] font-black uppercase">Featured Products</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-wider transition-colors">
              See All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-[#AAFF00] p-10 lg:p-16"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop"
              alt="Promo"
              className="w-full h-full object-cover mix-blend-multiply opacity-70"
            />
          </div>
          <div className="relative z-10 max-w-lg">
            <p className="font-['Barlow_Condensed'] font-bold text-black/60 text-sm uppercase tracking-[4px] mb-3">Limited Time</p>
            <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-6xl uppercase text-black leading-tight mb-4">
              Year-End<br />Mega Sale
            </h2>
            <p className="text-black/70 font-['Barlow'] mb-8 text-lg">Up to 30% off on selected badminton and futsal equipment. Original products, best prices.</p>
            <Link to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#AAFF00] font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-zinc-900 transition-colors">
              Shop Sale <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* TOP BRANDS */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-2">Official Reseller</p>
            <h2 className="text-4xl lg:text-5xl text-white font-['Barlow_Condensed'] font-black uppercase">Top Brands</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to="/brands" className="group flex flex-col items-center gap-2 p-4 bg-zinc-900/50 hover:bg-[#AAFF00]/10 border border-zinc-800 hover:border-[#AAFF00]/40 rounded-xl transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-['Oswald'] font-bold text-lg text-white group-hover:text-[#AAFF00]"
                    style={{ backgroundColor: brand.color + '22', color: brand.color }}>
                    {brand.logo}
                  </div>
                  <span className="text-zinc-400 group-hover:text-white font-['Barlow_Condensed'] font-semibold text-xs uppercase tracking-wider transition-colors">{brand.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/brands" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-wider transition-colors">
              View All Brands <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-2">Most Popular</p>
            <h2 className="text-4xl lg:text-5xl text-white font-['Barlow_Condensed'] font-black uppercase">Best Sellers</h2>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-wider transition-colors">
            See All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.slice(4, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-3">More Than a Store</p>
              <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-6xl uppercase text-white leading-tight mb-6">
                Heart of<br/>Malang's<br/>Sports Scene
              </h2>
              <p className="text-zinc-400 font-['Barlow'] leading-relaxed mb-8">
                For 50+ years, Anugerah Sports has been more than just a store — we're the heartbeat of Malang's sporting community. From grassroots tournaments to national champions, we've equipped generations of athletes.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { icon: <TrendingUp size={20} />, value: '50+', label: 'Years' },
                  { icon: <Users size={20} />, value: '10K+', label: 'Athletes' },
                  { icon: <Award size={20} />, value: '500+', label: 'Products' },
                ].map(({ icon, value, label }) => (
                  <div key={label} className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 text-center">
                    <div className="text-[#AAFF00] flex justify-center mb-2">{icon}</div>
                    <p className="font-['Barlow_Condensed'] font-black text-2xl text-white">{value}</p>
                    <p className="text-zinc-500 text-xs font-['Barlow'] uppercase tracking-wider">{label}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-[#AAFF00] text-black font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-colors">
                Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                'https://images.unsplash.com/photo-1547491689-1f5c4f5671f1?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
              ].map((src, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'row-span-2' : ''}`}>
                  <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ minHeight: i === 0 ? '320px' : '150px' }} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-2">Real Athletes</p>
          <h2 className="text-4xl lg:text-5xl text-white font-['Barlow_Condensed'] font-black uppercase">What They Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 bg-[#111] border border-zinc-900 rounded-2xl hover:border-[#AAFF00]/30 transition-all duration-200"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className={j < t.rating ? 'fill-[#AAFF00] text-[#AAFF00]' : 'text-zinc-700'} />
                ))}
              </div>
              <p className="text-zinc-300 text-sm font-['Barlow'] leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-900">
                <div className="w-9 h-9 rounded-full bg-[#AAFF00]/20 flex items-center justify-center text-[#AAFF00] font-['Barlow_Condensed'] font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-['Barlow_Condensed'] font-semibold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs font-['Barlow']">{t.role} • {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MARKETPLACE SECTION */}
      <section className="py-16 bg-[#0d0d0d] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-2">Shop Everywhere</p>
            <h2 className="text-3xl lg:text-4xl text-white font-['Barlow_Condensed'] font-black uppercase">Find Us Online</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Shopee', url: 'https://shopee.co.id/anugerahsports', bg: '#EE4D2D', label: 'shopee.co.id/anugerahsports' },
              { name: 'Tokopedia', url: 'https://tokopedia.com/anugerahsports', bg: '#00AA5B', label: 'tokopedia.com/anugerahsports' },
              { name: 'WhatsApp', url: 'https://wa.me/6281234567890', bg: '#25D366', label: '+62 812-3456-7890' },
            ].map((mkt) => (
              <a
                key={mkt.name}
                href={mkt.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 hover:bg-zinc-900 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-['Barlow_Condensed'] font-bold text-sm text-white" style={{ backgroundColor: mkt.bg }}>
                  {mkt.name.slice(0, 2)}
                </div>
                <div>
                  <p className="text-white font-['Barlow_Condensed'] font-bold text-sm uppercase group-hover:text-[#AAFF00] transition-colors">{mkt.name}</p>
                  <p className="text-zinc-500 text-xs font-['Barlow']">{mkt.label}</p>
                </div>
                <ArrowRight size={14} className="text-zinc-600 group-hover:text-[#AAFF00] ml-2 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-4">Ready to Play?</p>
            <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-7xl uppercase text-white leading-tight mb-6">
              Get Your Gear<br/>Today
            </h2>
            <p className="text-zinc-400 font-['Barlow'] mb-10">Visit our store in Malang or shop online. We're here for your sporting journey.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products" className="px-8 py-4 bg-[#AAFF00] text-black font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-colors flex items-center gap-2">
                Shop Now <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                className="px-8 py-4 bg-transparent border border-zinc-600 text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-xl hover:border-[#AAFF00] hover:text-[#AAFF00] transition-all flex items-center gap-2">
                <MessageCircle size={16} /> Chat Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}