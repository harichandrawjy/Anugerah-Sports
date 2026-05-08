import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, ArrowLeft, CheckCircle, Truck, ShieldCheck } from 'lucide-react'
import { products, formatPrice } from '../data'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const [qty, setQty] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <p className="text-zinc-400 font-['Barlow_Condensed'] text-2xl">Product not found</p>
        <Link to="/products" className="mt-4 inline-block text-[#AAFF00] underline font-['Barlow']">Back to Products</Link>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      className="pt-20 min-h-screen">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/products" className="flex items-center gap-1 text-zinc-500 hover:text-[#AAFF00] text-sm font-['Barlow'] transition-colors">
            <ArrowLeft size={14} /> Products
          </Link>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400 text-sm font-['Barlow']">{product.category}</span>
          <span className="text-zinc-700">/</span>
          <span className="text-white text-sm font-['Barlow']">{product.name}</span>
        </div>

        {/* Product */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden bg-zinc-900 aspect-square"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.badge && (
              <span className={`absolute top-5 left-5 px-3 py-1.5 rounded-lg text-xs font-['Barlow_Condensed'] font-bold uppercase tracking-wider ${
                product.badge === 'Sale' ? 'bg-red-500 text-white' :
                product.badge === 'New' ? 'bg-[#AAFF00] text-black' :
                'bg-orange-500 text-white'
              }`}>
                {product.badge}
              </span>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-widest mb-2">{product.brand} • {product.category}</p>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl lg:text-5xl uppercase text-white mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-[#AAFF00] text-[#AAFF00]' : 'text-zinc-700'} />
                ))}
              </div>
              <span className="text-white font-['Barlow_Condensed'] font-bold">{product.rating}</span>
              <span className="text-zinc-500 text-sm font-['Barlow']">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mb-6">
              <span className="font-['Barlow_Condensed'] font-black text-4xl text-white">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-zinc-500 line-through font-['Barlow'] text-lg mb-1">{formatPrice(product.originalPrice)}</span>
              )}
              {product.discount && (
                <span className="px-2 py-1 bg-[#AAFF00]/10 text-[#AAFF00] text-sm font-['Barlow_Condensed'] font-bold rounded-lg">-{product.discount}%</span>
              )}
            </div>

            <p className="text-zinc-400 font-['Barlow'] leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <p className="text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wider mb-3">Key Features</p>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#AAFF00] shrink-0" />
                    <span className="text-zinc-400 text-sm font-['Barlow']">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wider">Quantity</p>
              <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-zinc-400 hover:text-white text-lg w-6 text-center transition-colors">−</button>
                <span className="text-white font-['Barlow_Condensed'] font-bold text-lg w-8 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="text-zinc-400 hover:text-white text-lg w-6 text-center transition-colors">+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button className="flex-1 py-4 bg-[#AAFF00] text-black font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={16} /> Add to Cart
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`w-14 h-14 border rounded-xl flex items-center justify-center transition-all ${
                  wishlisted ? 'border-red-500 bg-red-500/10' : 'border-zinc-800 bg-zinc-900 hover:border-zinc-600'
                }`}
              >
                <Heart size={18} className={wishlisted ? 'fill-red-500 text-red-500' : 'text-zinc-400'} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex gap-4 pt-5 border-t border-zinc-900">
              {[
                { icon: <ShieldCheck size={16} />, text: '100% Original' },
                { icon: <Truck size={16} />, text: 'Fast Delivery' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-zinc-500">
                  <span className="text-[#AAFF00]">{icon}</span>
                  <span className="text-xs font-['Barlow']">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-['Barlow_Condensed'] font-black text-3xl uppercase text-white mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}