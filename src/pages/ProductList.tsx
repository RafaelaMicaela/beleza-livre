import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
  reviewCount: number
  description: string
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(true)

  const categories = [
    { id: 'all', name: 'Todas as Categorias', icon: '🌟' },
    { id: 'maquiagem', name: 'Maquiagem', icon: '💄' },
    { id: 'cabelo', name: 'Cabelo', icon: '💇‍♀️' },
    { id: 'cuidado-pessoal', name: 'Cuidado Pessoal', icon: '🧴' },
    { id: 'skincare', name: 'Skincare', icon: '✨' },
    { id: 'fragrancias', name: 'Fragrâncias', icon: '🌸' },
    { id: 'ferramentas', name: 'Ferramentas', icon: '🪞' },
    { id: 'banho-corpo', name: 'Banho & Corpo', icon: '🛁' }
  ]

  // Mock products data - produtos reais do Beleza Livre
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Pasta dental menta e malaleuca sem Flúor - 90g',
        price: 10.90,
        image: '../public/imagens/pasta-de-dental.webp',
        category: 'cuidado-pessoal',
        rating: 4.5,
        reviewCount: 128,
        description: 'Pasta dental natural com menta e malaleuca, sem flúor, para uma higiene bucal saudável.'
      },
      {
        id: 2,
        name: 'Serum Facil Esqualano - 30ml',
        price: 73.90,
        image: '../public/imagens/Serum-Facial-Esqualano-Bee-Basics.webp',
        category: 'skincare',
        rating: 4.8,
        reviewCount: 95,
        description: 'Sérum facial com esqualano para hidratação profunda e firmeza da pele.'
      },
      {
        id: 3,
        name: 'Manteiga de Cupuaçu - 30g',
        price: 51.90,
        image: '../public/imagens/Manteiga-de-Cupuacu-Natural-Ekilibre-Amazonia.webp',
        category: 'skincare',
        rating: 4.6,
        reviewCount: 203,
        description: 'Manteiga natural de cupuaçu para hidratação intensa e proteção da pele.'
      },
      {
        id: 4,
        name: 'Água Floral de Rosas Bruma Facial - 120ml',
        price: 36.90,
        image: '../public/imagens/elemento-mineral-agua-floral-de-rosas-120ml.webp',
        category: 'skincare',
        rating: 4.7,
        reviewCount: 156,
        description: 'Bruma facial com água floral de rosas para hidratação e refrescamento.'
      },
      {
        id: 5,
        name: 'Sabonete Natural Neutro sem fragrância - 100g',
        price: 28.90,
        image: '../public/imagens/Sabonete-Natural-Neutro-sem-Fragrancia-100g-Almanati.webp',
        category: 'cuidado-pessoal',
        rating: 4.4,
        reviewCount: 87,
        description: 'Sabonete natural neutro, ideal para peles sensíveis.'
      },
      {
        id: 6,
        name: 'Oleo de Rosa Mosqueta - 30ml',
        price: 71.90,
        image: '../public/imagens/oleo-vegetal-rosa-mosqueta-by-samia.webp',
        category: 'skincare',
        rating: 4.9,
        reviewCount: 234,
        description: 'Óleo de rosa mosqueta para regeneração e hidratação da pele.'
      },
      {
        id: 7,
        name: 'Puro Gel Multifuncional Natural de Aloe - 60ml',
        price: 15.90,
        image: '../public/imagens/AloeGel-Base-Sem-Fragrancia-200g---Laszlo.webp',
        category: 'skincare',
        rating: 4.8,
        reviewCount: 112,
        description: 'Gel de aloe vera natural para múltiplos usos na pele e cabelo.'
      },
      {
        id: 8,
        name: 'AloeGel Base Sem Fragrância - 200g',
        price: 67.90,
        image: '../public/imagens/puro-gel-multifuncional-natural-de-aloe-60ml–livealoe.webp',
        category: 'skincare',
        rating: 4.6,
        reviewCount: 78,
        description: 'Gel base de aloe vera sem fragrância para uso cosmético.'
      }
    ]

    setProducts(mockProducts)
    setFilteredProducts(mockProducts)
    setIsLoading(false)
  }, [])

  // Filter and sort products
  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }, [products, selectedCategory, searchQuery, sortBy])

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    return stars
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400 mx-auto"></div>
          <p className="mt-4 text-neutral-600">Carregando produtos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-neutral-600 mb-2">Nossos Produtos</h1>
          <p className="text-neutral-500">Descubra nossa coleção curada de produtos de beleza premium</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-secondary-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Search - Takes more space on desktop */}
            <div className="lg:col-span-6">
              <label htmlFor="search" className="block text-sm font-medium text-neutral-600 mb-2">
                Buscar Produtos
              </label>
              <input
                type="text"
                id="search"
                placeholder="Buscar por nome ou descrição..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-3">
              <label htmlFor="category" className="block text-sm font-medium text-neutral-600 mb-2">
                Categoria
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field w-full"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:col-span-3">
              <label htmlFor="sort" className="block text-sm font-medium text-neutral-600 mb-2">
                Ordenar Por
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field w-full"
              >
                <option value="name">Nome (A-Z)</option>
                <option value="price-low">Preço (Menor para Maior)</option>
                <option value="price-high">Preço (Maior para Menor)</option>
                <option value="rating">Avaliação</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-neutral-500">
            Mostrando {filteredProducts.length} de {products.length} produtos
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-neutral-600 mb-2">Nenhum produto encontrado</h3>
            <p className="text-neutral-500">Tente ajustar sua busca ou critérios de filtro</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="product-card group"
              >
                <div className="aspect-square bg-neutral-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                <div className="mb-2">
                  <span className="text-xs font-medium text-neutral-600 bg-[#BCF4CC] px-2 py-1 rounded-full">
                    {categories.find(cat => cat.id === product.category)?.name || product.category}
                  </span>
                </div>
                
                <h3 className="font-medium text-neutral-600 mb-2 group-hover:text-primary-400 transition-colors duration-200 text-sm leading-tight">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="ml-2 text-sm text-neutral-500">
                    ({product.reviewCount})
                  </span>
                </div>
                
                <p className="text-lg font-semibold text-neutral-600 mb-3">Por: R$ {product.price.toFixed(2)}</p>
                
                <button className="w-full bg-[#89AC55] hover:bg-[#7A9B4A] text-secondary-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center">
                  Visualizar
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
