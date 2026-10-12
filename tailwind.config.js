/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        care: {
          50: '#EFF6FF',   // AppColors.primaryLight
          100: '#DBEAFE',  // AppColors.primaryMuted
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',  // AppColors.primary
          600: '#2563EB',
          700: '#1D4ED8',  // AppColors.primaryDark
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#0F1D40',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
          soft: '#EFF6FF',
          subtle: '#EAF2FF',
        },
        navy: {
          950: '#070C18',
          900: '#0B1220', // AppColors.darkBackground
          850: '#101B2D', // AppColors.darkBackgroundSoft
          800: '#111C2E', // AppColors.darkSurface
          750: '#17263E', // AppColors.darkSurfaceSoft
          700: '#1E293B',
          600: '#334155',
        },
        slate: {
          muted: '#8EA0BA',  // AppColors.darkTextTertiary
          subtle: '#B6C2D3', // AppColors.darkTextSecondary
        },
        health: {
          success: '#10B981', // VaccineStatus.completed
          warning: '#F59E0B', // VaccineStatus.due
          danger: '#EF4444',  // VaccineStatus.overdue
          info: '#3B82F6',    // VaccineStatus.upcoming
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
      boxShadow: {
        'care-glow': '0 0 25px -4px rgba(59, 130, 246, 0.45)',
        'care-glow-lg': '0 0 50px -8px rgba(59, 130, 246, 0.55)',
        'subtle-card': '0 2px 10px -2px rgba(0, 0, 0, 0.4), 0 1px 3px -1px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 16px 36px -10px rgba(0, 0, 0, 0.6), 0 4px 12px -3px rgba(59, 130, 246, 0.2)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
