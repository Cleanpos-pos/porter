/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F5D76E',
                    dark: '#996515',
                }
            },
            animation: {
                'fadeIn': 'fadeIn 1s ease-out forwards',
                'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
                'scaleIn': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'bounce': 'bounce 1s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
                display: ['Russo One', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
