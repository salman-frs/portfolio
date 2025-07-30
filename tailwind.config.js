/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium iOS Dynamic Island Palette
        'ios': {
          // System Blues
          blue: '#007AFF',
          'blue-dark': '#0056CC',
          
          // System Greens  
          green: '#34C759',
          'green-dark': '#248A3D',
          
          // System Oranges
          orange: '#FF9500',
          'orange-dark': '#CC7700',
          
          // System Reds
          red: '#FF3B30',
          'red-dark': '#CC2E26',
          
          // Neutrals - True iOS Style
          black: '#000000',
          'gray-6': '#1C1C1E',
          'gray-5': '#2C2C2E', 
          'gray-4': '#3A3A3C',
          'gray-3': '#48484A',
          'gray-2': '#636366',
          'gray-1': '#8E8E93',
          white: '#FFFFFF',
          
          // Dynamic Island Specific
          'island-bg': 'rgba(0, 0, 0, 0.85)',
          'island-border': 'rgba(255, 255, 255, 0.08)',
          'button-bg': 'rgba(255, 255, 255, 0.1)',
          'button-border': 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        'ios': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
        'display': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'body': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // iOS System Typography
        'ios-caption': ['12px', { lineHeight: '16px', letterSpacing: '0' }],
        'ios-footnote': ['13px', { lineHeight: '18px', letterSpacing: '0' }], 
        'ios-subhead': ['15px', { lineHeight: '20px', letterSpacing: '0' }],
        'ios-callout': ['16px', { lineHeight: '21px', letterSpacing: '0' }],
        'ios-body': ['17px', { lineHeight: '22px', letterSpacing: '0' }],
        'ios-headline': ['17px', { lineHeight: '22px', letterSpacing: '0', fontWeight: '600' }],
        'ios-title3': ['20px', { lineHeight: '25px', letterSpacing: '0' }],
        'ios-title2': ['22px', { lineHeight: '28px', letterSpacing: '0' }],
        'ios-title1': ['28px', { lineHeight: '34px', letterSpacing: '0' }],
        'ios-large-title': ['34px', { lineHeight: '41px', letterSpacing: '0' }],
      },
      boxShadow: {
        // iOS Dynamic Island Shadows
        'island': '0 8px 32px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'island-hover': '0 12px 40px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'ios-button': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'ios-button-hover': 'inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'ios-blue': '0 2px 8px rgba(0, 122, 255, 0.3)',
      },
      animation: {
        // Clean iOS Animations
        'ios-fade-in': 'ios-fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'ios-scale': 'ios-scale 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'ios-slide': 'ios-slide 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'wave-simple': 'wave-simple 1.2s ease-in-out infinite',
      },
      keyframes: {
        'ios-fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'ios-scale': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.96)' },
          '100%': { transform: 'scale(1)' }
        },
        'ios-slide': {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'wave-simple': {
          '0%, 100%': { height: '4px', opacity: '0.6' },
          '50%': { height: '12px', opacity: '1' }
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}