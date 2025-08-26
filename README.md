# Beleza Livre - Beauty Products E-commerce Platform

Beleza Livre is a modern, responsive e-commerce platform built specifically for beauty products. The platform features a beautiful user interface, comprehensive product management, and seamless user experience for beauty enthusiasts.

## ✨ Features

### 🛍️ **Product Management**
- **Product Catalog**: Browse through a curated collection of beauty products
- **Category Filtering**: Filter products by makeup, skincare, haircare, fragrances, tools, and bath & body
- **Search Functionality**: Search products by name or description with responsive search bar
- **Sorting Options**: Sort by name, price (low/high), and rating
- **Product Details**: Comprehensive product information with multiple images, descriptions, and specifications
- **Responsive Design**: Mobile-first approach with hamburger menu and adaptive layouts

### 👤 **User Authentication**
- **User Registration**: Create new accounts with form validation
- **User Login**: Secure authentication system with session management
- **Context API**: React Context for global authentication state
- **Local Storage**: Session persistence for user experience

### 🎨 **Design System**
- **Custom Color Palette**: Primary (#A3BFFA), Accent (#D1E7DD), Neutral (#F5F5F5) colors
- **Typography**: Open Sans font family with consistent sizing
- **Component Library**: Reusable UI components with Tailwind CSS
- **Responsive Layout**: Mobile, tablet, and desktop optimized views
- **Brand Identity**: Lotus logo and consistent visual elements

### 🔍 **Advanced Features**
- **Product Reviews**: Customer feedback and 5-star rating system
- **Testimonials**: Customer testimonial section with navigation
- **Payment Icons**: Multiple payment method displays
- **Certification Seals**: Vegan, cruelty-free, and organic product badges
- **Social Media Integration**: Instagram, WhatsApp, and Facebook links

## 🚀 Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom "Beleza Livre Design System"
- **Build Tool**: Vite for fast development and building
- **Routing**: React Router DOM for navigation
- **State Management**: React Context API for authentication
- **UI Components**: Custom-built components with Tailwind CSS
- **Icons**: Custom SVG icons and logos (lotus, payment methods, seals)
- **Fonts**: Open Sans font family via Google Fonts
- **CSS Processing**: PostCSS with Autoprefixer
- **Code Quality**: ESLint for code linting
- **Package Manager**: npm with package-lock.json

## 🏗️ Project Structure

```
beleza-livre/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Project assets
│   │   ├── icones/        # SVG icons and logos
│   │   │   ├── lotus.svg  # Main logo
│   │   │   ├── cartao.svg # Payment method icons
│   │   │   ├── preco.svg  # Payment method icons
│   │   │   ├── bitcoin.svg # Payment method icons
│   │   │   ├── Selos/     # Product certification seals
│   │   │   │   └── Selo 2/
│   │   │   │       ├── vegan.svg
│   │   │   │       ├── crueldade-animal.svg
│   │   │   │       └── produto-organico.svg
│   │   │   └── RedesSociais/ # Social media icons
│   │   │       ├── instagram.svg
│   │   │       ├── whatsapp.svg
│   │   │       └── facebook.svg
│   │   └── imagens/       # Product images
│   │       ├── pasta-de-dental.webp
│   │       ├── Serum-Facial-Esqualano-Bee-Basics.webp
│   │       ├── Manteiga-de-Cupuacu-Natural-Ekilibre-Amazonia.webp
│   │       ├── elemento-mineral-agua-floral-de-rosas-120ml.webp
│   │       ├── Sabonete-Natural-Neutro-sem-Fragrancia-100g-Almanati.webp
│   │       ├── oleo-vegetal-rosa-mosqueta-by-samia.webp
│   │       ├── puro-gel-multifuncional-natural-de-aloe-60ml–livealoe.webp
│   │       └── AloeGel-Base-Sem-Fragrancia-200g---Laszlo.webp
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx     # Responsive navigation header with hamburger menu
│   │   └── Footer.tsx     # Site footer with payment methods and social media
│   ├── contexts/          # React contexts
│   │   └── AuthContext.tsx # Authentication state management
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Landing page with featured products and testimonials
│   │   ├── Login.tsx      # User login with lotus logo
│   │   ├── Register.tsx   # User registration with lotus logo
│   │   ├── ProductList.tsx # Product catalog with search and filtering
│   │   └── ProductDetail.tsx # Detailed product view with images and reviews
│   ├── App.tsx            # Main app component with routing
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind CSS utilities
├── .gitignore             # Git ignore rules
├── tailwind.config.js     # Tailwind CSS configuration with custom design system
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript configuration for Node.js
├── vite.config.ts         # Vite build configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 14.x or later
- **npm** or **yarn**: Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/beleza-livre.git
   cd beleza-livre
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ for beauty enthusiasts everywhere**

*Beleza Livre - Where beauty meets technology*
