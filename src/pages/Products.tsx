import { useState } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, Search, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data'

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Rated', 'Newest']

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      className="pt-20 min-h-screen">

      {/* Header */}
      <div className="bg-[#0d0d0d] border-b border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#AAFF00] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-[4px] mb-2">Our Collection</p>
          <h1 className="font-['Barlow_Condensed'] font-black text-5xl lg:text-6xl uppercase text-white">All Products</h1>
          <p className="text-zinc-500 mt-2 font-['Barlow']">{filtered.length} products found</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-sm font-['Barlow'] outline-none focus:border-[#AAFF00]/50 transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white">
                <X size={14} />
              </button>
            )}
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm font-['Barlow'] outline-none focus:border-[#AAFF00]/50 transition-colors"
          >
            {sortOptions.map(s => <option key={s}>{s}</option>)}
          </select>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 border rounded-xl text-sm font-['Barlow_Condensed'] font-semibold uppercase tracking-wider transition-colors ${
              showFilters ? 'bg-[#AAFF00] text-black border-[#AAFF00]' : 'bg-zinc-900 border-zinc-800 text-white hover:border-zinc-600'
            }`}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wider mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-['Barlow_Condensed'] font-semibold uppercase tracking-wider transition-all ${
                        selectedCategory === cat ? 'bg-[#AAFF00] text-black' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wider mb-3">Brand</p>
                <div className="flex flex-wrap gap-2">
                  {allBrands.map(brand => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-['Barlow_Condensed'] font-semibold uppercase tracking-wider transition-all ${
                        selectedBrand === brand ? 'bg-[#AAFF00] text-black' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-['Barlow_Condensed'] font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat ? 'bg-[#AAFF00] text-black' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-zinc-400 font-['Barlow_Condensed'] font-bold text-xl uppercase">No products found</p>
            <p className="text-zinc-600 text-sm mt-2 font-['Barlow']">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}