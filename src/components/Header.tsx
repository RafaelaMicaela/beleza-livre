import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'

const Header = () => {
  const { user, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Top Header */}
      <header className="bg-secondary-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/src/assets/icones/lotus.svg" 
                  alt="Beleza Livre Logo" 
                  className="w-10 h-10"
                />
                <span className="text-neutral-600 font-semibold text-lg">Beleza Livre</span>
              </Link>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Digite o que procura"
                  className="w-full pl-10 pr-4 py-2 bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Auth Section - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-neutral-600">Bem-vindo, {user.name}!</span>
                  <button
                    onClick={logout}
                    className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200"
                  >
                    Entrar
                  </Link>
                  <Link
                    to="/register"
                    className="bg-[#A3C96A] hover:bg-[#92B85A] text-secondary-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Cadastrar
                  </Link>
                </div>
              )}
              {/* Cart Icon */}
              <Link to="/cart" className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Cart Icon on Mobile */}
              <Link to="/cart" className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </Link>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Shows when menu is open */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Digite o que procura"
                  className="w-full pl-10 pr-4 py-2 bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-neutral-200 pt-4 pb-4">
              {/* Auth Section on Mobile */}
              <div className="space-y-3 mb-4">
                {user ? (
                  <div className="space-y-2">
                    <span className="block text-neutral-600">Bem-vindo, {user.name}!</span>
                    <button
                      onClick={logout}
                      className="w-full text-left text-neutral-600 hover:text-neutral-500 transition-colors duration-200"
                    >
                      Sair
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      className="block text-neutral-600 hover:text-neutral-500 transition-colors duration-200"
                    >
                      Entrar
                    </Link>
                    <Link
                      to="/register"
                      className="block bg-[#A3C96A] hover:bg-[#92B85A] text-secondary-white px-4 py-2 rounded-lg transition-colors duration-200 text-center"
                    >
                      Cadastrar
                    </Link>
                  </div>
                )}
              </div>

              {/* Navigation Links on Mobile */}
              <div className="space-y-2">
                <Link 
                  to="/products?category=maquiagem" 
                  className="block text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Maquiagem
                </Link>
                <Link 
                  to="/products?category=cabelo" 
                  className="block text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cabelo
                </Link>
                <Link 
                  to="/products?category=cuidado-pessoal" 
                  className="block text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cuidado Pessoal
                </Link>
                <Link 
                  to="/products?category=marcas" 
                  className="block text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Marcas
                </Link>
                <Link 
                  to="/products?category=promocao" 
                  className="block text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Promoção
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Navigation Bar - Hidden on mobile */}
      <nav className="hidden md:block bg-[#BCF4CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-4">
            <Link to="/products?category=maquiagem" className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium">
              Maquiagem
            </Link>
            <Link to="/products?category=cabelo" className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium">
              Cabelo
            </Link>
            <Link to="/products?category=cuidado-pessoal" className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium">
              Cuidado Pessoal
            </Link>
            <Link to="/products?category=marcas" className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium">
              Marcas
            </Link>
            <Link to="/products?category=promocao" className="text-neutral-600 hover:text-neutral-500 transition-colors duration-200 font-medium">
              Promoção
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
