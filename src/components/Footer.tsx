

const Footer = () => {
  return (
    <footer className="bg-secondary-white text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/src/assets/icones/lotus.svg" 
                alt="Beleza Livre Logo" 
                className="w-10 h-10"
              />
              <span className="text-lg font-semibold">Sobre nós</span>
            </div>
            <p className="text-neutral-600 mb-4 max-w-md text-sm leading-relaxed">
              Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "Não há ninguém que ame a dor por si só, que a busque e queira tê-la, simplesmente por ser dor..."
            </p>
          </div>

          {/* Formas de Pagamento */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-500 tracking-wider uppercase mb-4">
              Formas de Pagamento
            </h3>
            <div className="flex space-x-3">
              <div className="w-12 h-8 bg-neutral-200 rounded flex items-center justify-center">
                <img 
                  src="/src/assets/icones/cartao.svg" 
                  alt="Cartão de Crédito" 
                  className="w-6 h-4"
                />
              </div>
              <div className="w-12 h-8 bg-neutral-200 rounded flex items-center justify-center">
                <img 
                  src="/src/assets/icones/preco.svg" 
                  alt="Código de Barras" 
                  className="w-6 h-4"
                />
              </div>
              <div className="w-12 h-8 bg-neutral-200 rounded flex items-center justify-center">
                <img 
                  src="/src/assets/icones/bitcoin.svg" 
                  alt="Bitcoin" 
                  className="w-6 h-4"
                />
              </div>
            </div>
          </div>

          {/* Selos */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-500 tracking-wider uppercase mb-4">
              Selos
            </h3>
            <div className="flex space-x-3">
              <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                <img 
                  src="/src/assets/icones/Selos/Selo 2/vegan.svg" 
                  alt="Selo Vegano" 
                  className="w-6 h-6"
                />
              </div>
              <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                <img 
                  src="/src/assets/icones/Selos/Selo 2/crueldade-animal.svg" 
                  alt="Selo Livre de Crueldade Animal" 
                  className="w-6 h-6"
                />
              </div>
              <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                <img 
                  src="/src/assets/icones/Selos/Selo 2/produto-organico.svg" 
                  alt="Selo Produto Orgânico" 
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © 2024 Beleza Livre. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-neutral-500 hover:text-neutral-600 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <img 
                  src="/src/assets/icones/RedesSociais/instagram.svg" 
                  alt="Instagram" 
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="text-neutral-500 hover:text-neutral-600 transition-colors duration-200">
                <span className="sr-only">WhatsApp</span>
                <img 
                  src="/src/assets/icones/RedesSociais/whatsapp.svg" 
                  alt="WhatsApp" 
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="text-neutral-500 hover:text-neutral-600 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <img 
                  src="/src/assets/icones/RedesSociais/facebook.svg" 
                  alt="Facebook" 
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
