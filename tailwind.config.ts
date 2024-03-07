import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/theme';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/components/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [nextui()]
} satisfies Config;
