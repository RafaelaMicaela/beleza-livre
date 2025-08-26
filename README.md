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

### 🎨 **Modern UI/UX**
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Beautiful Animations**: Smooth transitions and hover effects
- **Intuitive Navigation**: Easy-to-use navigation and breadcrumbs
- **Product Reviews**: Customer rating system with verified purchase badges

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

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1280px and up)

## 🎨 Design System

### Color Palette
- **Primary Colors**: Pink gradient (#ec4899 to #be185d)
- **Secondary Colors**: Blue gradient (#0ea5e9 to #0369a1)
- **Neutral Colors**: Gray scale for text and backgrounds
- **Accent Colors**: Green for success, red for errors

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive Sizing**: Fluid typography that scales with screen size

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Product cards with hover effects
- **Forms**: Input fields with focus states
- **Navigation**: Header with responsive menu

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

## 🎯 Key Features Implementation

### Authentication System
- **Context-based state management** for user authentication
- **Local storage persistence** for user sessions
- **Protected routes** and authentication guards
- **Form validation** with error handling

### Product Management
- **Mock data system** for development and testing
- **Dynamic filtering** by category and search terms
- **Sorting algorithms** for various product attributes
- **Responsive grid layout** with hover effects

### User Experience
- **Loading states** and skeleton screens
- **Error boundaries** and user feedback
- **Responsive navigation** with mobile menu
- **Accessibility features** for screen readers

## 🔧 Customization

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update `src/index.css` for global styles
- Customize component classes in individual files

### Data
- Replace mock data with real API endpoints
- Update product categories and attributes
- Modify authentication logic for your backend

### Features
- Add new product categories
- Implement shopping cart functionality
- Add payment processing
- Integrate with external services

## 📱 Browser Support

- **Chrome**: Latest version
- **Firefox**: Latest version
- **Safari**: Latest version
- **Edge**: Latest version
- **Mobile browsers**: iOS Safari, Chrome Mobile

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write clean, readable code
- Add appropriate error handling

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **React Team** for the amazing frontend library
- **Vite** for the fast build tool
- **Unsplash** for placeholder images
- **Heroicons** for beautiful SVG icons

---

**Made with ❤️ for beauty enthusiasts everywhere**

*Beleza Livre - Where beauty meets technology*
