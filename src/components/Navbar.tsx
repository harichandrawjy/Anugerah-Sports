import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, Zap, ArrowRight } from 'lucide-react'
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
    // Close mobile menu when route changes
    setMobileOpen(false)
  }, [location])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Premium spring ease
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm py-0' 
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-2'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-50">
              <div className="w-10 h-10 bg-[#E63946] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md shadow-red-500/20">
                <Zap size={20} className="text-white fill-white" />
              </div>
              <div>
                <span className="font-['Barlow_Condensed'] font-black text-2xl text-zinc-900 tracking-wider uppercase leading-none block">ANUGERAH</span>
                <span className="block text-[11px] text-zinc-500 font-bold tracking-[0.3em] uppercase leading-none mt-1">SPORTS</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-['Barlow_Condensed'] font-bold text-base tracking-widest uppercase transition-colors duration-200 group ${
                    location.pathname === link.path ? 'text-[#E63946]' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#E63946] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 lg:gap-4 relative z-50">
              <button 
                className="hidden md:flex w-10 h-10 items-center justify-center text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <button 
                className="relative w-10 h-10 flex items-center justify-center text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#E63946] text-white text-[10px] font-bold flex items-center justify-center w-5 h-5 rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen pt-28 pb-12 px-6">
              <div className="flex flex-col gap-2 flex-grow">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-4 border-b border-zinc-100 font-['Barlow_Condensed'] font-black text-4xl sm:text-5xl uppercase tracking-tight transition-colors ${
                        location.pathname === link.path ? 'text-[#E63946]' : 'text-zinc-900 hover:text-[#E63946]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-4">Need Assistance?</p>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-5 bg-zinc-900 text-white font-['Barlow_Condensed'] font-bold text-lg tracking-widest uppercase hover:bg-[#E63946] transition-colors shadow-xl shadow-zinc-900/10">
                  WhatsApp Us <ArrowRight size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}