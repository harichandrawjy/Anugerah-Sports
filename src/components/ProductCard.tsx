import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Product } from '../data'
import { formatPrice } from '../data'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-zinc-900 hover:border-[#AAFF00]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(170,255,0,0.07)]">
        {/* Image */}
        <div className="relative overflow-hidden aspect-square bg-zinc-900">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

          {/* Badge */}
          {product.badge && (
            <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-['Barlow_Condensed'] font-bold uppercase tracking-wider ${
              product.badge === 'Sale' ? 'bg-red-500 text-white' :
              product.badge === 'New' ? 'bg-[#AAFF00] text-black' :
              product.badge === 'Bestseller' ? 'bg-orange-500 text-white' :
              'bg-zinc-700 text-white'
            }`}>
              {product.badge}
            </span>
          )}

          {/* Wishlist */}
          <button
            onClick={() => setWishlisted(!wishlisted)}
            className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black"
          >
            <Heart
              size={15}
              className={wishlisted ? 'fill-red-500 text-red-500' : 'text-white'}
            />
          </button>

          {/* Add to Cart Overlay */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-full py-3 bg-[#AAFF00] text-black font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-colors">
              <ShoppingCart size={15} />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-[#AAFF00] font-['Barlow_Condensed'] font-semibold uppercase tracking-wider mb-1">{product.brand}</p>
          <Link to={`/products/${product.id}`}>
            <h3 className="text-white font-['Barlow_Condensed'] font-bold text-base leading-tight mb-2 hover:text-[#AAFF00] transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className={i < Math.floor(product.rating) ? 'fill-[#AAFF00] text-[#AAFF00]' : 'text-zinc-700'}
                />
              ))}
            </div>
            <span className="text-zinc-500 text-xs font-['Barlow']">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-2">
            <span className="text-white font-['Barlow_Condensed'] font-bold text-xl">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-zinc-600 font-['Barlow'] text-xs line-through mb-0.5">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          {product.discount && (
            <span className="inline-block mt-1 text-[#AAFF00] text-xs font-['Barlow_Condensed'] font-semibold">Save {product.discount}%</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}