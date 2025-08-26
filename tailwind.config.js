/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#93c5fd',
          400: '#a3bffa', // Main brand color
          500: '#8cafe0', // Hover state
          600: '#7c9fd0',
          700: '#6c8fc0',
          800: '#5c7fb0',
          900: '#4c6fa0',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#d1e7dd', // Light green background accent
          300: '#bbf7d0',
          400: '#86efac',
          500: '#4ade80',
          600: '#22c55e',
          700: '#16a34a',
          800: '#15803d',
          900: '#14532d',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5', // Light gray background
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#4a4a4a', // Dark gray text
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        secondary: {
          black: '#000000', // Product details
          pink: '#f4c2c2', // Product accent
          white: '#ffffff', // Page content background
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.5' }], // Small text
        'sm': ['14px', { lineHeight: '1.5' }], // Body text
        'base': ['16px', { lineHeight: '1.5' }],
        'lg': ['18px', { lineHeight: '1.5' }], // Subheadings
        'xl': ['20px', { lineHeight: '1.5' }],
        '2xl': ['24px', { lineHeight: '1.5' }], // Headings
        '3xl': ['30px', { lineHeight: '1.5' }],
        '4xl': ['36px', { lineHeight: '1.5' }],
      },
      fontWeight: {
        'normal': '400', // Regular
        'medium': '500', // Medium
        'semibold': '600', // Bold
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
