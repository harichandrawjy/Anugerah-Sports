import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ShieldCheck, Truck, Star, Award, Users, MessageCircle, Play } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, brands, categories } from '../data'

// Premium easing curve for animations
const springEase = [0.16, 1, 0.3, 1]

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  return (
    <span ref={ref}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: springEase }}
        >
          {target}{suffix}
        </motion.span>
      ) : '0'}
    </span>
  )
}

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-white text-zinc-900 selection:bg-[#E63946] selection:text-white"
    >
      {/* HERO SECTION - Editorial, clean, human-crafted layout */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 relative z-10 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: springEase }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-0.5 w-12 bg-[#E63946]" />
              <span className="font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-widest text-zinc-500">
                Est. 1974 • Malang City
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: springEase }}
              className="font-['Barlow_Condensed'] font-black text-6xl sm:text-7xl lg:text-[7rem] uppercase leading-[0.85] tracking-tight text-zinc-900 mb-8"
            >
              Elevate <br />
              <span className="text-[#E63946] relative inline-block">
                Your Game
                {/* Subtle dynamic underline */}
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: springEase }}
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-[#E63946] origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-zinc-500 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed"
            >
              Equipping Malang's sporting community with premium, authentic gear for over 50 years. True passion, zero compromises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: springEase }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link to="/products"
                className="group px-8 py-4 bg-zinc-900 text-white font-['Barlow_Condensed'] font-bold text-base uppercase tracking-widest rounded-full hover:bg-[#E63946] transition-all duration-300 flex items-center gap-3">
                Shop Collection 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about"
                className="group flex items-center gap-3 text-zinc-900 font-bold uppercase tracking-wider text-sm hover:text-[#E63946] transition-colors">
                <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center group-hover:border-[#E63946] transition-colors">
                  <Play size={16} className="ml-1" />
                </div>
                Our Story
              </Link>
            </motion.div>
          </div>

          {/* Hero Imagery - Asymmetrical, overlapping */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: springEase }}
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=1000&fit=crop"
                alt="Runner tying shoe"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
            
            {/* Human-crafted overlapping element */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: springEase }}
              className="absolute -bottom-8 -left-8 md:-left-16 bg-white p-6 shadow-2xl border border-zinc-100 max-w-[240px]"
            >
              <div className="flex gap-1 mb-2 text-[#E63946]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="font-['Barlow_Condensed'] font-bold text-xl uppercase leading-tight mb-2">"The only store I trust for my tournament gear."</p>
              <p className="text-sm text-zinc-500 font-medium">— Dimas, Pro Athlete</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* TRUST BAR - Minimalist and Premium */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x divide-zinc-200">
            {[
              { icon: <ShieldCheck size={24} />, title: '100% Authentic', desc: 'Verified original gear' },
              { icon: <Truck size={24} />, title: 'Express Local', desc: 'Same-day Malang delivery' },
              { icon: <Award size={24} />, title: 'Price Match', desc: 'Best value guaranteed' },
              { icon: <Users size={24} />, title: 'Expert Advice', desc: 'Staffed by real athletes' },
            ].map(({ icon, title, desc }, i) => (
              <div key={title} className={`flex flex-col items-center text-center ${i !== 0 ? 'pl-8 lg:pl-12' : ''}`}>
                <div className="text-[#E63946] mb-3">{icon}</div>
                <h3 className="text-zinc-900 font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide">{title}</h3>
                <p className="text-zinc-500 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES - Magazine style dynamic grid */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl text-zinc-900 font-['Barlow_Condensed'] font-black uppercase tracking-tight mb-4">Shop by Discipline</h2>
            <p className="text-zinc-500 text-lg">Curated equipment for every court, pitch, and track.</p>
          </div>
          <Link to="/products" className="group flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-wider text-sm hover:text-[#E63946] transition-colors pb-2">
            Explore All Categories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: springEase }}
            >
              <Link to={`/products?category=${cat.name}`} className="group block relative aspect-[4/5] overflow-hidden bg-zinc-100">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-3">
                      {cat.count} Items
                    </span>
                    <h3 className="text-white font-['Barlow_Condensed'] font-black text-3xl uppercase tracking-wide">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS - Clean, spacious layout */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-zinc-900 font-['Barlow_Condensed'] font-black uppercase tracking-tight mb-4">Latest Arrivals</h2>
            <p className="text-zinc-500 text-lg">Premium gear just landed in-store.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/products" className="inline-flex px-8 py-4 bg-white border-2 border-zinc-900 text-zinc-900 font-['Barlow_Condensed'] font-bold text-base uppercase tracking-widest rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-300">
              View Entire Collection
            </Link>
          </div>
        </div>
      </section>

      {/* PROMO BANNER - Impactful, color-blocked */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: springEase }}
          className="relative bg-[#E63946] overflow-hidden flex flex-col lg:flex-row items-center"
        >
          <div className="lg:w-1/2 p-12 lg:p-20 relative z-10">
            <span className="inline-block py-1 px-3 bg-white text-[#E63946] font-bold text-xs uppercase tracking-widest mb-6">
              Season Finale
            </span>
            <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-7xl uppercase text-white leading-[0.9] tracking-tight mb-6">
              Performance <br/> Meets Value
            </h2>
            <p className="text-white/90 text-lg max-w-md mb-8">
              Up to 30% off professional-grade racquets and footwear. Equip yourself for the next tournament without compromise.
            </p>
            <Link to="/products?sale=true"
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white font-['Barlow_Condensed'] font-bold text-base uppercase tracking-widest rounded-full hover:bg-white hover:text-zinc-900 transition-colors">
              Access Sale <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="lg:w-1/2 h-full min-h-[400px] lg:absolute right-0 top-0 bottom-0">
            <img
              src="https://images.unsplash.com/photo-1622599511051-16f55a1234d0?w=1000&h=800&fit=crop"
              alt="Tennis racket"
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
            />
          </div>
        </motion.div>
      </section>

      {/* COMMUNITY SECTION - Editorial storytelling */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: springEase }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-6xl uppercase text-zinc-900 leading-tight tracking-tight mb-6">
                The Heartbeat of <br/> Malang Athletics
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-10">
                For over five decades, Anugerah Sports hasn't just been selling equipment—we've been fostering a community. From first-time runners to national champions, our walls hold the stories of thousands of personal bests and hard-fought victories.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10">
                {[
                  { value: 50, label: 'Years Strong' },
                  { value: 10, suffix: 'K+', label: 'Athletes Equipped' },
                  { value: 100, suffix: '%', label: 'Authenticity' },
                ].map(({ value, suffix, label }) => (
                  <div key={label} className="border-l-2 border-[#E63946] pl-4">
                    <p className="font-['Barlow_Condensed'] font-black text-4xl text-zinc-900">
                      <Counter target={value} suffix={suffix} />
                    </p>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mt-1">{label}</p>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="inline-flex items-center gap-3 text-zinc-900 font-bold uppercase tracking-wider text-sm hover:text-[#E63946] transition-colors group">
                Discover Our Heritage <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] w-full">
              {/* Human-crafted asymmetrical image collage */}
              <motion.img 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: springEase }}
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=800&fit=crop" 
                alt="Store heritage" 
                className="absolute top-0 right-0 w-[70%] h-[80%] object-cover shadow-xl"
              />
              <motion.img 
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: springEase }}
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=500&fit=crop" 
                alt="Community event" 
                className="absolute bottom-0 left-0 w-[55%] h-[50%] object-cover shadow-2xl border-4 border-white"
              />
            </div>

          </div>
        </div>
      </section>

      {/* TOP BRANDS - Clean Logostrip style */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-zinc-400 font-bold text-xs uppercase tracking-widest mb-10">Official Authorized Retailer For</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.slice(0, 6).map((brand) => (
              <div key={brand.id} className="flex items-center gap-2 group cursor-pointer">
                <span className="font-['Barlow_Condensed'] font-bold text-2xl md:text-3xl text-zinc-900 uppercase tracking-widest group-hover:text-[#E63946] transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Bold, highly legible */}
      <section className="py-32 bg-zinc-900 text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: springEase }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-7xl uppercase leading-tight tracking-tight mb-6">
            Ready to break <br/> your limits?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Visit our flagship store in Malang or order online for fast, reliable delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="px-8 py-4 bg-[#E63946] text-white font-['Barlow_Condensed'] font-bold text-base uppercase tracking-widest rounded-full hover:bg-white hover:text-zinc-900 transition-colors flex items-center gap-2 shadow-lg shadow-red-500/20">
              Shop Online <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
              className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-['Barlow_Condensed'] font-bold text-base uppercase tracking-widest rounded-full hover:border-white transition-all flex items-center gap-2">
              <MessageCircle size={18} /> Contact Store
            </a>
          </div>
        </motion.div>
      </section>

    </motion.div>
  )
}