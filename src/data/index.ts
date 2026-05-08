export interface Product {
  id: number
  name: string
  brand: string
  category: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviews: number
  image: string
  badge?: string
  description: string
  features: string[]
  isNew?: boolean
  isBestSeller?: boolean
}

export interface Brand {
  id: number
  name: string
  logo: string
  description: string
  productCount: number
  color: string
}

export interface Category {
  id: number
  name: string
  icon: string
  count: number
  image: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  rating: number
  text: string
  location: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Astrox 99 Pro',
    brand: 'Yonex',
    category: 'Badminton',
    price: 2850000,
    originalPrice: 3200000,
    discount: 11,
    rating: 4.9,
    reviews: 284,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=400&fit=crop',
    badge: 'Bestseller',
    description: 'The Yonex Astrox 99 Pro is engineered for aggressive overhead play. Used by top professionals worldwide.',
    features: ['Rotational Generator System', 'Namd Graphite Shaft', 'Counter Balance Weight', 'Head Heavy Balance'],
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'N90III Badminton Racket',
    brand: 'Li-Ning',
    category: 'Badminton',
    price: 1950000,
    originalPrice: 2400000,
    discount: 19,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1617083934590-0da28e28ddbc?w=400&h=400&fit=crop',
    badge: 'Sale',
    description: 'Professional grade racket used by Lin Dan. Built for power and precision.',
    features: ['High-Modulus Graphite', 'TB Nano Technology', 'Dynamic-Optimum Frame', 'Speed Zone'],
    isNew: false,
  },
  {
    id: 3,
    name: 'Thruster K Falcon',
    brand: 'Victor',
    category: 'Badminton',
    price: 2200000,
    rating: 4.8,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=400&fit=crop',
    description: 'Built for explosive smashes and fast net play. Preferred by elite players.',
    features: ['Full Graphite', 'PYROFIL Carbon Fiber', 'Hard Flex Shaft', 'Extra Slim Frame'],
    isNew: true,
    badge: 'New',
  },
  {
    id: 4,
    name: 'Predator Accuracy+ FG',
    brand: 'Adidas',
    category: 'Futsal',
    price: 1350000,
    originalPrice: 1700000,
    discount: 21,
    rating: 4.6,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    badge: 'Sale',
    description: 'Dominate the futsal court with precision control and unmatched comfort.',
    features: ['Controlskin Upper', 'Boost Midsole', 'SPRINTFRAME', 'OrthoLite Sockliner'],
  },
  {
    id: 5,
    name: 'Morelia Neo III',
    brand: 'Mizuno',
    category: 'Football',
    price: 2100000,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    badge: 'Premium',
    description: 'The pinnacle of Japanese craftsmanship. Natural kangaroo leather for unmatched touch.',
    features: ['Kangaroo Leather', 'OB-Lite Soleplate', 'Wave Coil Tech', 'Lace Shield'],
    isBestSeller: true,
  },
  {
    id: 6,
    name: 'Air Zoom Pegasus 40',
    brand: 'Nike',
    category: 'Running',
    price: 1890000,
    originalPrice: 2200000,
    discount: 14,
    rating: 4.7,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    badge: 'Sale',
    description: 'The iconic daily trainer, now with responsive React foam and a wider forefoot.',
    features: ['React Foam', 'Air Zoom Unit', 'Engineered Mesh', 'Wider Forefoot'],
  },
  {
    id: 7,
    name: 'RSL Speed Pro Shuttlecock',
    brand: 'RSL',
    category: 'Accessories',
    price: 185000,
    originalPrice: 220000,
    discount: 16,
    rating: 4.5,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    badge: 'Value',
    description: 'Tournament-grade feather shuttlecock. Consistent flight and durability.',
    features: ['Genuine Goose Feather', 'Cork Base', '12 per tube', 'Speed 77'],
  },
  {
    id: 8,
    name: 'Indonesia Training Jersey',
    brand: 'Li-Ning',
    category: 'Jerseys',
    price: 450000,
    rating: 4.8,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&fit=crop',
    badge: 'Official',
    description: 'Official training jersey of the Indonesian national badminton team.',
    features: ['AT Dry Technology', 'Lightweight Fabric', 'Anti-Odor Treatment', 'Slim Fit'],
    isNew: true,
  },
]

export const brands: Brand[] = [
  { id: 1, name: 'Yonex', logo: 'YO', description: 'Japanese precision engineering for badminton excellence since 1946.', productCount: 48, color: '#FF6B35' },
  { id: 2, name: 'Li-Ning', logo: 'LN', description: 'Born from a legend. Chinese powerhouse in global sports.', productCount: 36, color: '#E63946' },
  { id: 3, name: 'Victor', logo: 'VI', description: 'Taiwan\'s elite badminton brand trusted by world champions.', productCount: 29, color: '#2196F3' },
  { id: 4, name: 'Adidas', logo: 'AD', description: 'Three stripes of performance and street culture worldwide.', productCount: 52, color: '#000000' },
  { id: 5, name: 'Mizuno', logo: 'MZ', description: 'Japanese craftsmanship with a commitment to sporting quality.', productCount: 31, color: '#003087' },
  { id: 6, name: 'Nike', logo: 'NK', description: 'Just Do It. The world\'s most iconic athletic brand.', productCount: 61, color: '#FF6600' },
  { id: 7, name: 'Puma', logo: 'PU', description: 'Forever Faster. Speed, style, performance in every stitch.', productCount: 27, color: '#C8102E' },
  { id: 8, name: 'RSL', logo: 'RS', description: 'Specialist shuttlecock manufacturer trusted globally.', productCount: 14, color: '#AAFF00' },
]

export const categories: Category[] = [
  { id: 1, name: 'Badminton', icon: '🏸', count: 124, image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop' },
  { id: 2, name: 'Futsal', icon: '⚽', count: 87, image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop' },
  { id: 3, name: 'Football', icon: '🥅', count: 96, image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=400&fit=crop' },
  { id: 4, name: 'Running', icon: '👟', count: 63, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop' },
  { id: 5, name: 'Jerseys', icon: '👕', count: 58, image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&h=400&fit=crop' },
  { id: 6, name: 'Accessories', icon: '🎒', count: 142, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
]

export const testimonials: Testimonial[] = [
  { id: 1, name: 'Rizky Fadhillah', role: 'Badminton Player', avatar: 'RF', rating: 5, text: 'Udah langganan di sini sejak 2015. Produknya original semua, harga lebih murah dari toko online. Pelayanan ramah banget!', location: 'Malang' },
  { id: 2, name: 'Dinda Ayu Pratiwi', role: 'Futsal Athlete', avatar: 'DA', rating: 5, text: 'Sepatu futsal Adidas yang aku beli di Anugerah Sports kualitasnya top banget. Recommended buat semua atlet Malang!', location: 'Malang' },
  { id: 3, name: 'Bima Sakti', role: 'Football Coach', avatar: 'BS', rating: 5, text: 'Supplier jersey tim kami dari dulu sampai sekarang. Kualitas terjamin, harga bersahabat, pengiriman cepat.', location: 'Batu, Malang' },
  { id: 4, name: 'Hendra Wijaya', role: 'Running Enthusiast', avatar: 'HW', rating: 4, text: 'Beli Nike Pegasus di sini, original dan ada garansi. Staf sangat helpful dalam memilih ukuran yang tepat.', location: 'Malang' },
]

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}