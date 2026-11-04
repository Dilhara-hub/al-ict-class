export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    fontFamily: { sans: ['"Noto Sans Sinhala"', 'system-ui', 'sans-serif'] },
    colors: { navy: { 950: '#070d1f', 900: '#0b1530', 800: '#111f45', 700: '#1a2d63' }, iris: { 400: '#8b8cff', 500: '#6c63ff', 600: '#5548e6' }, cyan2: '#4dd6e8' }
  } },
  plugins: []
}
