import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Send, CheckCircle, Store } from 'lucide-react'

// Premium easing curve to match the global design system
const springEase = [0.16, 1, 0.3, 1]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.3 }}
      className="bg-white text-zinc-900 selection:bg-[#E63946] selection:text-white pt-24 min-h-screen"
    >

      {/* HEADER SECTION - Editorial, clean typography */}
      <section className="relative pt-12 pb-20 overflow-hidden max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
        <div className="max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: springEase }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-0.5 w-12 bg-[#E63946]" />
            <span className="font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-widest text-zinc-500">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: springEase }}
            className="font-['Barlow_Condensed'] font-black text-6xl md:text-7xl lg:text-[7rem] uppercase text-zinc-900 leading-[0.85] tracking-tight mb-8"
          >
            We're Here <br/>
            <span className="text-[#E63946]">To Help</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-zinc-500 text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            Whether you need expert advice on racket stringing tension or want to check stock for a specific shoe size, our team of sports specialists is ready to assist you.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Left Column: Contact Info & Online Channels */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              
              {/* Direct Contact Info */}
              <div>
                <h3 className="font-['Barlow_Condensed'] font-black text-3xl uppercase text-zinc-900 mb-8 tracking-tight">Store Details</h3>
                <div className="space-y-6">
                  {[
                    { icon: <MapPin size={24} />, title: 'Flagship Store', lines: ['Jl. Ahmad Yani No. 45', 'Malang, Jawa Timur 65145', 'Indonesia'] },
                    { icon: <Clock size={24} />, title: 'Operating Hours', lines: ['Monday – Saturday: 08:00 – 20:00', 'Sunday: 09:00 – 17:00'] },
                    { icon: <Phone size={24} />, title: 'Phone & WhatsApp', lines: ['+62 812-3456-7890'] },
                    { icon: <Mail size={24} />, title: 'General Inquiries', lines: ['hello@anugerahsports.id', 'order@anugerahsports.id'] },
                  ].map(({ icon, title, lines }, i) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6, ease: springEase }}
                      className="flex gap-5 group"
                    >
                      <div className="w-12 h-12 bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-[#E63946] shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {icon}
                      </div>
                      <div>
                        <p className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-2">{title}</p>
                        {lines.map((line, j) => (
                          <p key={j} className="text-zinc-500 text-sm leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Online Channels */}
              <div>
                <h3 className="font-['Barlow_Condensed'] font-black text-3xl uppercase text-zinc-900 mb-6 tracking-tight">Connect Online</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <MessageCircle size={20} />, name: 'WhatsApp', handle: 'Fast Response', url: 'https://wa.me/6281234567890', color: '#25D366' },
                    { icon: <Instagram size={20} />, name: 'Instagram', handle: '@anugerahsports', url: 'https://instagram.com/anugerahsports', color: '#E1306C' },
                    { icon: <Store size={20} />, name: 'Shopee', handle: 'Official Store', url: 'https://shopee.co.id/anugerahsports', color: '#EE4D2D' },
                    { icon: <Store size={20} />, name: 'Tokopedia', handle: 'Official Store', url: 'https://tokopedia.com/anugerahsports', color: '#00AA5B' },
                  ].map((channel, i) => (
                    <motion.a
                      key={channel.name}
                      href={channel.url}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6, ease: springEase }}
                      className="flex flex-col p-6 bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 mb-4 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 duration-300" style={{ backgroundColor: channel.color }}>
                        {channel.icon}
                      </div>
                      <p className="text-zinc-900 font-['Barlow_Condensed'] font-black text-xl uppercase tracking-wide">{channel.name}</p>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">{channel.handle}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Map & Form */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* Map Embed - Clean style without inversion */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: springEase }}
                className="w-full h-64 lg:h-80 bg-zinc-200 border border-zinc-300 relative overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3607!2d112.6304!3d-7.9818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7880000000001%3A0x0!2sJl.+Ahmad+Yani%2C+Malang!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Anugerah Sports Location"
                />
              </motion.div>

              {/* Form Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: springEase }}
                className="bg-white p-8 lg:p-12 border border-zinc-200 shadow-xl"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="font-['Barlow_Condensed'] font-black text-4xl uppercase text-zinc-900 mb-4 tracking-tight">Message Received</h3>
                    <p className="text-zinc-500 text-lg max-w-md mx-auto">
                      Thank you for reaching out. A member of our team will get back to you within 24 hours. For immediate assistance, please use WhatsApp.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-8">
                      <h2 className="font-['Barlow_Condensed'] font-black text-4xl uppercase text-zinc-900 tracking-tight">Send a Message</h2>
                      <p className="text-zinc-500 mt-2">Fill out the form below and we'll get back to you shortly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-zinc-900 font-bold uppercase tracking-widest">Full Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          placeholder="John Doe"
                          className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-base focus:outline-none focus:border-[#E63946] focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-zinc-900 font-bold uppercase tracking-widest">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({...form, phone: e.target.value})}
                          placeholder="+62 812..."
                          className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-base focus:outline-none focus:border-[#E63946] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-zinc-900 font-bold uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-base focus:outline-none focus:border-[#E63946] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-zinc-900 font-bold uppercase tracking-widest">How can we help?</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        placeholder="Please describe your inquiry..."
                        className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-base focus:outline-none focus:border-[#E63946] focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-zinc-900 text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-widest hover:bg-[#E63946] transition-colors flex items-center justify-center gap-3 mt-4"
                    >
                      <Send size={20} /> Submit Message
                    </button>
                  </form>
                )}
              </motion.div>

            </div>
          </div>
        </div>
      </section>
      
    </motion.div>
  )
}