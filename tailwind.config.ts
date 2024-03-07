import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        'color-light': 'var(--color-light)',
        'color-dark': 'var(--color-dark)',
        'accent-primary': 'var(--accent-primary)',
        'accent-primary-state': 'var(--accent-primary-state)'
      }
    }
  },
  plugins: []
} satisfies Config;
