import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
  reviewCount: number
  description: string
  ingredients?: string[]
  size?: string
  benefits?: string[]
}

interface Review {
  id: number
  userName: string
  rating: number
  date: string
  comment: string
  verified: boolean
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const images = [
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop'
  ]

  // Mock product data
  useEffect(() => {
    const mockProduct: Product = {
      id: parseInt(id || '1'),
      name: 'Natural Glow Foundation',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
      category: 'makeup',
      rating: 4.5,
      reviewCount: 128,
      description: 'A lightweight foundation that provides natural coverage and a radiant finish. This long-wearing formula blends seamlessly into skin for a flawless, natural look that lasts all day.',
      ingredients: ['Water', 'Glycerin', 'Dimethicone', 'Titanium Dioxide', 'Iron Oxides'],
      size: '30ml',
      benefits: [
        'Natural, buildable coverage',
        'Long-wearing formula',
        'Hydrating and lightweight',
        'Suitable for all skin types',
        'SPF 15 protection'
      ]
    }

    const mockReviews: Review[] = [
      {
        id: 1,
        userName: 'Sarah M.',
        rating: 5,
        date: '2024-01-15',
        comment: 'Absolutely love this foundation! It gives me the perfect natural glow without feeling heavy. Lasts all day and doesn\'t oxidize.',
        verified: true
      },
      {
        id: 2,
        userName: 'Jennifer L.',
        rating: 4,
        date: '2024-01-10',
        comment: 'Great coverage and feels lightweight. The shade match is perfect for my skin tone. Would definitely recommend!',
        verified: true
      },
      {
        id: 3,
        userName: 'Maria R.',
        rating: 5,
        date: '2024-01-05',
        comment: 'This foundation is amazing! It covers my imperfections while still looking natural. The finish is beautiful and it doesn\'t settle into fine lines.',
        verified: false
      }
    ]

    setProduct(mockProduct)
    setReviews(mockReviews)
    setIsLoading(false)
  }, [id])

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    return stars
  }

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    alert(`Added ${quantity} ${product?.name} to cart!`)
  }

  if (isLoading || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-700 hover:text-primary-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link to="/products" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2">
                  Products
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-gray-500 md:ml-2">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <span className="text-sm font-medium text-neutral-600 bg-[#BCF4CC] px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-6">
              ${product.price}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Product Details */}
            {product.benefits && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Purchase Options */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="input-field w-20"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-[#89AC55] hover:bg-[#7A9B4A] text-secondary-white py-3 text-lg font-medium rounded-lg transition-colors duration-200"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>

              <button className="w-full btn-secondary py-3 text-lg font-medium mt-3">
                Add to Wishlist
              </button>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 text-sm text-gray-600">
              {product.size && (
                <div className="flex">
                  <span className="font-medium w-24">Size:</span>
                  <span>{product.size}</span>
                </div>
              )}
              {product.ingredients && (
                <div>
                  <span className="font-medium">Ingredients:</span>
                  <p className="mt-1">{product.ingredients.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium text-gray-900">{review.userName}</h4>
                        {review.verified && (
                          <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center mt-1">
                        {renderStars(review.rating)}
                        <span className="ml-2 text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="btn-secondary">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
