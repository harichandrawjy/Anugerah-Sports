import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, Search, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data'

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Rated', 'Newest']

// Premium easing curve to match the global design system
const springEase = [0.16, 1, 0.3, 1]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const allBrands = ['All', ...Array.from(new Set(products.map(p => p.brand)))]
  const allCategories = ['All', ...categories.map(c => c.name)]

  const filtered = products.filter(p => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory
    const matchBrand = selectedBrand === 'All' || p.brand === selectedBrand
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchBrand && matchSearch
  }).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price
    if (sortBy === 'Price: High to Low') return b.price - a.price
    if (sortBy === 'Best Rated') return b.rating - a.rating
    return 0
  })

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.3 }}
      className="bg-white text-zinc-900 selection:bg-[#E63946] selection:text-white pt-24 min-h-screen"
    >

      {/* HEADER SECTION */}
      <section className="relative pt-12 pb-16 border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: springEase }}
          >
            <span className="text-[#E63946] font-bold text-xs uppercase tracking-widest mb-3 block">
              Complete Collection
            </span>
            <h1 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-7xl uppercase text-zinc-900 tracking-tight mb-2">
              Our Products
            </h1>
            <p className="text-zinc-500 text-lg">
              Showing {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* CONTROLS BAR */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by product or brand..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-4 bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-base focus:outline-none focus:border-[#E63946] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')} 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#E63946] transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative min-w-[200px]">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="w-full appearance-none px-5 py-4 bg-zinc-50 border border-zinc-200 text-zinc-900 text-base font-bold uppercase tracking-wider focus:outline-none focus:border-[#E63946] focus:bg-white transition-colors cursor-pointer"
            >
              {sortOptions.map(s => <option key={s} value={s}>Sort: {s}</option>)}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
              ▼
            </div>
          </div>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center justify-center gap-2 px-8 py-4 border text-sm font-bold uppercase tracking-widest transition-all ${
              showFilters 
                ? 'bg-zinc-900 text-white border-zinc-900' 
                : 'bg-white text-zinc-900 border-zinc-200 hover:border-zinc-400'
            }`}
          >
            <SlidersHorizontal size={18} /> 
            {showFilters ? 'Close Filters' : 'Filters'}
          </button>
        </div>

        {/* EXPANDABLE FILTER PANEL */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 32 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="p-8 bg-zinc-50 border border-zinc-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  
                  {/* Category Filter */}
                  <div>
                    <p className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-4">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {allCategories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border ${
                            selectedCategory === cat 
                              ? 'bg-zinc-900 border-zinc-900 text-white' 
                              : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <p className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-4">Brand</p>
                    <div className="flex flex-wrap gap-2">
                      {allBrands.map(brand => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrand(brand)}
                          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border ${
                            selectedBrand === brand 
                              ? 'bg-zinc-900 border-zinc-900 text-white' 
                              : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900'
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* QUICK CATEGORY PILLS (Horizontal Scroll) */}
        {!showFilters && (
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-zinc-100">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                  selectedCategory === cat 
                    ? 'bg-[#E63946] border-[#E63946] text-white shadow-md shadow-red-500/10' 
                    : 'bg-white border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* PRODUCTS GRID */}
        {filtered.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            <AnimatePresence>
              {filtered.map((product, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                >
                  <ProductCard product={product} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-zinc-50 border border-zinc-200 mt-8"
          >
            {/* EMPTY STATE */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Search size={32} className="text-zinc-300" />
            </div>
            <h3 className="font-['Barlow_Condensed'] font-black text-3xl uppercase text-zinc-900 mb-2 tracking-tight">
              No products found
            </h3>
            <p className="text-zinc-500 text-lg mb-8">
              We couldn't find anything matching your current filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
                setSelectedBrand('All')
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest rounded-full hover:bg-[#E63946] transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

      </div>
    </motion.div>
  )
}