/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        accent: '#6366F1',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        spinSlow: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        'spin-slow': 'spinSlow 20s linear infinite',
        pulse: 'pulse 6s ease-in-out infinite',
      },
    },
  },
  safelist: [
    'bg-primary', 'bg-accent',
    'text-primary', 'text-accent',
    'dark', // ensure Tailwind keeps the 'dark' class
  ],
};


// Tailwind Animations (add to your tailwind.config.js):
//
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         fadeIn: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
//         spinSlow: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
//       },
//       animation: {
//         fadeIn: 'fadeIn 0.8s ease-out forwards',
//         'spin-slow': 'spinSlow 20s linear infinite',
//         pulse: 'pulse 6s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
//};
