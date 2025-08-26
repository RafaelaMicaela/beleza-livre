import { Link } from 'react-router-dom'

const Home = () => {
  const bestSellers = [
    {
      id: 1,
      name: 'Pasta dental menta e malaleuca sem Flúor - 90g',
      price: 10.90,
      image: '/src/assets/imagens/pasta-de-dental.webp',
      category: 'Cuidado Pessoal'
    },
    {
      id: 2,
      name: 'Serum Facil Esqualano - 30ml',
      price: 73.90,
      image: '/src/assets/imagens/Serum-Facial-Esqualano-Bee-Basics.webp',
      category: 'Skincare'
    },
    {
      id: 3,
      name: 'Manteiga de Cupuaçu - 30g',
      price: 51.90,
      image: '/src/assets/imagens/Manteiga-de-Cupuacu-Natural-Ekilibre-Amazonia.webp',
      category: 'Skincare'
    },
    {
      id: 4,
      name: 'Água Floral de Rosas Bruma Facial - 120ml',
      price: 36.90,
      image: '/src/assets/imagens/elemento-mineral-agua-floral-de-rosas-120ml.webp',
      category: 'Skincare'
    }
  ]

  const newArrivals = [
    {
      id: 5,
      name: 'Sabonete Natural Neutro sem fragrância - 100g',
      price: 28.90,
      image: '/src/assets/imagens/Sabonete-Natural-Neutro-sem-Fragrancia-100g-Almanati.webp',
      category: 'Cuidado Pessoal'
    },
    {
      id: 6,
      name: 'Oleo de Rosa Mosqueta - 30ml',
      price: 71.90,
      image: '/src/assets/imagens/oleo-vegetal-rosa-mosqueta-by-samia.webp',
      category: 'Skincare'
    },
    {
      id: 7,
      name: 'Puro Gel Multifuncional Natural de Aloe - 60ml',
      price: 15.90,
      image: '/src/assets/imagens/puro-gel-multifuncional-natural-de-aloe-60ml–livealoe.webp',
      category: 'Skincare'
    },
    {
      id: 8,
      name: 'AloeGel Base Sem Fragrância - 200g',
      price: 67.90,
      image: '/src/assets/imagens/AloeGel-Base-Sem-Fragrancia-200g---Laszlo.webp',
      category: 'Skincare'
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Os mais vendidos */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-neutral-600 mb-4">Os mais Vendidos</h2>
          </div>
          
          {/* Responsive Container */}
          <div className="relative">
            {/* Mobile: Grid vertical */}
            <div className="grid grid-cols-1 gap-6 md:hidden">
              {bestSellers.map((product) => (
                <div key={product.id} className="bg-secondary-white rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="p-4">
                    <div className="aspect-square bg-neutral-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-xs font-medium text-neutral-600 bg-[#BCF4CC] px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="font-medium text-neutral-600 mb-3 text-sm leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-lg font-semibold text-neutral-600 mb-4">Por: R$ {product.price.toFixed(2)}</p>
                    
                    <Link 
                      to={`/products/${product.id}`} 
                      className="w-full bg-[#89AC55] hover:bg-[#7A9B4A] text-secondary-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center block"
                    >
                      Visualizar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop/Tablet: Scroll horizontal */}
            <div className="hidden md:flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
              {bestSellers.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-80 bg-secondary-white rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="p-4">
                    <div className="aspect-square bg-neutral-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-xs font-medium text-neutral-600 bg-[#BCF4CC] px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="font-medium text-neutral-600 mb-3 text-sm leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-lg font-semibold text-neutral-600 mb-4">Por: R$ {product.price.toFixed(2)}</p>
                    
                    <Link 
                      to={`/products/${product.id}`} 
                      className="w-full bg-[#89AC55] hover:bg-[#7A9B4A] text-secondary-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center block"
                    >
                      Visualizar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Novidades */}
      <section className="py-16 bg-secondary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-neutral-600 mb-4">Novidades</h2>
          </div>
          
          {/* Responsive Container */}
          <div className="relative">
            {/* Mobile: Grid vertical */}
            <div className="grid grid-cols-1 gap-6 md:hidden">
              {newArrivals.map((product) => (
                <div key={product.id} className="bg-secondary-white rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="p-4">
                    <div className="aspect-square bg-neutral-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-xs font-medium text-neutral-600 bg-[#BCF4CC] px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="font-medium text-neutral-600 mb-3 text-sm leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-lg font-semibold text-neutral-600 mb-4">Por: R$ {product.price.toFixed(2)}</p>
                    
                    <Link 
                      to={`/products/${product.id}`} 
                      className="w-full bg-[#89AC55] hover:bg-[#7A9B4A] text-secondary-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center block"
                    >
                      Comprar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop/Tablet: Scroll horizontal */}
            <div className="hidden md:flex space-x-6 overflow-x-auto pb-4 scrollbar-hide pr-6">
              {newArrivals.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-80 bg-secondary-white rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="p-4">
                    <div className="aspect-square bg-neutral-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-xs font-medium text-neutral-600 bg-[#BCF4CC] px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="font-medium text-neutral-600 mb-3 text-sm leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-lg font-semibold text-neutral-600 mb-4">Por: R$ {product.price.toFixed(2)}</p>
                    
                    <Link 
                      to={`/products/${product.id}`} 
                      className="w-full bg-[#89AC55] hover:bg-[#7A9B4A] text-secondary-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center block"
                    >
                      Comprar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Exatamente como no Figma */}
      <section className="py-16 bg-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent-200 rounded-xl p-8 relative">
            {/* Left Arrow */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-secondary-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-secondary-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Content */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-neutral-300 rounded-full flex items-center justify-center mr-4">
                <span className="text-neutral-600 font-semibold text-lg">RE</span>
              </div>
              <div className="text-left">
                <h4 className="font-medium text-neutral-600">Raquel Emanuela</h4>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-neutral-600 text-sm leading-relaxed max-w-2xl mx-auto text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
