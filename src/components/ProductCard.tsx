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

// Premium easing curve to match the global design system
const springEase = [0.16, 1, 0.3, 1]

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
      className="h-full"
    >
      <div className="group relative bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full overflow-hidden">
        
        {/* IMAGE CONTAINER */}
        <div className="relative overflow-hidden aspect-square bg-zinc-50 border-b border-zinc-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />

          {/* Premium Badges */}
          {product.badge && (
            <span className={`absolute top-4 left-4 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest ${
              product.badge === 'Sale' ? 'bg-[#E63946] text-white shadow-md shadow-red-500/20' :
              product.badge === 'New' ? 'bg-zinc-900 text-white' :
              product.badge === 'Bestseller' ? 'bg-white text-zinc-900 border border-zinc-200' :
              'bg-zinc-200 text-zinc-600'
            }`}>
              {product.badge}
            </span>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent navigating if wrapped in a link later
              setWishlisted(!wishlisted);
            }}
            className={`absolute top-4 right-4 w-9 h-9 bg-white border rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 ${
              wishlisted ? 'border-red-100' : 'border-zinc-200 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart
              size={16}
              className={`transition-colors ${wishlisted ? 'fill-[#E63946] text-[#E63946]' : 'text-zinc-400 hover:text-zinc-900'}`}
            />
          </button>

          {/* Slide-up Add to Cart Action */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <button className="w-full py-4 bg-zinc-900 text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#E63946] transition-colors">
              <ShoppingCart size={16} />
              Quick Add
            </button>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Brand */}
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2 group-hover:text-[#E63946] transition-colors">
            {product.brand}
          </p>
          
          {/* Product Title */}
          <Link to={`/products/${product.id}`} className="flex-grow">
            <h3 className="text-zinc-900 font-['Barlow_Condensed'] font-black text-2xl leading-tight mb-3 group-hover:text-[#E63946] transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(product.rating) ? 'fill-[#E63946] text-[#E63946]' : 'fill-zinc-200 text-zinc-200'}
                />
              ))}
            </div>
            <span className="text-zinc-400 text-xs font-medium">({product.reviews})</span>
          </div>

          {/* Price Container */}
          <div className="flex items-end justify-between mt-auto">
            <div className="flex items-end gap-3">
              <span className="text-zinc-900 font-['Barlow_Condensed'] font-black text-3xl leading-none">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-zinc-400 font-medium text-sm line-through mb-0.5">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.discount && (
              <span className="text-[#E63946] text-xs font-bold uppercase tracking-widest mb-1">
                Save {product.discount}%
              </span>
            )}
          </div>
          
        </div>
      </div>
    </motion.div>
  )
}