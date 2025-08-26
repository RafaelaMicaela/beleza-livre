# Beleza Livre - Beauty Products E-commerce Platform

Beleza Livre is a modern, responsive e-commerce platform built specifically for beauty products. The platform features a beautiful user interface, comprehensive product management, and seamless user experience for beauty enthusiasts.

## ✨ Features

### 🛍️ **Product Management**
- **Product Catalog**: Browse through a curated collection of beauty products
- **Category Filtering**: Filter products by makeup, skincare, haircare, fragrances, tools, and bath & body
- **Search Functionality**: Search products by name or description
- **Sorting Options**: Sort by name, price (low/high), and rating
- **Product Details**: Comprehensive product information with multiple images, descriptions, and specifications

### 👤 **User Authentication**
- **User Registration**: Create new accounts with email verification
- **User Login**: Secure authentication system
- **Profile Management**: User profile and preferences
- **Social Login**: Google and Facebook authentication options

### 🔍 **Advanced Features**
- **Product Reviews**: Customer feedback and rating system
- **Wishlist**: Save products for later
- **Shopping Cart**: Add products with quantity selection
- **Responsive Grid**: Adaptive product grid layout

## 🚀 Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and building
- **Routing**: React Router for navigation
- **State Management**: React Context API for authentication
- **UI Components**: Custom-built components with Tailwind CSS
- **Icons**: Heroicons and custom SVG icons
- **Fonts**: Inter font family for modern typography

## 🏗️ Project Structure

```
beleza-livre/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── contexts/          # React contexts
│   │   └── AuthContext.tsx # Authentication state
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Landing page
│   │   ├── Login.tsx      # User login
│   │   ├── Register.tsx   # User registration
│   │   ├── ProductList.tsx # Product catalog
│   │   └── ProductDetail.tsx # Product details
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── package.json           # Dependencies and scripts
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
