/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        court: '#0f3b2d',
        courtDeep: '#0c2f24',
        sage: '#6f8f76',
        sageLight: '#8fa991',
        cream: '#f2e9d0',
        maroon: '#6b0f0f',
        maroonDark: '#4f0b0b',
        slateBtn: '#6f7f70',
        navy: '#1b365d',
        outline: '#d5d0bd',
        limeGlow: '#c8ff4d',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Archivo', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 60px rgba(0, 0, 0, 0.35)',
        soft: '0 14px 30px rgba(0, 0, 0, 0.28)',
      },
      borderRadius: {
        xl2: '20px',
      },
    },
  },
  plugins: [],
}
