import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Brands', path: '/brands' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(3)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-[#AAFF00] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap size={20} className="text-black fill-black" />
              </div>
              <div>
                <span className="font-['Oswald'] font-bold text-xl text-white tracking-wider">ANUGERAH</span>
                <span className="block text-[10px] text-[#AAFF00] font-['Barlow_Condensed'] font-semibold tracking-[4px] uppercase leading-none">SPORTS</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-['Barlow_Condensed'] font-semibold text-sm tracking-widest uppercase transition-colors duration-200 group ${
                    location.pathname === link.path ? 'text-[#AAFF00]' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#AAFF00] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex w-9 h-9 items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all">
                <Search size={18} />
              </button>
              <button className="relative w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all">
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-[#AAFF00] text-black text-[10px] font-bold rounded-full flex items-center justify-center w-5 h-5">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="lg:hidden w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-4 border-b border-zinc-900 font-['Barlow_Condensed'] font-bold text-4xl uppercase tracking-wider transition-colors ${
                      location.pathname === link.path ? 'text-[#AAFF00]' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex gap-4">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                  className="px-6 py-3 bg-[#AAFF00] text-black font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase rounded-lg">
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}