import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, ArrowLeft, ArrowRight, CheckCircle, Truck, ShieldCheck } from 'lucide-react'
import { products, formatPrice } from '../data'
import ProductCard from '../components/ProductCard'

// Premium easing curve to match the global design system
const springEase = [0.16, 1, 0.3, 1]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const [qty, setQty] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen bg-zinc-50">
        <p className="text-zinc-500 font-['Barlow_Condensed'] text-3xl font-bold uppercase tracking-tight">Product not found</p>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-full hover:bg-[#E63946] transition-colors">
          <ArrowLeft size={16} /> Back to Collection
        </Link>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.3 }}
      className="bg-white text-zinc-900 selection:bg-[#E63946] selection:text-white pt-24 min-h-screen"
    >

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb - Clean, editorial styling */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <Link to="/products" className="flex items-center gap-1.5 text-zinc-500 hover:text-[#E63946] text-xs font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={14} /> Shop
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{product.category}</span>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-900 text-xs font-bold uppercase tracking-widest truncate">{product.name}</span>
        </div>

        {/* Product Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          
          {/* Image Gallery Area */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: springEase }}
              className="relative rounded-none overflow-hidden bg-zinc-50 aspect-square border border-zinc-200"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
              
              {/* Premium Badges */}
              {product.badge && (
                <span className={`absolute top-6 left-6 px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${
                  product.badge === 'Sale' ? 'bg-[#E63946] text-white shadow-lg shadow-red-500/20' :
                  product.badge === 'New' ? 'bg-zinc-900 text-white' :
                  'bg-white text-zinc-900 border border-zinc-200 shadow-sm'
                }`}>
                  {product.badge}
                </span>
              )}
            </motion.div>
          </div>

          {/* Product Info Area */}
          <div className="lg:col-span-5 lg:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: springEase }}
            >
              <div className="mb-8">
                <p className="text-[#E63946] font-bold text-xs uppercase tracking-widest mb-3">
                  {product.brand}
                </p>
                <h1 className="font-['Barlow_Condensed'] font-black text-4xl lg:text-5xl uppercase text-zinc-900 leading-none mb-6 tracking-tight">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-[#E63946] text-[#E63946]' : 'fill-zinc-200 text-zinc-200'} />
                    ))}
                  </div>
                  <span className="text-zinc-900 font-bold text-sm">{product.rating}</span>
                  <span className="text-zinc-400 text-sm hover:text-zinc-900 cursor-pointer underline decoration-zinc-300 transition-colors">
                    Read {product.reviews} Reviews
                  </span>
                </div>
              </div>

              {/* Price Block */}
              <div className="mb-8 pb-8 border-b border-zinc-200">
                <div className="flex items-end gap-4">
                  <span className="font-['Barlow_Condensed'] font-black text-5xl text-zinc-900 tracking-tight">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-zinc-400 line-through text-xl mb-1.5 font-medium">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  {product.discount && (
                    <span className="mb-2.5 px-2 py-1 bg-red-50 text-[#E63946] text-xs font-bold uppercase tracking-widest">
                      Save {product.discount}%
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-600 text-base leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features List */}
              <div className="mb-10 p-6 bg-zinc-50 border border-zinc-200">
                <p className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-4">Performance Specs</p>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#E63946] shrink-0 mt-0.5" />
                      <span className="text-zinc-600 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart Area */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-zinc-200 bg-white h-14">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-12 h-full text-zinc-500 hover:text-[#E63946] hover:bg-zinc-50 transition-colors flex items-center justify-center text-xl">−</button>
                    <span className="w-12 text-center font-bold text-zinc-900">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="w-12 h-full text-zinc-500 hover:text-[#E63946] hover:bg-zinc-50 transition-colors flex items-center justify-center text-xl">+</button>
                  </div>
                  
                  <button className="flex-1 h-14 bg-zinc-900 text-white font-['Barlow_Condensed'] font-bold text-base uppercase tracking-widest hover:bg-[#E63946] transition-colors flex items-center justify-center gap-3 shadow-lg shadow-zinc-900/10">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>

                  <button
                    onClick={() => setWishlisted(!wishlisted)}
                    className={`w-14 h-14 border flex items-center justify-center transition-all ${
                      wishlisted 
                        ? 'border-[#E63946] bg-red-50 text-[#E63946]' 
                        : 'border-zinc-200 bg-white text-zinc-400 hover:border-zinc-400 hover:text-zinc-900'
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart size={20} className={wishlisted ? 'fill-current' : ''} />
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-4">
                  {[
                    { icon: <ShieldCheck size={18} />, text: 'Verified Authentic' },
                    { icon: <Truck size={18} />, text: 'Ships Same Day' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-2">
                      <span className="text-zinc-400">{icon}</span>
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Related Products - Clean Grid */}
        {related.length > 0 && (
          <div className="pt-16 border-t border-zinc-200">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-['Barlow_Condensed'] font-black text-4xl uppercase text-zinc-900 tracking-tight">Complete Your Gear</h2>
              <Link to={`/products?category=${product.category}`} className="hidden sm:flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-wider text-sm hover:text-[#E63946] transition-colors group">
                View All {product.category} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}