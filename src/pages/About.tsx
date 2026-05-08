import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, ShieldCheck, Heart } from 'lucide-react'

// Premium easing curve to match the global design system
const springEase = [0.16, 1, 0.3, 1]

const milestones = [
  { year: '1974', title: 'Founded', desc: 'Bapak Haji Anugerah opens the first store on Jl. Ahmad Yani, Malang.' },
  { year: '1985', title: 'Expanded', desc: 'Growth into badminton equipment as Indonesia rises to world dominance.' },
  { year: '1998', title: 'Official Reseller', desc: 'Became one of the first official Yonex authorized dealers in East Java.' },
  { year: '2008', title: 'Futsal Boom', desc: 'Expanded into futsal as the sport exploded across Indonesia.' },
  { year: '2015', title: 'Online Store', desc: 'Launched on Shopee and Tokopedia, serving customers across Indonesia.' },
  { year: '2024', title: 'Now', desc: '50 years strong. New website, same values. Still Malang\'s most trusted.' },
]

const values = [
  { icon: <ShieldCheck size={28} />, title: 'Authenticity', desc: 'We never compromise on product authenticity. Every item is 100% original, verified directly from manufacturers.' },
  { icon: <Heart size={28} />, title: 'Community', desc: 'Sports bring people together. We\'re here to support every athlete\'s journey, from beginners to pros.' },
  { icon: <Users size={28} />, title: 'Trust', desc: 'Over 50 years of unbroken trust, built one customer, one racket, and one pair of shoes at a time.' },
  { icon: <Award size={28} />, title: 'Excellence', desc: 'We carry only the best brands and maintain the highest standards of customer service and expertise.' },
]

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.3 }}
      className="bg-white text-zinc-900 selection:bg-[#E63946] selection:text-white pt-24 min-h-screen"
    >

      {/* HERO SECTION - Editorial layout */}
      <section className="relative pt-12 pb-20 overflow-hidden max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: springEase }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-0.5 w-12 bg-[#E63946]" />
              <span className="font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-widest text-zinc-500">
                Est. 1974 • Malang, Indonesia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: springEase }}
              className="font-['Barlow_Condensed'] font-black text-6xl md:text-7xl lg:text-[8rem] uppercase text-zinc-900 leading-[0.85] tracking-tight mb-8"
            >
              Our <br/>
              <span className="text-[#E63946]">Legacy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-zinc-500 text-lg sm:text-xl max-w-lg leading-relaxed"
            >
              Five decades of passion, trust, and community. We are the original heartbeat of Malang's sporting culture.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: springEase }}
            className="relative aspect-[4/3] lg:aspect-square overflow-hidden bg-zinc-100"
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=1200&fit=crop"
              alt="Anugerah Sports Heritage"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION - Asymmetrical collage and premium typography */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: springEase }}
            >
              <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-6xl uppercase text-zinc-900 leading-[0.9] tracking-tight mb-8">
                From a Small Shop <br/>
                <span className="text-zinc-400">To an Institution</span>
              </h2>
              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
                <p>
                  In 1974, Haji Anugerah opened a small sports equipment shop on Jl. Ahmad Yani with a simple dream: to give the athletes of Malang access to quality sporting goods at honest prices.
                </p>
                <p>
                  What started as a modest storefront selling badminton rackets and shuttlecocks grew alongside Indonesia's vibrant sporting culture. When our national badminton stars began their global dominance in the 1980s, Anugerah Sports was already outfitting the local champions of tomorrow.
                </p>
                <p className="font-bold text-zinc-900">
                  Today, as a second-generation family business, we continue that legacy — serving as a trusted official reseller for the world's top brands, outfitting thousands of athletes across East Java.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: springEase }}
              className="relative h-[600px] w-full hidden md:block"
            >
              <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=800&fit=crop" alt="Historical" className="absolute top-0 right-0 w-[65%] h-[70%] object-cover shadow-xl z-10" />
              <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=600&fit=crop" alt="Action" className="absolute bottom-0 left-0 w-[55%] h-[55%] object-cover shadow-2xl border-8 border-zinc-50 z-20" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#E63946] mix-blend-multiply opacity-10 z-0" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS SECTION - High impact color block */}
      <section className="py-20 bg-[#E63946]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-x divide-white/20">
            {[
              { value: '50+', label: 'Years in Business' },
              { value: '10K+', label: 'Athletes Equipped' },
              { value: '100%', label: 'Authentic Gear' },
              { value: '1st', label: 'Choice in Malang' },
            ].map(({ value, label }, i) => (
              <motion.div 
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={i === 0 ? '' : 'pl-8 lg:pl-12'}
              >
                <p className="font-['Barlow_Condensed'] font-black text-5xl lg:text-7xl text-white mb-2">{value}</p>
                <p className="text-white/80 font-bold text-sm uppercase tracking-widest">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION - Clean, minimal list */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-6xl uppercase text-zinc-900 tracking-tight">Timeline of Excellence</h2>
          </div>
          
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 -translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((m, i) => {
                const isRightSide = i % 2 === 0;

                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: springEase }}
                    className={`relative flex flex-col md:flex-row w-full ${isRightSide ? 'md:justify-end' : 'md:justify-start'}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-[24px] md:left-1/2 top-2 w-3 h-3 bg-white border-2 border-[#E63946] rounded-full -translate-x-1/2 ring-4 ring-white z-10" />
                    
                    {/* Content */}
                    <div className={`w-full pl-16 md:pl-0 md:w-[45%] flex flex-col ${isRightSide ? 'md:text-left md:pl-10' : 'md:text-right md:pr-10'}`}>
                      <span className="text-[#E63946] font-['Barlow_Condensed'] font-black text-3xl md:text-4xl leading-none mb-2">{m.year}</span>
                      <span className="text-zinc-900 font-bold text-lg uppercase tracking-wider mb-3">{m.title}</span>
                      <p className="text-zinc-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION - Premium Cards */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <span className="text-[#E63946] font-bold text-xs uppercase tracking-widest mb-4 block">The Anugerah Standard</span>
            <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-6xl uppercase text-zinc-900 tracking-tight">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: springEase }}
                className="p-8 bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-red-50 text-[#E63946] flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="font-['Barlow_Condensed'] font-black text-2xl uppercase text-zinc-900 mb-3">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Bold and legible */}
      <section className="py-32 bg-zinc-900 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: springEase }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-7xl uppercase text-white leading-tight tracking-tight mb-6">
            Become Part of <br/> The Legacy
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Visit our store in Malang or shop our authenticated collection online. We're ready to equip your next victory.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="px-8 py-4 bg-[#E63946] text-white font-['Barlow_Condensed'] font-bold text-base uppercase tracking-widest rounded-full hover:bg-white hover:text-zinc-900 transition-colors flex items-center gap-2 shadow-lg shadow-red-500/20">
              Shop Collection <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-['Barlow_Condensed'] font-bold text-base uppercase tracking-widest rounded-full hover:border-white transition-all">
              Visit Store
            </Link>
          </div>
        </motion.div>
      </section>

    </motion.div>
  )
}