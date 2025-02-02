import type { Config } from 'tailwindcss';

import { heroui } from '@heroui/theme';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/components/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [heroui()]
} satisfies Config;
